import Header from './components/Header/Header';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import './App.css';

function App() {
  return (
    <div className='root'>
      <Header />
      <div className='rootContentDiv'>
        <div className='nameDiv'>
          <span className='amanText'>AMAN</span>
          <span className='vanganiText'>VANGANI</span>
        </div>
        <span className='softwareDeveloperText'>SOFTWARE DEVELOPER</span>
        <WorkExperience />
        <Education />
        <Projects />
      </div>
    </div>
  );
}

export default App;
