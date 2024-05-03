import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './components/Footer'
import Header from './components/Header'
import './App.css';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <div className='body'>
      <Header />
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;

