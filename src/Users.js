import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./Users.css";
import UsersList from "./UsersList";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
    this.input = React.createRef();
  }
  addUser = (event) => {
    event.preventDefault();
    let newuser = this.input.current.value;
    if (newuser !== "") {
      this.setState((state) => {
        return { users: state.users.concat(newuser) };
      });
      this.input.current.value = "";
    }
    else alert("POdaj nazwe uzytkownika do dodania")
  };
  removeUser = (userIndex) => {
    this.setState((state) => {
      return {
        users: state.users.filter((user, index) => index !== userIndex),
      };
    });
  };
  render() {
    return (
      <div className="user-main">
        <h1>Users List</h1>
        <form onSubmit={this.addUser}>
          <input
            type="text"
            placeholder="Enter name"
            ref={this.input}
            maxLength={17}
          />
          <button type="submit">Add User</button>
        </form>
        <UsersList
          usersList={this.state.users}
          removeMethod={this.removeUser}
        />
      </div>
    );
  }
}
export default Users;
