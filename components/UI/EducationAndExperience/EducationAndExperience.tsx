import React from 'react';

const TimelineItem = ({
  year,
  title,
  subtitle,
  icon,
}: {
  year: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}) => (
  <div className="relative flex mb-12 last:mb-0 group">
    <div className="flex flex-col items-center mr-6">
      <div className="flex-grow w-px h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
      <div className="flex items-center justify-center w-12 h-12 text-white transition-all duration-300 bg-gray-800 border-4 border-blue-500 rounded-full shadow-lg group-hover:scale-110 group-hover:border-blue-400">
        {icon}
      </div>
      <div className="flex-grow w-px h-full bg-gradient-to-b from-blue-500 via-blue-500 to-transparent"></div>
    </div>
    <div className="flex-grow pt-1">
      <div className="transition-all duration-300 transform group-hover:translate-x-2">
        <p className="text-sm font-medium text-blue-400">{year}</p>
        <h3 className="mt-1 text-xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-gray-400">{subtitle}</p>
      </div>
    </div>
  </div>
);

export default function EducationAndExperience() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm">
        <TimelineItem
          year="2011 - 2012"
          title="Higher Secondary School"
          subtitle="Got introduced to C++"
          icon={
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          }
        />
        <TimelineItem
          year="2014 - 2016"
          title="Diploma in Computer Science & Engineering"
          subtitle="Had to do it for the sake of it"
          icon={
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          }
        />
        <TimelineItem
          year="July 2020 - Nov 2020"
          title="Raj Transport"
          subtitle="Part-time data entry operator"
          icon={
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
          }
        />
        <TimelineItem
          year="Dec 2020 - Jan 2021"
          title="Sunground Technologies"
          subtitle="Wordpress developer"
          icon={
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
          }
        />
        <TimelineItem
          year="Jun 2021 - NOW"
          title="Codemancers"
          subtitle="Full stack web developer"
          icon={
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
          }
        />
      </div>
    </div>
  );
}
