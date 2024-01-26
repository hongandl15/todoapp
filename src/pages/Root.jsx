import { Outlet} from 'react-router-dom';
import './Root.css'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
function RootLayout() {

  return (
    <>
      <Header/>
      <div className='container'>
        <Sidebar/>
          <Outlet />
      </div>
      <Footer/>
    </>
  );
}

export default RootLayout;