 import React, { useEffect, useRef } from 'react';
 import { MDBContainer } from 'mdbreact';
 import { Pie } from 'react-chartjs-2';
 import { Chart } from 'chart.js/auto';

 export default function Result() {
     const chartRef = useRef(null);

     useEffect(() => {
         const chart = new Chart(chartRef.current);
         return () => {
             chart.destroy();
         };
     }, []);

     const options = {
         plugins: {
             legend: {
                 labels: {
                     font: {
                         size:20
                     }
                 }
             }
         }
     }

     const data = {
        labels: ['Incorrect', 'Currect', 'unattaped'],
         datasets: [
             {
                 data: [3, 15, 2],
                 backgroundColor: ['red', 'green', '#FF9A16'],
             },
         ],
        
     };

     return (
         <>
        

             <div className="p-5 bg-gray-100" style={{position:'absolute',  top:'0 !important', zIndex:'1000', width:'100%'}}>
                 <div className="grid grid-cols-3 gap-4">
                     <div className="...">
                         <h2 className='text-xl text-center'>Name: Shahnawaz Bheda</h2>
                     </div>
                     <div className="...">
                         <h2 className='text-xl text-center'>Exam: Msc.IT</h2>
                     </div>
                     <div className="...">
                         <h2 className='text-xl text-center'>Result: 15/20</h2>
                     </div>
                 </div> 
                 </div>
 {/* 
                 <div className="p-5 bg-gray-100">
                 <h2 className='text-xl'>Name: Shahnawaz Bheda</h2>
                 <h2 className='text-xl'>Result: 15/20</h2>
                 <h2 className='text-xl'>Result: 15/20</h2>
                 </div> */}

            
             <div className="card mx-5  flex justify-center items-center h-screen" style={{top:'0 !important'}}>
                 <div className="card-body " style={{ width: '25%' }}>
                     <MDBContainer>
                         <Pie data={data} options={options} />
                     </MDBContainer>
                 </div>
             </div>



         </>
     );
 }





12-10-23
=====================================================================================

// import React, { useEffect, useRef, useState } from 'react';
// import { MDBContainer } from 'mdbreact';
// import { Pie } from 'react-chartjs-2';
// import { Chart, ArcElement } from 'chart.js';

// export default function DynamicChart() {
//     Chart.register(ArcElement);
//     const chartRef = useRef(null);
//     const [chartData, setChartData] = useState(null);

//     // Sample data (replace with your actual data)
//     const largeData = {
//         labels: ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'],
//         datasets: [
//             {
//                 data: [30, 20, 10, 15, 25],
//                 backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#5bc0de', '#d9534f'],
//             },
//         ],
//     };

//     useEffect(() => {
//         // Simulate fetching data from an API (Replace with actual API call)
//         setTimeout(() => {
//             setChartData(largeData);
//         }, 2000);
//     }, []);

//     const options = {
//         plugins: {
//             legend: {
//                 labels: {
//                     font: {
//                         size: 20,
//                     },
//                 },
//             },
//         },
//     };

//     return (
//         <div>
//             <div className="p-5 bg-gray-100">
//                 <div className="grid grid-cols-3 gap-4">
//                     <div className="...">
//                         <h2 className="text-xl text-center">Name: Shahnawaz Bheda</h2>
//                     </div>
//                     <div className="...">
//                         <h2 className="text-xl text-center">Exam: Msc.IT</h2>
//                     </div>
//                     <div className="...">
//                         <h2 className="text-xl text-center">Result: 15/20</h2>
//                     </div>
//                 </div>
//             </div>

//             <div className="card mx-5 flex justify-center items-center h-screen">
//                 <div className="card-body" style={{ width: '25%' }}>
//                     <MDBContainer>
//                         {chartData ? (
//                             <Pie data={chartData} options={options} />
//                         ) : (
//                             <p>Loading chart data...</p>
//                         )}
//                     </MDBContainer>
//                 </div>
//             </div>
//         </div>
//     );
// }


// import React, { useEffect, useRef, useState } from 'react';
// import { MDBContainer } from 'mdbreact';
// import { Line } from 'react-chartjs-2';
// import {registerables, Chart} from 'chart.js';




// export default function DynamicChart() {
//     Chart.register(...registerables);
//     const chartRef = useRef(null);
//     const [chartData, setChartData] = useState(null);

//     // Sample data (replace with your actual data)
//     const sampleData = {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [
//             {
//                 label: 'My Line Chart',
//                 data: [65, 59, 80, 81, 56, 55, 40],
//                 borderColor: 'rgba(75, 192, 192, 1)',
//                 borderWidth: 2,
//             },
//         ],
//     };
    
//     useEffect(() => {
//         // Simulate fetching data from an API (Replace with actual API call)
//         setTimeout(() => {
//             setChartData(sampleData);
//         }, 2000);
//     }, []);

//     const options = {
//         scales: {
//             y: {
//                 beginAtZero: true,
//             },
//         },
//     };

//     return (
//         <div>
//             <div className="p-5 bg-gray-100">
//                 <div className="grid grid-cols-3 gap-4">
//                     <div className="...">
//                         <h2 className="text-xl text-center">Name: Shahnawaz Bheda</h2>
//                     </div>
//                     <div className="...">
//                         <h2 className="text-xl text-center">Exam: Msc.IT</h2>
//                     </div>
//                     <div className="...">
//                         <h2 className="text-xl text-center">Result: 15/20</h2>
//                     </div>
//                 </div>
//             </div>

//             <div className="card mx-5 flex justify-center items-center h-screen">
//                 <div className="card-body" style={{ width: '25%' }}>
//                     <MDBContainer>
//                         {chartData ? (
//                             <Line data={chartData} options={options} />
//                         ) : (
//                             <p>Loading chart data...</p>
//                         )}
//                     </MDBContainer>
//                 </div>
//             </div>
//         </div>
//     );
// }


// import React, { useEffect, useRef, useState } from 'react';
// import { MDBContainer } from 'mdbreact';
// import { Line, Bar } from 'react-chartjs-2';
// import { Chart, registerables } from 'chart.js';

// export default function DynamicChart() {
//     Chart.register(...registerables);
//     const chartRef = useRef(null);
//     const [chartData, setChartData] = useState(null);
//     const [chartType, setChartType] = useState('line'); // Default to line chart

//     const sampleData = [chartData, setChartData] = useState({
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [
//             {
//                 label: 'My Chart',
//                 data: [65, 59, 80, 81, 56, 55, 40],
//                 backgroundColor: 'rgba(75, 192, 192, 0.2)',
//                 borderColor: 'rgba(75, 192, 192, 1)',
//                 borderWidth: 2,
//             },
//         ],
//       })

//     const handleChartTypeChange = (event) => {
//         setChartType(event.target.value);
//     };

//     useEffect(() => {
//         // Simulate fetching data from an API (Replace with actual API call)
//         setTimeout(() => {
//             setChartData(sampleData);
//         }, 2000);
//     }, []);

//     const options = {
//         scales: {
//             y: {
//                 beginAtZero: true,
//             },
//         },
//     };

//     return (
//         <div>
//             <div className="p-5 bg-gray-100">
//                 <div className="grid grid-cols-3 gap-4">
//                     <div className="...">
//                         <h2 className="text-xl text-center">Name: Shahnawaz Bheda</h2>
//                     </div>
//                     <div className="...">
//                         <h2 className="text-xl text-center">Exam: Msc.IT</h2>
//                     </div>
//                     <div className="...">
//                         <h2 className="text-xl text-center">Result: 15/20</h2>
//                     </div>
//                 </div>
//             </div>

//             <div className="card mx-5 flex justify-center items-center h-screen">
//                 <div className="card-body" style={{ width: '25%' }}>
//                     <div className="mb-4">
//                         <label className="block text-sm font-medium text-gray-700">Select Chart Type:</label>
//                         <select
//                             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                             value={chartType}
//                             onChange={handleChartTypeChange}
//                         >
//                             <option value="line">Line Chart</option>
//                             <option value="bar">Bar Chart</option>
//                         </select>
//                     </div>
//                     <MDBContainer>
//                         {chartType === 'line' ? (
//                             <Line data={chartData} options={options} />
//                         ) : chartType === 'bar' ? (
//                             <Bar data={chartData} options={options} />
//                         ) : (
//                             <p>Select a chart type</p>
//                         )}
//                     </MDBContainer>
//                 </div>
//             </div>
//         </div>
//     );
// }
