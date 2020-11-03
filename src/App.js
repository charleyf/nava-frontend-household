import Navbar from "./components/Navbar";
import Pageheader from "./components/Pageheader";
import Household from "./components/Household";
import Button from "@material-ui/core/Button";

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
    <>
      <Navbar />
      <Pageheader
        title={"Your household"}
        description={"Welcome to The Marketplace! Review your household below:"}
      />
      <Household members={members} />
      <Button variant="contained" color="primary" onClick={() => {}}>
        Add new member
      </Button>
    </>
  );
}

export default App;
