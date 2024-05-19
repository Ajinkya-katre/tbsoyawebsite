import React from 'react'
import teamData from './team.json'
import teambg from '../../../assets/images/hero-section/team-hero.jpeg'

// function Team() {
//   return (
//     <>
//     <div className="hero min-h-96" style={{backgroundImage: `url(${teambg})`}}>
//   <div className="hero-overlay bg-opacity-60"></div>
//   <div className="hero-content text-center text-neutral-content">
//     <div className="max-w-md">
//       <h1 className="mb-5 text-5xl font-bold">Team</h1>
//     </div>
//   </div>
// </div>
//     {teamData.map((data,index)=>(
//     <div className="hero  bg-base-200">
//         <div className="hero-content">
//             <img src={data.imgsrc} className=" w-ful max-w-sm rounded-lg shadow-2xl" /><div>
//             <h1 className="text-5xl font-bold">{data.fullname}</h1>
//             <p className="py-6">{data.position}</p>
//         </div>
//         </div>
//     </div>
//         ))}
        
// </>
//   )
// }

export const Team = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
        <p className="inline-block px-3 py-px mb-4 text-4xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          Know Our Team
        </p>
      </div>
      <div className="grid gap-10 mx-auto lg:grid-cols-2 lg:max-w-screen-lg">
        <div className="grid sm:grid-cols-2 h-48">
          <div className="relative w-full sm:h-72 h-44 max-h-full rounded shadow sm:h-auto">
            <img
              className="absolute object-cover w-full h-44 rounded"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt="Person"
            />
          </div>
          <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
            <p className="text-lg font-bold">Prashant Udhav Pawar</p>
            <p className="mb-4 text-xs text-gray-800">Director</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 h-48">
          <div className="relative w-full sm:h-72 h-44 rounded shadow sm:h-auto">
            <img
              className="absolute object-cover w-full h-44 rounded"
              src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
          </div>
          <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
            <p className="text-lg font-bold">Sanjay Trimbak Fund</p>
            <p className="mb-4 text-xs text-gray-800">Director</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 h-48">
          <div className="relative w-full sm:h-72 h-44 rounded shadow sm:h-auto">
            <img
              className="absolute object-cover w-full h-44 rounded"
              src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
          </div>
          <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
            <p className="text-lg font-bold">Om Udhav Pawar</p>
            <p className="mb-4 text-xs text-gray-800">Director</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 h-48">
          <div className="relative w-full sm:h-72 h-44 rounded shadow sm:h-auto">
            <img
              className="absolute object-cover w-full h-44 rounded"
              src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
          </div>
          <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
            <p className="text-lg font-bold">Vaibhav Trimbak Fund</p>
            <p className="mb-4 text-xs text-gray-800">Director</p>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default Team