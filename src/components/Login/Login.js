import { Button, Container, makeStyles, Paper } from '@material-ui/core';
import { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { auth, googleAuthProvider } from '../../helpers/firebase.config';
import { store } from '../../store/store';
import { loginSuccessAction } from '../../store/action/actions';
import { createOrUpdateUser } from '../../functions/auth';

const useStyles = makeStyles((theme) => ({
  center: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },

  google: {
    backgroundColor: '#DB4437',
    color: '#fff',
  },
}));

const Login = () => {
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  const history = useHistory();
  const location = useLocation();

  const {
    dispatch,
    state: { user },
  } = useContext(store);

  console.log({ jashim: user });

  let { from } = location.state || { from: { pathname: '/' } };

  console.log({ aaa: location.state });

  const roleBasedRedirect = (res) => {
    if (res.data.role === 'admin') {
      history.push('/addService');
    } else {
      history.push(from);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const result = await auth.signInWithPopup(googleAuthProvider);
      console.log(result);
      const { user } = result;
      const idTokenResult = await user.getIdTokenResult();
      const res = await createOrUpdateUser(idTokenResult.token);
      dispatch(loginSuccessAction(res.data, idTokenResult.token));
      // history.replace(from);
      roleBasedRedirect(res);
      //   toast.dark(` ${res.data.name} is signed in our system`);
    } catch (error) {
      setLoading(false);
      console.log(error);
      if (error.code === 'auth/account-exists-with-different-credential') {
        // toast.error(`${error.email} is already taken`);
      }
    }
  };

  useEffect(() => {
    if (user?.name) {
      history.replace(from);
    }
  }, [user]);

  return (
    <Container>
      <div className={classes.center}>
        <Button
          variant='contained'
          color='primary'
          onClick={handleGoogleSignIn}
          className={classes.google}
        >
          Login With Google
        </Button>
      </div>
    </Container>
  );
};

export default Login;
