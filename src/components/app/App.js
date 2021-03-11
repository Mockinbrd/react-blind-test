import Header from "../header";
import Landing from "../landing";
import LogIn from "../login";
import Register from "../register";
import Error from "../error";
import Home from "../home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/home" component={Home} />
          <Route path="/login" component={LogIn} />
          <Route path="/register" component={Register} />
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
