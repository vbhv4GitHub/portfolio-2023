import Image from 'next/image';

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
    name: 'Typescript',
    logo: '/assets/logos/typescript.png',
    percentage: 78,
  },
  {
    name: 'React',
    logo: '/assets/logos/react.png',
    percentage: 80,
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
    name: 'HapiJS',
    logo: '/assets/logos/hapi-js.png',
    percentage: 81,
  },
  {
    name: 'Postgres',
    logo: '/assets/logos/postgres.png',
    percentage: 55,
  },
  {
    name: 'Tailwind',
    logo: '/assets/logos/tailwind.png',
    percentage: 65,
  },
  {
    name: 'Material UI',
    logo: '/assets/logos/material-ui.png',
    percentage: 72,
  },
];

export default function Skills() {
  return (
    <div className="grid max-w-3xl grid-cols-2 gap-8 mx-auto sm:grid-cols-3 md:grid-cols-4">
      {skills.map(({ name, logo, percentage }) => {
        const color =
          percentage > 85
            ? 'bg-green-500'
            : percentage > 75
            ? 'bg-blue-500'
            : percentage > 60
            ? 'bg-yellow-500'
            : 'bg-red-500';

        return (
          <div key={logo} className="flex flex-col items-center">
            <Image alt={name} src={logo} height={55} width={55} />
            <p className="mt-2 mb-1 text-sm font-medium">{name}</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className={`h-2.5 rounded-full ${color}`} style={{ width: `${percentage}%` }}></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
