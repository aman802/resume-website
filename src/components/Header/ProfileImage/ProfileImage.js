import amanImage from '../../../images/aman.jpg';
import './ProfileImage.css';

const ProfileImage = () => (
  <div className='imageDiv'>
    <img src={amanImage} className='amanImage' alt='Aman Vangani' />
  </div>
);

export default ProfileImage;