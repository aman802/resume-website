import ProfileImage from './ProfileImage/ProfileImage';
import ProfileContent from './ProfileContent/ProfileContent';
import './Header.css';

const Header = () => (
  <div className='headerDiv'>
    <ProfileImage />
    <ProfileContent />
  </div>
);

export default Header;