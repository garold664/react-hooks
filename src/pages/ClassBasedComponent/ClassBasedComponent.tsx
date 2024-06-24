import React, { Component } from 'react';

const users = ['user1', 'user2', 'user3'];
export default class ClassBasedComponent extends Component<
  { value: string },
  { showUsers: boolean }
> {
  constructor(props: { value: string }) {
    super(props);
    this.state = {
      showUsers: false,
    };
  }

  toggleUsersHandler() {
    this.setState((curState: { showUsers: boolean }) => {
      return { showUsers: !curState.showUsers };
    });
  }

  render() {
    return (
      <div>
        <h1>ClassBasedComponent</h1>
        <div>value: {this.props.value}</div>
        {/* <button onClick={this.toggleUsersHandler.bind(this)}> */}
        <button onClick={() => this.toggleUsersHandler()}>
          toggle users list
        </button>
        {this.state.showUsers && (
          <div>
            <ul>
              {users.map((user) => (
                <li key={user}>{user}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}
