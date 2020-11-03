import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

function Add({ add_member }) {
  const history = useHistory();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [favorite_fruit, setFavoriteFruit] = useState("");

  return (
    <Grid container align="center" justify="center">
      <Grid item xs={4}>
        <Card variant="outlined">
          <CardContent>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <TextField
                  id="name"
                  value={name}
                  label="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="description"
                  value={description}
                  label="Description"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="favorite_fruit"
                  value={favorite_fruit}
                  label="Favorite Fruit"
                  onChange={(e) => setFavoriteFruit(e.target.value)}
                />
              </Grid>
              <Grid item>
                <Button
                  onClick={() => {
                    add_member({ name, description, favorite_fruit });
                    history.push("/");
                  }}
                  variant="contained"
                  color="primary"
                >
                  Add
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Add;
