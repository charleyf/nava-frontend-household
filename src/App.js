// Home page
import Home from "./components/Home";
import Add from "./components/Add";

// react router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const members = [
    {
      name: "Bud Baxter",
      description: "Household contact",
      favorite_fruit: "Apple",
    },
    {
      name: "Andy Baxter",
      description: "Household contact",
      favorite_fruit: "Apple",
    },
  ];

  return (
    <Router>
      <Switch>
        <Route path="/add">
          <Add members={members} />
        </Route>
        <Route path="/">
          <Home members={members} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
