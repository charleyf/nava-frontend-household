import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

function Navbar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h4">Your household</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
