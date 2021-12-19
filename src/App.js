import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <div className='root'>
      <Header />
      <div className='nameDiv'>
        <span className='amanText'>AMAN</span>
        <span className='vanganiText'>VANGANI</span>
      </div>
      <span className='softwareDeveloperText'>SOFTWARE DEVELOPER</span>
    </div>
  );
}

export default App;
