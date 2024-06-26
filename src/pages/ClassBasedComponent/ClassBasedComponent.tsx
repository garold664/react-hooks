import React, { Component } from 'react';

const users = ['John', 'Tom', 'Ella', 'Rick', 'Anthony'];

type StateValues = {
  showUsers: boolean;
  searchTerm: string;
  filteredUsers: string[];
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
        {/* <button onClick={this.toggleUsersHandler.bind(this)}> */}
        <button onClick={() => this.toggleUsersHandler()}>
          toggle users list
        </button>
        {this.state.showUsers && (
          <div>
            <ul>
              {this.state.filteredUsers.map((user) => (
                <li key={user}>{user}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}
