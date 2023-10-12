
// import React, { useEffect, useState } from 'react';
// import { MDBContainer } from 'mdbreact';
// import { Line, Bar } from 'react-chartjs-2';
// import { Chart, registerables } from 'chart.js';

// Chart.register(...registerables);

// export default function DynamicChart() {
//     const [chartData, setChartData] = useState(null);
//     const [chartType, setChartType] = useState('Bar'); // Default to line chart

//     const sampleData = {
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
//     };

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
//                         {chartData ? (
//                             chartType === 'line' ? (
//                                 <Line data={chartData} options={options} />
//                             ) : chartType === 'bar' ? (
//                                 <Bar data={chartData} options={options} />
//                             ) : null
//                         ) : (
//                             <p>Loading chart data...</p>
//                         )}
//                     </MDBContainer>
//                 </div>
//             </div>
//         </div>
//     );
// }


import React, { useEffect, useState } from 'react';
import { MDBContainer } from 'mdbreact';
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const chartTypes = {
    Bar: Bar,
    Line: Line,
    Pie: Pie,
    Doughnut: Doughnut,
};

export default function DynamicChart(props) {
    const [chartData, setChartData] = useState(null);
    const [chartType, setChartType] = useState('Bar'); 

    const sampleData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My Chart',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
            },
        ],
    };

    useEffect(() => {
        setChartType(props.type);
        setTimeout(() => {
            setChartData(sampleData);
        }, 2000);
    }, [props.type]);

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div>
            <div className="p-5 bg-gray-100">
                <h1 className='text-2xl text-center'>Dynamic Chart</h1>
            </div>

            <div className="card mx-5 flex justify-center items-center mt-32">
                <div className="card-body" style={{ width: '25%' }}>
                    <div className="mb-4">
                        <label className="block text-xl font-medium text-gray-700">Select Chart Type:</label>
                    </div>
                    <MDBContainer>
                        {chartData ? (
                            React.createElement(chartTypes[chartType], { data: chartData, options: options })
                        ) : (
                            <p>Loading chart data...</p>
                        )}
                    </MDBContainer>
                </div>
            </div>
        </div>
    );
}
