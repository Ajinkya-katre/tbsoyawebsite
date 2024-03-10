import React from 'react'
import teamData from './team.json'
import teambg from '../../../assets/images/hero-section/team-hero.jpeg'

function Team() {
  return (
    <>
    <div className="hero min-h-96" style={{backgroundImage: `url(${teambg})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Team</h1>
    </div>
  </div>
</div>
    {teamData.map((data,index)=>(
    <div className="hero  bg-base-200">
        <div className="hero-content">
            <img src={data.imgsrc} className=" w-ful max-w-sm rounded-lg shadow-2xl" /><div>
            <h1 className="text-5xl font-bold">{data.fullname}</h1>
            <p className="py-6">{data.position}</p>
        </div>
        </div>
    </div>
        ))}
        
</>
  )
}

export default Team