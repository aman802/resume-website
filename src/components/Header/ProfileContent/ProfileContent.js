import PersonImage from '../../../images/person.svg';
import EmailImage from '../../../images/email.svg';
import LocationImage from '../../../images/location.svg';
import LinkedinImage from '../../../images/linkedin.png';
import PhoneImage from '../../../images/phone.svg';
import './ProfileContent.css';

const ProfileContent = () => {
  const gridItems = [
    {
      image: EmailImage,
      text: 'aman.vangani802@gmail.com',
      alt: 'Email',
    },
    {
      image: LocationImage,
      text: 'A-188, Saraswati Nagar, Basni, Jodhpur, Rajasthan',
      alt: 'Address',
    },
    {
      image: LinkedinImage,
      text: <a href='https://www.linkedin.com/in/amanvangani' style={{ cursor: 'pointer' }}>linkedin.com/in/amanvangani</a>,
      alt: 'Linkedin',
    },
    {
      image: PhoneImage,
      text: '+91-9252268185',
      alt: 'Phone',
    },
  ];

  return (
    <div className="profileContentDiv">
      <div className='contentHeader'>
        <img src={PersonImage} alt='profile' width={30} height={30} />
        <span className='profileHeadingText'>PROFILE</span>
      </div>
      <span className='profileText'>
        Hello, my name is Aman Vangani, I am front-end
        developer and an app developer . Motivated with 2.5
        years experiences in app development. Dedicated
        and hardworking with internal drive to deliver.
      </span>
      <div className='dataGrid'>
        {
          gridItems.map((item, index) => (
            <div className='gridItem' key={index}>
              <img className='itemImage' src={item.image} alt={item.alt} />
              <span className='itemText'>{item.text}</span>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default ProfileContent;