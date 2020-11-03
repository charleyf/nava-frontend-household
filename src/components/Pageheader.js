import Typography from "@material-ui/core/Typography";

function Pageheader({ title, description }) {
  return (
    <>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="body1">{description}</Typography>
    </>
  );
}

export default Pageheader;
