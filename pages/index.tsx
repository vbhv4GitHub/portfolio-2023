import dynamic from 'next/dynamic';
import type { NextPage } from 'next';
import Title from 'components/SEO/Title';
import Header from 'components/Layout/Header';

const Skills = dynamic(() => import('components/UI/Skills/Skills'));
const BriefIntroduction = dynamic(() => import('components/UI/BriefIntroduction/BriefIntroduction'));
const EducationAndExperience = dynamic(() => import('components/UI/EducationAndExperience/EducationAndExperience'));

const Home: NextPage = () => {
  return (
    <>
      <Title title="Home" />
      <BriefIntroduction />
      <Header mt={21}>Skills</Header>
      <Skills />
      <Header mt={21}>Education &amp; Experience</Header>
      <EducationAndExperience />
    </>
  );
};

export default Home;
