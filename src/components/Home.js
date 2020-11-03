// App components
import Navbar from "./Navbar";
import Pageheader from "./Pageheader";
import Household from "./Household";
// material-ui
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
// react-router
import { useHistory } from "react-router-dom";

function Home({ members }) {
  const history = useHistory();
  return (
    <>
      <Navbar title={"Marketplace"} />
      <Container>
        <Pageheader
          title={"Your household"}
          description={
            "Welcome to The Marketplace! Review your household below:"
          }
        />
        <Household members={members} />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            history.push("/add"); // Go to the add page
          }}
        >
          Add new member
        </Button>
      </Container>
    </>
  );
}

export default Home;
