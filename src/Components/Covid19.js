import React, { useEffect, useState} from 'react';
import Detailbox from './Detailbox'
import {Globaldata} from './Globaldata'
import PieChart from './PieChart'
import BarChart from './Barchar';
import Selectcomp from './Selectcomp'
import {Testdata} from './Testcontext'





const Covid19 = ()=>
{   

    const[apidata,setData] = useState({});
    const[testdata,setTest] = useState([{}]);
    const[counter,setCounter]= useState(0);
    const[title,setTitle] = useState("Global")
    
    useEffect(()=>{
        async function getdata()
        {
            const data = await fetch("https://api.thevirustracker.com/free-api?global=stats");
            const dat = await data.json();
            const sdata = await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL');
            const sdat = await sdata.json();
            setTest(sdat.countryitems[0])  
            if(counter==0){
            delete dat.results[0].source;
            setData(dat.results[0]);
            
            }
            else if(counter>0)
            {
            delete sdat.countryitems[0][counter].source;
            delete sdat.countryitems[0][counter].code;
            delete sdat.countryitems[0][counter].ourid
            setTitle(sdat.countryitems[0][counter].title);
            delete sdat.countryitems[0][counter].title;
            
            setData(sdat.countryitems[0][counter]);
            }
          
             
                 
            
        }
        getdata()
    },[counter])
    
    
    function counterupdater(val)
    {
        setCounter(val)
    }
    return(
        
        <Globaldata.Provider value={{maindata:apidata,countryname:title}}>
        <div>
        <Detailbox></Detailbox>
        <Testdata.Provider value={{tdata:testdata,updateValue:counterupdater}}>
        <Selectcomp></Selectcomp>
        <PieChart></PieChart>
        <hr/>
        <BarChart></BarChart>
        </Testdata.Provider>
        </div>
        </Globaldata.Provider>
    )
}
export default Covid19;