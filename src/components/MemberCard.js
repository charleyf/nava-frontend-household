import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";

function MemberCard({ member }) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Grid>
          <Grid item>
            <Typography variant="h5">{member?.name}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" component="span">
              Description: {member?.description}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" component="span">
              Favorite fruit: {member?.favorite_fruit}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default MemberCard;
