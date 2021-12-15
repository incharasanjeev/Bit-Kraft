import {
  Button,
  Grid,
  Card,
  cardContent,
  
  CardActions,
  Typography,
  TextField,
} from "@material-ui/core";
import React from "react";

const MyCard = () => {
  const getMatchCart = () => {
    return (
      <card style={{ maxWidth: 450, margin: "0 auto", Padding: "200Px 100Px" }}>
        <cardContent>
          <Typography></Typography>
          <form>
            <Grid container spacing={1}>
              <Grid item>
                <img
                  src="https://cricketaddictor.gumlet.io/wp-content/uploads/2021/04/india.jpg?compress=true&quality=80&w=480&dpr=2.6"
                  alt="image"
                  width={1500}
                />
              </Grid>

              <Grid xs={12} sm={5} item>
                <TextField
                  label="country name"
                  placeholder="enter country "
                  variant="outlined"
                  fullWidth
                />
              </Grid>

              <Grid xs={12} sm={5} item>
                <TextField
                  label="Team"
                  placeholder="enter Team Name "
                  variant="outlined"
                  fullWidth
                />
              </Grid>

              <Grid xs={12} sm={5} item>
                <TextField
                  label="Player "
                  placeholder="enter Player name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>

              <Grid xs={12} sm={5} item>
                <TextField
                  label="Venue"
                  placeholder="enter Venue name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>

              <Grid xs={12} sm={5} item>
                <TextField label="Match" variant="outlined" fullWidth />
              </Grid>

              <Grid xs={12} sm={5} item>
                <TextField label="scores" variant="outlined" fullWidth />
              </Grid>

              <Grid xs={12} sm={5} item>
                <Button
                  tye="submit"
                  variant="contained"
                  color="Primary"
                  fullWidth
                >
                  Sumbit
                </Button>
              </Grid>
            </Grid>
          </form>
        </cardContent>

        <CardActions>
          <Button color="secondary" variant="contained">
            {" "}
            Result{" "}
          </Button>
        </CardActions>
      </card>
    );
  };
  return getMatchCart();
};

export default MyCard;
