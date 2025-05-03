import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from 'components/Navbar';
import './MainLayout.css';

const MainLayout = () => {
  return (
    <div className="mainlayout-container">
      <Navbar />
      <Outlet />
      <ToastContainer />
    </div>
  );
};
export default MainLayout;
