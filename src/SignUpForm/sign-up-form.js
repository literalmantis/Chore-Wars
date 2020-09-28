import React, { Component } from "react";
import { BrowserRouter, Route, Link, Router } from "react-router-dom";
import "./sign-up-form.css";

export default class SignUpForm extends Component {
  render() {
    return (
      <div>
        <form className="signup-form">
          <div>
            <input
              placeholder="First Name"
              type="text"
              name="first-name"
              id="first-name"
            />
          </div>
          <div>
            <label>Last name</label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              placeholder="Last Name"
            />
          </div>
          <div>
            <label>Email</label>
            <input type="text" name="username" id="username" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <button>Sign Up</button>
        </form>
      </div>
    );
  }
}
