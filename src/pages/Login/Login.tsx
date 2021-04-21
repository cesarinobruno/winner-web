import React from "react";
import ButtonForm from "../../components/ButtonForm";
import InputForm from "../../components/InputForm";
import "./style.css";

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <div className="login-inputs">
        <h4>Titulo da tela?</h4>
        <div className="form">
          <InputForm
            typeInput="text"
            className="form-control"
            required={false}
            description="Digite seu login"
            isLabel
            label="Nome"
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
            type="submit"
            className="btn btn-danger"
            nome="Entrar"
            buttonWidth={480}
            buttonPosition={10}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
