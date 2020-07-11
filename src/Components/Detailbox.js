import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Card, Typography, CardContent,AppBar,Toolbar} from '@material-ui/core'
import {Globaldata} from './Globaldata';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000,
        margin: '0 auto'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
    heightt:{
        height:10,
        backgroundColor:'yellow'
    },
    heightt2:{
        height:10,
        backgroundColor:'blue'
    },
    heightt3:{
        height:10,
        backgroundColor:'red'
    }
}));

export default function FullWidthGrid() {
    const classes = useStyles();
    let {maindata} = useContext(Globaldata);
    const date = Date();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <h1 style={{color:'black'}}>COVID 19 TRACKER APP</h1>
                        <h3>@created by Syed Sabtain</h3>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Infected
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {maindata.total_cases}
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                {date}
                            </Typography>
                            <Typography variant="body2" component="p">
                                Number of active cases of COVID-19
                            </Typography>
                        </CardContent>
                        <AppBar position="static" className={classes.heightt}>
    
      </AppBar>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Recoverd
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {maindata.total_recovered}
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                {date}
                            </Typography>
                            <Typography variant="body2" component="p">
                                Number of recovered cases of COVID-19
                            </Typography>
                        </CardContent>
                        <AppBar  position="static" className={classes.heightt2}>
    
    </AppBar>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Deaths
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {maindata.total_deaths}
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                {date}
                            </Typography>
                            <Typography variant="body2" component="p">
                                Number of Death cases of COVID-19
                            </Typography>
                        </CardContent>
                        <AppBar position="static" className={classes.heightt3} > 
    
    </AppBar>
                    </Card>
                </Grid>

            </Grid>
        </div>
    );
}
