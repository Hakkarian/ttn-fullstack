import { useCallback, useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState({
    username: '',
    email: ''
  });

  const getAllUsers = useCallback(async () => {
    // we will use nginx to redirect it to the proper URL
    try {
      const data = await axios.get("/api/users/all");
      setUsers(
        data.data.rows.map((row) => ({
          username: row.username,
          email: row.email,
        }))
      );
    } catch (error) {
      console.log(error)
      
    }
  }, []);

  const createUser = useCallback(
    async (event) => {
      event.preventDefault();

      try {
        await axios.post("/api/users", value);
      } catch (error) {
        console.log(error)
      }

      setValue({ username: '', email: '' });
      getAllUsers();
    },
    [value, getAllUsers]
  );

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div>
      <button onClick={getAllUsers}>Get all numbers</button>
      <br />
      <span>Values</span>
      <div>
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
      </div>
      <form className="form" onSubmit={createUser}>
        <label>
          <input
            type="name"
            name="username"
            value={value.username}
            onChange={(e) => setValue({ ...value, username: e.target.value })}
          />
        </label>
        <label>
          <input
            type="email"
            name="email"
            value={value.email}
            onChange={(e) => setValue({ ...value, email: e.target.value })}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Home;
