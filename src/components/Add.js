import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

function Add({ members }) {
  const history = useHistory();
  const add_member = () => {
    history.push("/");
  };
  return (
    <>
      {members?.map((member) => (
        <div>{member?.name}</div>
      ))}
      <Button onClick={add_member} variant="contained" color="primary">
        Add
      </Button>
    </>
  );
}

export default Add;
