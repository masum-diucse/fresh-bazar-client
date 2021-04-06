import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../App';


const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const signedStatus=((loggedInUser?.userName?.length)>0);
    return (
        <Route
        {...rest}
        render={({ location }) =>
        signedStatus ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;