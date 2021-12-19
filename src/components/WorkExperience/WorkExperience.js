import SectionHeader from '../SectionHeader/SectionHeader';
import ListItemName from '../ListItemName/ListItemName';
import SettingsIcon from '../../images/settings.svg';
import './WorkExperience.css';

const WorkExperience = () => {
  const experience = [
    {
      companyName: 'Lido Learning',
      startTime: 'Apr 2020',
      endTime: 'Present',
      jobTitle: 'Frontend Developer',
      points: [
        'Worked on multiple consumer-facing and internal projects on React and React Native',
        'Ownership of Portfolio project, which lets a user create their own website which can be shared'
      ]
    },
    {
      companyName: 'Truebil.com',
      startTime: 'Apr 2019',
      endTime: 'Apr 2020',
      jobTitle: 'Android Developer',
      points: [
        'Contributed to 2 Android apps, bug fixes and feature development.',
        'Developed an Android app from scratch that was responsible for inventory management.',
        'Implemented features like real-time bidding from notification, HDFC Car Loan integration, Truebil’s Price Engine etc.'
      ]
    },
  ];
  return (
    <div className='workExperienceDiv'>
      <SectionHeader image={SettingsIcon} title={'Work Experience'} />
      {
        experience.map((item, index) => (
          <div className='experienceItemDiv' key={index}>
            <ListItemName title={item.companyName} />
            <span className='experienceTimeText'>{item.startTime} - {item.endTime}</span>
            <span className='experienceJobTitleText'>{item.jobTitle}</span>
            {
              item.points.map((point, index) => (
                <li key={index} className='pointText'>{point}</li>
              ))
            }
          </div>
        ))
      }
    </div>
  );
};

export default WorkExperience;