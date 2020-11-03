import { useState } from "react";
// Home page
import Home from "./components/Home";
import Add from "./components/Add";

// react router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

function App() {
  const history = useHistory();

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
  const [members, setMembers] = useState(initial_members);
  const add_member = (input) => {
    setMembers(
      members.concat({
        name: "me",
        description: "stuff",
        favorite_fruit: "banana",
      })
    );
  };

  return (
    <Router>
      <Switch>
        <Route path="/add">
          <Add add_member={add_member} />
        </Route>
        <Route path="/">
          <Home members={members} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
