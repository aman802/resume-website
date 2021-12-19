import SectionHeader from '../SectionHeader/SectionHeader';
import StarIcon from '../../images/star.svg';
import './Skills.css';

const Skills = () => {
  const skills = ['Android', 'React', 'Redux', 'React Native', 'Java', 'Firebase', 'HTML', 'CSS', 'Javascript', 'Python'];
  return (
    <div className='skillsDiv'>
      <SectionHeader image={StarIcon} title={'Skills'} />
      <div className='skillsGrid'>
        {
          skills.map((skill, index) => (
            <li key={index} className='skillText'>{skill}</li>
          ))
        }
      </div>
    </div>
  );
};

export default Skills;