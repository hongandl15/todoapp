import { Outlet, useNavigation } from 'react-router-dom';
import './Root.css'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
function RootLayout() {
  // const navigation = useNavigation();

  return (
    <>
      <Header/>
      <div className='container'>
        <Sidebar/>
          {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
          <Outlet />
      </div>
    </>
  );
}

export default RootLayout;