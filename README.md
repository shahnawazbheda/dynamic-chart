// import React, { useEffect, useRef } from 'react';
// import { MDBContainer } from 'mdbreact';
// import { Pie } from 'react-chartjs-2';
// import { Chart } from 'chart.js/auto';

// export default function Result() {
//     const chartRef = useRef(null);

//     useEffect(() => {
//         const chart = new Chart(chartRef.current);
//         return () => {
//             chart.destroy();
//         };
//     }, []);

//     const options = {
//         plugins: {
//             legend: {
//                 labels: {
//                     font: {
//                         size:20
//                     }
//                 }
//             }
//         }
//     }

//     const data = {
//         labels: ['Incorrect', 'Currect', 'unattaped'],
//         datasets: [
//             {
//                 data: [3, 15, 2],
//                 backgroundColor: ['red', 'green', '#FF9A16'],
//             },
//         ],
        
//     };

//     return (
//         <>
        

//             <div className="p-5 bg-gray-100" style={{position:'absolute',  top:'0 !important', zIndex:'1000', width:'100%'}}>
//                 <div className="grid grid-cols-3 gap-4">
//                     <div className="...">
//                         <h2 className='text-xl text-center'>Name: Shahnawaz Bheda</h2>
//                     </div>
//                     <div className="...">
//                         <h2 className='text-xl text-center'>Exam: Msc.IT</h2>
//                     </div>
//                     <div className="...">
//                         <h2 className='text-xl text-center'>Result: 15/20</h2>
//                     </div>
//                 </div> 
//                 </div>
// {/* 
//                 <div className="p-5 bg-gray-100">
//                 <h2 className='text-xl'>Name: Shahnawaz Bheda</h2>
//                 <h2 className='text-xl'>Result: 15/20</h2>
//                 <h2 className='text-xl'>Result: 15/20</h2>
//                 </div> */}

            
//             <div className="card mx-5  flex justify-center items-center h-screen" style={{top:'0 !important'}}>
//                 <div className="card-body " style={{ width: '25%' }}>
//                     <MDBContainer>
//                         <Pie data={data} options={options} />
//                     </MDBContainer>
//                 </div>
//             </div>



//         </>
//     );
// }

