import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

function Navbar({ title }) {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h4">{title}</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
