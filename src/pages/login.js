import React from "react"
import { Link, navigate } from "gatsby";
import { useAuth0 } from "@auth0/auth0-react"

const Account = () => {
  const { isAuthenticated, loading, logout, user, loginWithPopup } = useAuth0()
  if (loading) {
    return <p>Loading...</p>
  }

  if(isAuthenticated) {
		navigate("/");
		return null;
	}

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
          <pre>{isAuthenticated && JSON.stringify(user, null, 2)}</pre>
        </>
      ) : (
        <>
          <h2>Hi, try logging in:</h2>
          <button onClick={() => loginWithPopup()}>Log in</button>
          <pre>{isAuthenticated && JSON.stringify(user, null, 2)}</pre>
        </>
      )}
    </div>
  )
}

export default Account