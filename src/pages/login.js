import React, { useEffect } from "react"
import { Link, navigate } from "gatsby";
import { useAuth0 } from "@auth0/auth0-react"

const Account = () => {
  const { isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();

  useEffect(()=>{
    if (isLoading) {
      return <div>Loading ...</div>;
    }

    if(!isAuthenticated) {
      loginWithRedirect();
      return null;
    } else {
      navigate("/");
      return null;
    }
  },[isAuthenticated, isLoading, loginWithRedirect ]);   

  return (
    <div>
      {isAuthenticated ? (
        <>
			<Link
				to="/health"
				className="nav-link"
				activeClassName="active-link"
			  >
			<img src="./images/icons/heart.svg" alt="" width="24" height="24" title="Heart" />
			My Health
		  </Link>
          <button onClick={() => logout()}>Log out</button>
          <p>Check out the user data supplied by Auth0, below:</p>
        </>
      ) : (
        <>
          <h2>Hi, try logging in:</h2>
          {/* <button onClick={() => loginWithPopup()}>Log in</button>
          <pre>{isAuthenticated && JSON.stringify(user, null, 2)}</pre> */}
        </>
      )}
    </div>
  )
}

export default Account