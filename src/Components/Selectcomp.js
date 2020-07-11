import React,{useContext, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid,InputLabel,FormControl} from '@material-ui/core'

  import {Testdata} from './Testcontext'

  const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000,
        textAlign: 'center',
        margin: '0 auto'
        
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),}
   
}));


export default function CustomizedSelects() {
  const classes = useStyles();
  const{tdata,updateValue} = useContext(Testdata)
  
  
    const handleChange = (event) => {
        
        updateValue(
          event.target.value
        )
        
    };
   
      let ary = [] 
      ary= Object.keys(tdata)
    
   
    return (
        <div className={classes.root}>
           <Grid container spacing={3}>
                <Grid item xs={12}>
                   
                   <select onChange={handleChange}>
                     <option value="0">Global</option>
                       {Object.values(tdata).map((val,i)=><option  key={i} value={ary[i]}>{val.title}
                       </option>)}
                      
                   </select>
                   
      

                 </Grid>
            </Grid>
         
        </div>
    );
}
