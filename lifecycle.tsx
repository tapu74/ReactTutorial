import React, { Component } from 'react';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
  }

  componentDidMount() {
    // Simulating an API call to fetch user data
    fetch('/api/user')
      .then((response) => response.json())
      .then((data) => this.setState({ user: data }));
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        {user ? (
          <div>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    );
  }
}

export default UserProfile;
