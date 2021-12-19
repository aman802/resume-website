import './SectionHeader.css';

const SectionHeader = props => (
  <div className='sectionHeaderDiv'>
    <img src={props.image} alt={props.title} className='sectionHeaderImage' />
    <span className='sectionHeaderText'>{props.title}</span>
  </div>
);

export default SectionHeader;