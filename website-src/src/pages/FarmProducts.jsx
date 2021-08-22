import Grid from '@material-ui/core/Grid';

const FarmProducts = () => (
      <Grid container spacing={3}>
        <Grid item xs={6}>
            <img
                className="rounded img-fluid"
                src="illustrations/Mascot_-_farm_veggies 2.png"
            />
        </Grid>
        <Grid item xs={6}>
                <h1> One Straw goes Farm Products!</h1>
        </Grid>
    </Grid>
    );

export default FarmProducts;
