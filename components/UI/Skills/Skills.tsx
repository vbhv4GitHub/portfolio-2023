'use client';

import Image from 'next/image';
import { useState } from 'react';

const skills = [
  {
    name: 'HTML',
    logo: '/assets/logos/html.png',
    percentage: 92,
  },
  {
    name: 'CSS',
    logo: '/assets/logos/css.png',
    percentage: 86,
  },
  {
    name: 'Javascript',
    logo: '/assets/logos/javascript.png',
    percentage: 82,
  },
  {
    name: 'HapiJS',
    logo: '/assets/logos/hapi-js.png',
    percentage: 81,
  },
  {
    name: 'React',
    logo: '/assets/logos/react.png',
    percentage: 80,
  },
  {
    name: 'Typescript',
    logo: '/assets/logos/typescript.png',
    percentage: 78,
  },
  {
    name: 'NextJS',
    logo: '/assets/logos/next-js.png',
    percentage: 76,
  },
  {
    name: 'NodeJS',
    logo: '/assets/logos/node-js.png',
    percentage: 70,
  },
  {
    name: 'Material UI',
    logo: '/assets/logos/material-ui.png',
    percentage: 72,
  },
  {
    name: 'Tailwind',
    logo: '/assets/logos/tailwind.png',
    percentage: 65,
  },
  {
    name: 'Docker',
    logo: '/assets/logos/docker.png',
    percentage: 61,
  },
  {
    name: 'Postgres',
    logo: '/assets/logos/postgres.png',
    percentage: 55,
  },
].sort((a, b) => b.percentage - a.percentage);

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <div className="grid max-w-4xl grid-cols-2 gap-8 mx-auto sm:grid-cols-3 md:grid-cols-4">
      {skills.map(({ name, logo, percentage }) => {
        const color =
          percentage > 85
            ? 'bg-green-500'
            : percentage > 75
            ? 'bg-blue-500'
            : percentage > 60
            ? 'bg-yellow-500'
            : 'bg-red-500';

        const isHovered = hoveredSkill === name;

        return (
          <div
            key={logo}
            className="flex flex-col items-center p-4 transition-transform duration-300 bg-gray-800 rounded-lg shadow-lg hover:scale-105"
            onMouseEnter={() => setHoveredSkill(name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="relative">
              <Image
                alt={name}
                src={logo}
                height={65}
                width={65}
                className={`transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}
              />
              {isHovered && (
                <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-2xl font-bold text-white">
                  <span className="px-2 py-1 rounded bg-black/50">{percentage}%</span>
                </div>
              )}
            </div>
            <p className="mt-4 mb-2 text-sm font-medium">{name}</p>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div
                className={`h-2.5 rounded-full ${color} transition-all duration-500 ease-out`}
                style={{
                  width: isHovered ? `${percentage}%` : '0%',
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
