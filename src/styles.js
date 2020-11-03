import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  addSpacing: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  bold: {
    fontWeight: "bold",
  },
}));

export default useStyles;
