import './App.css';
import React from 'react';
import Button from 'react-bootstrap/Button';

class Welcome extends React.Component {
  render() {
    return (
      <form className="App-header">
        <h1>Welcome</h1>
        <p>Enter Username:</p>
        <input
          type="text" placeholder="Username"
        />
        <p>Enter Password</p>
        <input
          type="text" placeholder="Password"
        />
        <br/>
        <Button variant="primary">Login</Button>{' '}
      </form>
    );
  }
}

export default Welcome;