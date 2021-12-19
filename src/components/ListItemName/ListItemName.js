import LinkIcon from '../../images/link.svg';
import './ListItemName.css';

const ListItemName = props => {

  const onLinkClick = () => window.open(props.link);

  return (
    <div className='listItemNameWrapper'>
      <div className='listItemNameDiv'>
        <span className='listItemNameTitle'>{props.title}</span>
        {props.link ? <img src={LinkIcon} alt='link' className='listItemNameLinkImage' onClick={onLinkClick} /> : null}
      </div>
      <div className='emptySpaceDiv' />
    </div>
  );
};

export default ListItemName;