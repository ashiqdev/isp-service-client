import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AddService from './components/AddService/AddService';
import AdminBookings from './components/Bookings/AdminBookings/AdminBookings';
import UserBookings from './components/Bookings/UserBookings/UserBookings';
import CreateOrder from './components/CreateOrder/CreateOrder';
import CreateReview from './components/CreateReview/CreateReview';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';
import ManageServices from './components/ManageServices/ManageServices';

import AdminRoute from './components/Routes/AdminRoute';
import PrivateRoute from './components/Routes/PrivateRoute';
import UserDashBoard from './components/UserDashBoard/UserDashBoard';
import UserLayout from './components/UserLayout/UserLayout';
import { currentUser } from './functions/auth';
import { auth } from './helpers/firebase.config';
import { loginSuccessAction } from './store/action/actions';
import { store } from './store/store';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#343a40',
    },

    secondary: {
      main: '#6610f2',
    },
  },
});

function App() {
  const {
    dispatch,
    state: { user: myUser },
  } = useContext(store);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      try {
        if (user) {
          const idTokenResult = await user.getIdTokenResult();
          const res = await currentUser(idTokenResult.token);

          dispatch(loginSuccessAction(res.data, idTokenResult.token));
        }
      } catch (error) {
        console.log(error);
      }
    });

    // clean up
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/login'>
            <Login />
          </Route>

          {/* {!myUser && (
       
          )} */}

          <PrivateRoute exact path='/book/:id'>
            <UserLayout>
              <CreateOrder />
            </UserLayout>
          </PrivateRoute>

          {myUser &&
            (myUser.role === 'user' ? (
              <UserLayout>
                <PrivateRoute exact path='/crete-review'>
                  <CreateReview />
                </PrivateRoute>

                <PrivateRoute exact path='/book/:id'>
                  <CreateOrder />
                </PrivateRoute>

                <PrivateRoute exact path='/bookingList'>
                  <UserBookings />
                </PrivateRoute>
              </UserLayout>
            ) : (
              <Layout>
                <AdminRoute exact path='/addService'>
                  <AddService />
                </AdminRoute>

                <AdminRoute exact path='/manageServices'>
                  <ManageServices />
                </AdminRoute>

                <AdminRoute exact path='/makeAdmin'>
                  <MakeAdmin />
                </AdminRoute>

                <AdminRoute exact path='/allBookings'>
                  <AdminBookings />
                </AdminRoute>
              </Layout>
            ))}
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
