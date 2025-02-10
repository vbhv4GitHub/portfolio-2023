'use client';

import Image from 'next/image';
import HorizontalTags from '../Components/HorizontalTags';

const techStack = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Hapi.js',
  'PostgreSQL',
  'TypeORM',
  'Express',
  'MongoDB',
  'Prisma',
  'Docker',
];

export default function BriefIntroduction() {
  return (
    <div className="relative px-4 py-8 overflow-hidden bg-gray-800/30 rounded-2xl backdrop-blur-sm">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-gradient" />
      </div>

      <div className="relative z-10 grid gap-8 md:grid-cols-[2fr,1fr]">
        <div className="space-y-6">
          <div className="space-y-2 transform transition-all duration-500 hover:scale-[1.01]">
            <h2 className="text-4xl font-bold md:text-5xl">
              Hi, I&apos;m{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Vaibhav
              </span>
            </h2>
            <h3 className="text-xl font-semibold text-blue-400 md:text-2xl">A Fullstack Web Developer</h3>
          </div>

          <p className="text-lg leading-relaxed text-gray-300 transition-all duration-500 transform">
            With nearly three years of hands-on experience in fin-tech, I specialize in building robust and scalable web
            applications. My expertise spans across modern frontend and backend technologies, allowing me to deliver
            comprehensive solutions.
          </p>

          <div className="transition-all duration-500 transform">
            <p className="mb-3 text-sm font-semibold text-gray-400 uppercase">Tech Stack</p>
            <HorizontalTags arr={techStack} className="text-sm" />
          </div>
        </div>

        <div className="relative hidden transition-transform duration-300 hover:scale-105 md:block">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />
          <div className="relative p-6">
            <Image
              src="/logo-84x84.png"
              alt="Profile"
              width={200}
              height={200}
              className="mx-auto rounded-full shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
