import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const Skills = dynamic(() => import('components/UI/Skills/Skills'));
const BriefIntroduction = dynamic(() => import('components/UI/BriefIntroduction/BriefIntroduction'));
const EducationAndExperience = dynamic(() => import('components/UI/EducationAndExperience/EducationAndExperience'));

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <div className="mx-4 my-8 text-white">
      <BriefIntroduction />
      <section>
        <h2 className="my-16 text-2xl font-bold">Skills</h2>
        <Skills />
      </section>
      <section>
        <h2 className="my-16 text-2xl font-bold">Education &amp; Experience</h2>
        <EducationAndExperience />
      </section>
    </div>
  );
}
