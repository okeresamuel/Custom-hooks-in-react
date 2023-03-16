import { INITIAL_USERS_STATE, usersReducer } from "./Hooks/userReducer";
import {userReducer_ActionTypes} from "./Hooks/Types/userReducer_ActionTypes"
import { useReducer, useEffect } from "react";
import axios from "axios";

const Users = () => {
  const [state, dispatch] = useReducer(usersReducer, INITIAL_USERS_STATE);
  const loadData = async () => {
    try {
      dispatch({ type: userReducer_ActionTypes.PENDING });
      let response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/`
      );
      dispatch({ type: userReducer_ActionTypes.FUFILLED, payload: response.data });
    } catch (err) {
      dispatch({ type: userReducer_ActionTypes.REJECTED, payload: err.message });
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  //The state contains all the information for the user let display them

  return (
    <>
      <div>
        <h2>User Informations</h2>
        <div className="user_Tag">
          <h3>username</h3>
          <h3>email</h3>
          <h3>phone</h3>
          <h3>website</h3>
        </div>

        <div className="container_Outer">
          {state.users?.map((user) => {
            return (
              <>
                <div className="container_Inner">
                  <p>{user?.name}</p>
                  <p>{user?.email}</p>
                  <p>{user?.phone}</p>
                  <p>{user?.website}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
      {state.pending ? (
        <h1 className="loading" style={{ color: "white", textAlign: "center" }}>
          Loading...
        </h1>
      ) : null}
    </>
  );
};

export default Users;
