import { FC, useEffect } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { IUser } from "./models/IUser";
import { fetchUsers } from "./actions/userAction";
import PostContainer from "./components/PostContainer";

const App: FC = () => {
  // const { users, errorMessage, isLoading } = useAppSelector(state => state.userReducer);
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, [])

  return (
    <div className="App">
      <PostContainer />
      {/* {users && users.map((user: IUser) => <div key={user.id}><h3>{user.name}</h3></div>)}
      {isLoading && <h1>Loading...</h1>}
      {errorMessage && <h1>{errorMessage}</h1>} */}
    </div>
  );
};

export default App;
