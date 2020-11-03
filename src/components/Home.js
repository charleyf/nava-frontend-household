// App components
import Household from "./Household";
import useStyles from "../styles.js";
// material-ui
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
// react-router
import { useHistory } from "react-router-dom";

function Home({ members }) {
  const history = useHistory();
  const classes = useStyles();

  return (
    <>
      <Container>
        <Typography variant="h4" className={classes.addSpacing}>
          Your household
        </Typography>
        <Typography variant="body1" className={classes.addSpacing}>
          Welcome to The Marketplace! Review your household below:
        </Typography>
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
