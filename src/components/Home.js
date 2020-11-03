// App components
import Pageheader from "./Pageheader";
import Household from "./Household";
import useStyles from "../styles.js";
// material-ui
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
// react-router
import { useHistory } from "react-router-dom";

function Home({ members }) {
  const history = useHistory();
  const classes = useStyles();

  return (
    <>
      <Container>
        <Pageheader
          title={"Your household"}
          description={
            "Welcome to The Marketplace! Review your household below:"
          }
        />
        <Household members={members} />
        <div className={classes.addSpacing}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              history.push("/add"); // Go to the add page
            }}
          >
            Add new member
          </Button>
        </div>
      </Container>
    </>
  );
}

export default Home;
