import { Component } from 'react';

class UserProfile extends Component {
  render() {
    const { id, name, email } = this.props.user;

    return <p key={id}>{name}: {email}</p>
  }
}