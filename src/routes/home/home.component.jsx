import Directory from '../../../directory.card/directory.card';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../../componentes/NavigationBar';
function Home() {

  return (
    <div>
      <NavigationBar />
      <Directory/>
    </div>
  );
}

export default Home;
