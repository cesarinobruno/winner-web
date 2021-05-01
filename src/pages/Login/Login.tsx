import React, { useState } from "react";
import ButtonForm from "../../components/ButtonForm";
import InputForm from "../../components/InputForm";
import "../Login/style.css";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Doctor from "../../assets/doctor.jpg";
import Logo from "../../assets/logo.png";
import ModalProfile from "../../components/ModalProfile";


const Login: React.FC = () => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/home");
  };

  const controlModalProfile = () => {
    if(!isModal){
      setIsModal(true);
    }
    else if(isModal){
      setIsModal(false);
    }
  };

  return (
    <div className="login-container">
      <img src={Doctor} alt="foto Doutor" className="foto-doutor"/>
      <div className="login-inputs">
        <h2 className="pt-5" style={{ textAlign: "center" }}>
          Bem vindo
        </h2>
        <img src={Logo} alt="logo Winner" className="logo-img" />
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
            buttonWidth={440}
            buttonPosition={10}
            onPressButton={redirectToHome}
          />
        </div>
        <div className="containerButton">
          <Button
            onClick={controlModalProfile}
            size="lg"
            variant="outline-info"
            className="increva-se"
          >
            Inscreva-se
          </Button>
          {isModal && <ModalProfile isModal openControlModal={controlModalProfile} />}
        </div>
      </div>
    </div>
  );
};

export default Login;
