import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import useStyles from "../styles";

function MemberCard({ member }) {
  const classes = useStyles();

  return (
    <Card variant="outlined">
      <CardContent>
        <Grid>
          <Grid item>
            <Typography variant="h6" className={classes.bold}>
              {member?.name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              component="span"
              className={classes.bold}
            >
              {"Description: "}
            </Typography>
            <Typography variant="body1" component="span">
              {member?.description}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              component="span"
              className={classes.bold}
            >
              {"Favorite fruit: "}
            </Typography>
            <Typography variant="body1" component="span">
              {member?.favorite_fruit}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default MemberCard;
