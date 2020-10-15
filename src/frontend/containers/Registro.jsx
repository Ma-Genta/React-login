import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Registro.scss';
import { registerUser } from '../actions';

const Registro = props => {
    const [form, setForm] = useState({
      email: '',
    });

    //Capturar info de los input
    const handleInput = (event) => {
      setForm({
        ...form,
        [event.target.name]: event.target.value,
      });
    };

    const handleSubmit = () => {
      event.preventDefault(); //Evitar comportamiento natural
      props.registerUser(form, '/login');
      //console.log(form);
      //props.history.push('/'); //Redireccion al login
    };
  return (
    <section className="register">
      <section className="register__container">
        <h2>Regístrate</h2>
        <form className="register__container--form" onSubmit={handleSubmit}>
          <input
            name="name"
            className="input"
            type="text"
            placeholder="Nombre"
            onChange={handleInput}
          />
          <input
            name="email"
            className="input"
            type="text"
            placeholder="Email"
            onChange={handleInput}
          />
          <input
            name="password"
            className="input"
            type="password"
            placeholder="Contraseña"
            onChange={handleInput}
          />
          <button className="button" type="submit">Registrarme</button>
        </form>
        <Link to="/login">Iniciar sesión</Link>
      </section>
    </section>
  );};

  const mapDispatchToProps = {
    registerUser
  };

//export default Registro;
export default connect(null, mapDispatchToProps)(Registro);