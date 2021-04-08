import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { Button, Card } from 'react-bootstrap';
import './Login.css';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    document.title="Login";
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider) 
            .then((result) => {
                const {displayName,email}=result.user;
                const signedInUser={userName:displayName,userEmail:email};
                setLoggedInUser(signedInUser);
                history.replace(from);
            }).catch((error) => {
                console.log(error);
            });
    }
    // console.log("logged user",(loggedInUser?.userName?.length)>0);
const handleFacebookSignIn = () => { }
return (
    <div className="d-flex justify-content-center align-items-center full-height">
        <Card style={{ width: '30rem'}}  >
            <Button onClick={handleGoogleSignIn} variant="danger" className="m-3">Google</Button>
            <Button onClick={handleFacebookSignIn} variant="primary" className="m-3">Facebook</Button>
        </Card>
    </div>
);
};

export default Login;