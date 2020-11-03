import Typography from "@material-ui/core/Typography";
import useStyles from "../styles";

function Pageheader({ title, description }) {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h4" className={classes.addSpacing}>
        {title}
      </Typography>
      <Typography variant="body1" className={classes.addSpacing}>
        {description}
      </Typography>
    </>
  );
}

export default Pageheader;
