import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Auth from "./views/Auth";
import Dashboard from "./views/Dashboard";
import ProtectedRoute from "./components/routing/ProtectedRoute";
import About from "./views/About";
import landing from "./components/layout/Landing";
import ScienceView from "./views/ScienceView";
import MajorView from "./views/MajorView";
import StudentView from "./views/StudentView";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" render={landing} />{" "}
          <Route
            exact
            path="/login"
            render={(props) => (
              <Auth {...props} authRoute="login">
                {" "}
              </Auth>
            )}
          />
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />{" "}
          <ProtectedRoute exact path="/students" component={StudentView} />{" "}
          <ProtectedRoute exact path="/science" component={ScienceView} />{" "}
          <ProtectedRoute exact path="/major" component={MajorView} />{" "}
          <Redirect from="*" to="/" />
        </Switch>{" "}
      </Router>{" "}
    </>
  );
}

export default App;
