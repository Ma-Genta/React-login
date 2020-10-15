import Home from '../containers/Home';
import Login from '../containers/Login';
import Registro from '../containers/Registro';
import NotFound from '../containers/NotFound';
import Player from '../containers/Player';

const serverRoutes = (isLogged) => {
  return [
    {
      exact: true,
      path: '/',
      component: isLogged ? Home : Login,
    },
    {
      exact: true,
      path: '/login',
      component: Login,
    },
    {
      exact: true,
      path: '/registro',
      component: Registro,
    },
    {
      exact: true,
      path: '/player/:id',
      component: isLogged ? Player : Login,
    },
    {
      name: 'NotFound',
      component: NotFound,
    },
  ];
}

export default serverRoutes;