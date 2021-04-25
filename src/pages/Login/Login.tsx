import React from "react";
import ButtonForm from "../../components/ButtonForm";
import InputForm from "../../components/InputForm";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { Button,} from "react-bootstrap";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate('/novoUsuario')
  }

  return (
    <div className="login-container">
      <div className="login-inputs">
        <h2 className="pt-5" style={{ textAlign: "center" }}>
          Bem vindo
        </h2>
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
            onPressButton={redirectToHome}
          />
        </div>
        <div style={{marginTop: 20, display: 'flex', justifyContent: 'flex-end', marginRight: 10}}>
          <Button onClick={() => navigate('/novoUsuario')} size='lg' variant="outline-info">Inscreva-se</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
