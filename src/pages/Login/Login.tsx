import React, {useEffect, useState } from "react";
import ButtonForm from "../../components/ButtonForm";
import InputForm from "../../components/InputForm";
import "../Login/style.css";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Doctor from "../../assets/doctor.png";
import Logo from "../../assets/logo.png";
import ModalProfile from "../../components/ModalProfile";
import api from "../../services/api";

const Login: React.FC = () => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [isLoginReady, setIsLoginReady] = useState<boolean>(false);
  const [isPasswordReady, setIsPasswordReady] = useState<boolean>(false);
  const navigate = useNavigate();

  const controlModalProfile = () => {
    if (!isModal) {
      setIsModal(true);
    } else if (isModal) {
      setIsModal(false);
    }
  };
  
  
  const redirectToHome = () => {
    if(isLoginReady && isPasswordReady){
      console.log("cheguei aqui")
      navigate("/home");
    }
  };
  
/*
  useEffect(() => {
    if(isLoginReady && isPasswordReady){
      console.log('cheguei aqui')
    }
  }, [isLoginReady, isPasswordReady])
*/

  const handleOnChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const login = e.target.value
    console.log(login)

    if(login.length === 0){
        setIsLoginReady(false);
    } 

    for(let i = 0 ; i < login.length ; i++){
        if(login && login[i].trim()){  
            setIsLoginReady(true);
        } 
    }
  };

  const handleOnChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const senha = e.target.value
    let letrasMaiusculas = /[A-Z]/;
    let letrasMinusculas = /[a-z]/; 
    let numeros = /[0-9]/;
    let caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/;

    let auxMaiuscula = 0;
    let auxMinuscula = 0;
    let auxNumero = 0;
    let auxEspecial = 0;

    let i = 0;
    
    while(i < senha.length){
        if(letrasMaiusculas.test(senha[i]))
            auxMaiuscula++;

        else if(letrasMinusculas.test(senha[i]))
            auxMinuscula++;

        else if(numeros.test(senha[i]))
            auxNumero++;

        else if(caracteresEspeciais.test(senha[i]))
            auxEspecial++;
        
        console.log(auxMaiuscula, auxMinuscula, auxNumero, auxEspecial)
         i++;
    }

    if (auxMaiuscula && auxMinuscula && auxNumero && auxEspecial){
        setIsPasswordReady(true)
    }
  };

  const teste = () => {
    api
      .get("httpbin.org/get")
      .then((r) => {
        console.log('resposta', r.data)
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <div className="login-container">
      <img src={Doctor} alt="foto Doutor" className="foto-doutor" />
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
            onChange={(e) => handleOnChangeLogin(e)}
          />
          <InputForm
            typeInput="password"
            className="form-control"
            required={false}
            description="Digite sua senha"
            isLabel
            label="Senha"
            onChange={(e) => handleOnChangePassword(e)}
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
          {isModal && (
            <ModalProfile isModal openControlModal={controlModalProfile} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
