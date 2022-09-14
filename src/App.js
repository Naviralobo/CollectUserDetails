import React, { useState, Fragment } from "react";

import AddUser from "./components/User/AddUser";
import UsersList from "./components/User/UsersList";

const App = () => {
  const [usersList, setUserslist] = useState([]);

  const addUserHandler = (userName, userAge, userCollege) => {
    setUserslist((prev) => {
      return [
        ...prev,
        {
          name: userName,
          age: userAge,
          college: userCollege,
          id: Math.random().toString(),
        },
      ];
    });
  };
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
};

export default App;
