import SectionHeader from '../SectionHeader/SectionHeader';
import ListItemName from '../ListItemName/ListItemName';
import EditIcon from '../../images/edit.svg';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      projectName: 'Music Player',
      link: 'https://aman802.github.io/music-player-web',
      description: 'A music player PWA , made only using HTML, CSS and vanilla JS, capable of playing multiple audio files in sequence. Works on both desktop and mobile devices.'
    },
    {
      projectName: 'PokeDB',
      link: 'https://github.com/aman802/Pokedex-Kotlin',
      description: 'Android app to display a list of all Pokémon and their stats in an engaging UI, with custom API implementation.'
    },
    {
      projectName: 'Phone App',
      link: 'https://github.com/aman802/Phone-App',
      description: 'A dialer replacement with easy-to-use UI and theme support.'
    },
  ];
  return (
    <div className='projectDiv'>
      <SectionHeader image={EditIcon} title={'Projects'} />
      {
        projects.map((item, index) => (
          <div className='projectItemDiv' key={index}>
            <ListItemName title={item.projectName} link={item.link} />
            <span className='projectDescriptionText'>{item.description}</span>
          </div>
        ))
      }
    </div>
  );
};

export default Projects;