import React, { useContext } from 'react';
import {Bar} from 'react-chartjs-2';
import { Globaldata } from './Globaldata';




function BarChart(){
  const {maindata,countryname} = useContext(Globaldata);
  
  const data = {
    
    labels: Object.keys(maindata),
    
    datasets: [
      {
        label: 'COVID-19',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.8)',
        hoverBorderColor: 'rgba(255,99,132,0.4)',
        data: Object.values(maindata)
      }
    ]
  };
    return (
      <div style={{textAlign:'center'}}>
        <h2 style={{textalign:'center'}}>{countryname}</h2>
      
        <Bar
          data={data}
          width={60}
          height={100}

          options={{
            maintainAspectRatio: false
          }}
        />
       
      </div>
    );
  }

export default BarChart;
