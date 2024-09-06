import React from 'react';
import { HomeIcon, UserGroupIcon, EmojiHappyIcon, CalendarIcon } from '@heroicons/react/solid';

const StatsSection = () => {
  return (
    <section className="bg-blue-500 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
        
        {/* Hospital Rooms */}
        <div>
          <HomeIcon className="h-12 w-12 mx-auto text-white" />
          <div className="text-4xl font-bold">3468</div>
          <div className="mt-2 text-xl">Hospital Rooms</div>
        </div>
        {/* Specialist Doctors */}
        <div>
          <UserGroupIcon className="h-12 w-12 mx-auto text-white" />
          <div className="text-4xl font-bold">557</div>
          <div className="mt-2 text-xl">Specialist Doctors</div>
        </div>

        {/* Happy Patients */}
        <div>
          <EmojiHappyIcon className="h-12 w-12 mx-auto text-white" />
          <div className="text-4xl font-bold">4379</div>
          <div className="mt-2 text-xl">Happy Patients</div>
        </div>

        {/* Years of Experience */}
        <div>
          <CalendarIcon className="h-12 w-12 mx-auto text-white" />
          <div className="text-4xl font-bold">32</div>
          <div className="mt-2 text-xl">Years of Experience</div>
        </div>
        
      </div>
    </section>
  );
};

export default StatsSection;
