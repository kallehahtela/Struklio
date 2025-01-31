import Content from './components/Content';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Footer from './Footer';
import './index.css';

function App() {

  return (
    <>
    <div className='overflow-x-hidden overflow-y-auto'>
      <NavBar />
      <Hero text={`Build Full-Stack <br /> Web Apps. <br /> No Code. <br /> No Limits.`}/>
      <Content />
      <Footer />
    </div>
    </>
  );
};

export default App
