import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

function Navbar({ title }) {
  const history = useHistory();
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h4" onClick={() => history.push("/")}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
