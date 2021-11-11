import { useState } from "react";
type AuthUser = {
  name: string;
  email: string;
};
export const Users = () => {
  // when user visits the website they are not logged in , if thats the case so null is initiated
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: "lohitha",
      email: "lohitha@example.com",
    });
  };
  // const handleLogout = () => {
  //   setUser(null);
  // };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogout}>Logout</button> */}
      <div>User name is {user.name}</div>
      <div>User Email is {user.email}</div>
    </div>
  );
};
