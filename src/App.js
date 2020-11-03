// Home page
import Home from "./components/Home";
import Add from "./components/Add";
import Navbar from "./components/Navbar";
// Hooks
import useMembers from "./hooks";

// react router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const initial_members = [
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
  const { members, add_member } = useMembers(initial_members);

  return (
    <Router>
      <Switch>
        <Route path="/add">
          <>
            <Navbar title={"Marketplace"} />
            <Add add_member={add_member} />
          </>
        </Route>
        <Route path="/">
          <>
            <Navbar title={"Marketplace"} />
            <Home members={members} />
          </>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
