import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import { Provider } from "react-redux";
import Register from "./components/auth/Register";
import store from "./store";
import Alert from "./components/layout/Alert";
import setUserToken from "./utils/setUserToken";
import { loadUser } from "./actions/auth";
import Dashboard from "./dashboard/Dashboard";
import PrivateRoutes from "./components/routing/PrivateRoutes";
import CreateProfile from "./components/create-profile/CreateProfile";
import EditProfile from "./components/create-profile/EditProfile";
import AddExperience from "./components/create-profile/AddExperience";
import AddEducation from "./components/create-profile/AddEducation";
import Profiles from "./components/Profiles/Profiles";
import Profile from "./components/Profile/Profile";
import Posts from "./components/Posts/Posts";
import Post from "./components/Post/Post";

const App = () => {
  if (localStorage.token) {
    setUserToken(localStorage.token);
  }

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Route exact path="/" component={Landing} />

        <section className="container">
          <Alert />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profiles" component={Profiles} />
            <PrivateRoutes exact path="/profiles/:id" component={Profile} />
            <PrivateRoutes exact path="/dashboard" component={Dashboard} />
            <PrivateRoutes
              exact
              path="/create-profile"
              component={CreateProfile}
            />
            <PrivateRoutes exact path="/edit-profile" component={EditProfile} />
            <PrivateRoutes
              exact
              path="/add-experience"
              component={AddExperience}
            />
            <PrivateRoutes
              exact
              path="/add-education"
              component={AddEducation}
            />
            <PrivateRoutes exact path="/posts" component={Posts} />
            <PrivateRoutes exact path="/posts/:id" component={Post} />
          </Switch>
        </section>
      </Router>
    </Provider>
  );
};

export default App;
