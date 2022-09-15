import './sidebar.scss';
import { NavLink } from 'react-router-dom';
export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <p className='logo'>Netclan</p>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <li>
            <NavLink to={'/'}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink>Dashbaord</NavLink>
          </li>
          <li>
            <NavLink>Dashbaord</NavLink>
          </li>
          <li>
            <NavLink>Dashbaord</NavLink>
          </li>
          <li>
            <NavLink>Dashbaord</NavLink>
          </li>
        </ul>
      </div>
      <div className='bottom'>Color Optios</div>
    </div>
  );
};
