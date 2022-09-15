import './home.scss';
import { Sidebar } from '../../Components';

export const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className='home__container'>Container</div>
    </div>
  );
};
