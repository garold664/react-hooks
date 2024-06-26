import React, { Component } from 'react';
import ListOfUsers from './ListOfUsers';

const users = ['John', 'Tom', 'Ella', 'Rick', 'Anthony'];

type StateValues = {
  showUsers: boolean;
  searchTerm: string;
  filteredUsers: string[];
  counter: number;
};
type PropsValues = { value: string };

export default class ClassBasedComponent extends Component<
  PropsValues,
  StateValues
> {
  constructor(props: { value: string }) {
    super(props);
    this.state = {
      showUsers: false,
      searchTerm: '',
      filteredUsers: users,
      counter: 0,
    };
  }

  toggleUsersHandler() {
    this.setState((curState: { showUsers: boolean }) => {
      return { showUsers: !curState.showUsers };
    });
  }

  componentDidMount() {
    console.log('ClassBasedComponent mounted');
  }

  componentDidUpdate(_prevProps: PropsValues, prevState: StateValues) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: users.filter((user) =>
          user.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        ),
      });
    }
  }

  componentWillUnmount() {
    console.log('ClassBasedComponent will unmount');
  }

  shouldComponentUpdate(nextProps: PropsValues, nextState: StateValues) {
    if (nextState.filteredUsers.length !== this.state.filteredUsers.length) {
      return false;
    }

    return true;
  }

  render() {
    return (
      <div>
        <h1>ClassBasedComponent</h1>
        <div>value: {this.props.value}</div>
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={(e) => {
            this.setState(() => {
              return {
                searchTerm: e.target.value,
              };
            });
          }}
        />
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          {this.state.counter}
        </button>
        {/* <button onClick={this.toggleUsersHandler.bind(this)}> */}
        <button onClick={() => this.toggleUsersHandler()}>
          toggle users list
        </button>
        {this.state.showUsers && (
          <ListOfUsers users={this.state.filteredUsers} />
        )}
      </div>
    );
  }
}
