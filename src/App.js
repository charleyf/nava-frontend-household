import Navbar from "./components/Navbar";
import Pageheader from "./components/Pageheader";
import Button from "@material-ui/core/Button";

function App() {
  return (
    <>
      <Navbar />
      <Pageheader
        title={"Your household"}
        description={"Welcome to The Marketplace! Review your household below:"}
      />
      <Button variant="contained" color="primary" onClick={() => {}}>
        Add new member
      </Button>
    </>
  );
}

export default App;
