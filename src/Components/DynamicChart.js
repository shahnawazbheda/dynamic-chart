// import React, { useEffect, useRef, useState } from 'react';
// import { MDBContainer } from 'mdbreact';
// import { Pie } from 'react-chartjs-2';
// import {Chart, ArcElement} from 'chart.js'

// export default function DynamicChart() {
//     Chart.register(ArcElement);
//     const chartRef = useRef(null);
//     const [chartData, setChartData] = useState(null);
//     const sampleData = {
//         labels: ['Pass', 'Fail'],
//         datasets: [
//             {
//                 data: [75, 25],
//                 backgroundColor: ['#36A2EB', '#FF6384'],
//             },
//         ],
//     };

//     useEffect(() => {
        
//         setTimeout(() => {
//             setChartData(sampleData);
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



import React, { useEffect, useRef, useState } from 'react';
import { MDBContainer } from 'mdbreact';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';

export default function DynamicChart() {
    Chart.register(ArcElement);
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState(null);

    // Sample data (replace with your actual data)
    const largeData = {
        labels: ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'],
        datasets: [
            {
                data: [30, 20, 10, 15, 25],
                backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#5bc0de', '#d9534f'],
            },
        ],
    };

    useEffect(() => {
        // Simulate fetching data from an API (Replace with actual API call)
        setTimeout(() => {
            setChartData(largeData);
        }, 2000);
    }, []);

    const options = {
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 20,
                    },
                },
            },
        },
    };

    return (
        <div>
            <div className="p-5 bg-gray-100">
                <div className="grid grid-cols-3 gap-4">
                    <div className="...">
                        <h2 className="text-xl text-center">Name: Shahnawaz Bheda</h2>
                    </div>
                    <div className="...">
                        <h2 className="text-xl text-center">Exam: Msc.IT</h2>
                    </div>
                    <div className="...">
                        <h2 className="text-xl text-center">Result: 15/20</h2>
                    </div>
                </div>
            </div>

            <div className="card mx-5 flex justify-center items-center h-screen">
                <div className="card-body" style={{ width: '25%' }}>
                    <MDBContainer>
                        {chartData ? (
                            <Pie data={chartData} options={options} />
                        ) : (
                            <p>Loading chart data...</p>
                        )}
                    </MDBContainer>
                </div>
            </div>
        </div>
    );
}
