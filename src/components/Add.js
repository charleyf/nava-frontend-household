import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

function Add({ add_member }) {
  const history = useHistory();
  return (
    <>
      <Button
        onClick={(input) => {
          add_member(input);
          history.push("/");
        }}
        variant="contained"
        color="primary"
      >
        Add
      </Button>
    </>
  );
}

export default Add;
