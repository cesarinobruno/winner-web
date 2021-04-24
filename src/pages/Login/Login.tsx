import React from "react";
import ButtonForm from "../../components/ButtonForm";
import InputForm from "../../components/InputForm";
import "./style.css";
import {useNavigate} from 'react-router-dom';

const Login: React.FC = () => {

  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-inputs">
        <h2 className="pt-5" style={{textAlign: 'center'}}>Bem vindo</h2>
        <div className="form">
          <InputForm
            typeInput="text"
            className="form-control"
            required={false}
            description="Digite seu login"
            isLabel
            label="Login"
          />
          <InputForm
            typeInput="password"
            className="form-control"
            required={false}
            description="Digite sua senha"
            isLabel
            label="Senha"
          />
        </div>
        <div className="buttonForm">
          <ButtonForm
            type="button"
            className="btn btn-danger"
            nome="Entrar"
            buttonWidth={480}
            buttonPosition={10}
            onPressButton={() => navigate('/home')}
          />
        </div>
        <div className="mt-2" style={{textAlign:'center'}}>
          <a onClick={() => navigate('/novoUsuario')}>Não tem cadastro? Inscreva-se já!</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
