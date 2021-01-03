import React from "react";
import { navigate } from "gatsby";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if(!isAuthenticated) {
    navigate("/login");
    return null;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <button onClick={() =>logout()}>logout</button>
      </div>
    )
  );
};

export default Profile;