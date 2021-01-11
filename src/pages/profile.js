import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();

  useEffect(()=>{
    if (isLoading) {
      return <div>Loading ...</div>;
    }

    if(!isAuthenticated) {
      loginWithRedirect();
      return null;
    }
  },[isAuthenticated, isLoading, loginWithRedirect ]);

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