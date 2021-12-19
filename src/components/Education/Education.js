import SectionHeader from '../SectionHeader/SectionHeader';
import ListItemName from '../ListItemName/ListItemName';
import SchoolIcon from '../../images/school.svg';
import './Education.css';

const Education = () => {
  const education = [
    {
      schoolName: 'DA-IICT, Gandhinagar, Gujarat',
      startTime: '2015',
      endTime: '2019 | CPI: 7.51/10',
      degreeTitle: 'B.Tech (ICT)'
    }
  ];
  return (
    <div className='educationDiv'>
      <SectionHeader image={SchoolIcon} title={'Education'} />
      {
        education.map((item, index) => (
          <div className='educationItemDiv' key={index}>
            <ListItemName title={item.schoolName} />
            <span className='educationTitleText'>{item.degreeTitle}</span>
            <span className='educationTimeText'>{item.startTime} - {item.endTime}</span>
          </div>
        ))
      }
    </div>
  );
};

export default Education;