import MemberCard from "./MemberCard";
import Grid from "@material-ui/core/Grid";

function Household({ members }) {
  return (
    <Grid container spacing={2}>
      {members.map((member) => {
        return (
          <Grid item md={3} sm={6} xs={12}>
            <MemberCard member={member} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Household;
