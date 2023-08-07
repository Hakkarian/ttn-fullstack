import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [value, setValue] = useState({
        username: "",
        email: ""
    })

    const getAllUsers = useCallback(async () => {
        const res = await axios.get('/api/users');
        setUsers(res.data.rows);
    }, [])

    const createUser = useCallback(async () => {
        await axios.post('/api/users', value);
    }, [value])

    useEffect(() => {
        getAllUsers();
    }, []);

    return (
      <>
        <div>
          <div>
            <h1>Users:</h1>
          </div>
          {users.length !== 0 && (
            <ul>
              {users.map((user) => (
                <li>
                  <div>
                    <h2>{user.username}</h2>
                  </div>
                  <div>
                    <p>{user.email}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <form onSubmit={createUser}>
            <label>
              <input
                type="name"
                name="username"
                value={value.username}
                onChange={(e) =>
                  setValue({ ...value, username: e.target.value })
                }
              />
            </label>
            <label>
              <input
                type="email"
                name="email"
                value={value.username}
                onChange={(e) =>
                  setValue({ ...value, email: e.target.value })
                }
              />
                    </label>
                    <button type='button'>Submit</button>
          </form>
        </div>
      </>
    );
}

export default Home