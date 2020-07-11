import React, { useContext } from 'react';
import {Pie} from 'react-chartjs-2';
import { Globaldata } from './Globaldata';



function PieChart(){
	const {maindata,countryname
	} = useContext(Globaldata);
const data = {
	
	labels: [
		'Deaths',
		'Recovered',
		'Infected'
	],
	datasets: [{
		data: [maindata['total_deaths'], maindata['total_recovered'],maindata['total_cases']],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};
    return (
      <div style={{textAlign:'center'}}>
		  <h2>{countryname}</h2>
        <Pie data={data} height={80} style={'margin-top:50'} />
      </div>
    );
  }
export default PieChart;