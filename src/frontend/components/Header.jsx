import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png'
import userIcon from '../assets/static/user-icon.png';
import gravatar from '../assets/utils/gravatar';
import { logoutRequest } from '../actions';
const Header = (props) => {
  const { user } = props;

  const hasUser = Object.keys(user).length > 0; //Comprobar cuantos elementos tiene este objeto

  const handleLogout = () => { //eliminar cookies
    document.cookie = 'email=';
    document.cookie = 'name=';
    document.cookie = 'id=';
    document.cookie = 'token=';
    props.logoutRequest({});
    window.location.href = '/login';
  }


  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ? (
            <img src={gravatar(user.email)} alt="Icono de user" />
          ) : (
            <img src={userIcon} alt="Icono de user" />
          )}

          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ? (
            <li>
              <a href="/">{user.name}</a>
            </li>
          ) : null}

          {hasUser ? (
            <li>
              <a href="#" onClick={handleLogout}>
                Cerrar Sesión
              </a>
            </li>
          ) : (
            <li>
              <Link to="/login">Iniciar Sesión</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};
//Recuperacion de datos
const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  logoutRequest
};


//export default Header;
export default connect(mapStateToProps, mapDispatchToProps)(Header);