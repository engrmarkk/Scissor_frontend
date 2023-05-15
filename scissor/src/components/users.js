import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/user.css'
// import BASE_URL from './utils/constants';

const BASE_URL = 'http://localhost:5000';

function UsersTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/users`)
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UsersTable;
