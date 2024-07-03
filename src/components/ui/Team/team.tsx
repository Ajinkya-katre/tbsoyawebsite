import React from 'react'
import teamData from './team.json'
import teambg from '../../../assets/images/hero-section/team-hero.jpeg'

export const Team = () => {
  return (
    <div className="px-4 py-8 mx-auto max-w-screen-xl sm:px-6 lg:max-w-screen-2xl lg:px-8">
      <div className="mx-auto mb-6 sm:text-center">
        <p className="inline-block px-3 py-1 mb-2 text-2xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          Know Our Team
        </p>
      </div>
      <div className="grid gap-8 mx-auto lg:grid-cols-2 xl:max-w-screen-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative h-44 sm:h-72 rounded shadow">
            <img
              className="absolute object-cover w-full h-full rounded"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt="Person"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Prashant Udhav Pawar</p>
            <p className="text-sm text-gray-800">Director</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative h-44 sm:h-72 rounded shadow">
            <img
              className="absolute object-cover w-full h-full rounded"
              src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Sanjay Trimbak Fund</p>
            <p className="text-sm text-gray-800">Director</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative h-44 sm:h-72 rounded shadow">
            <img
              className="absolute object-cover w-full h-full rounded"
              src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Om Udhav Pawar</p>
            <p className="text-sm text-gray-800">Director</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative h-44 sm:h-72 rounded shadow">
            <img
              className="absolute object-cover w-full h-full rounded"
              src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Vaibhav Trimbak Fund</p>
            <p className="text-sm text-gray-800">Director</p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Team