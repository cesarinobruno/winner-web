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
      navigate("/home");
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    let login = document.querySelector('.field-login') as HTMLFormElement
    let senha = document.querySelector('.field-password') as HTMLFormElement

    if(login.value.length === 0){
      setIsLoginReady(false);
    } 

    for(let i = 0 ; i < login.value.length ; i++){
        if(login.value && login.value[i].trim()){  
          setIsLoginReady(true);
        } 
    }

    let letrasMaiusculas = /[A-Z]/;
    let letrasMinusculas = /[a-z]/; 
    let numeros = /[0-9]/;
    let caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/;

    let auxMaiuscula = 0;
    let auxMinuscula = 0;
    let auxNumero = 0;
    let auxEspecial = 0;

    let i = 0;
  
    while(i < senha.value.length){
        if(letrasMaiusculas.test(senha.value[i]))
          auxMaiuscula++;
        
        else if(letrasMinusculas.test(senha.value[i]))
          auxMinuscula++;

        else if(numeros.test(senha.value[i]))
          auxNumero++;

        else if(caracteresEspeciais.test(senha.value[i]))
          auxEspecial++;

        i++;
    }

    if (!senha.value){
      setIsPasswordReady(false)
      alert('Escreva uma senha!')

    } else if (auxMaiuscula && auxMinuscula && auxNumero && auxEspecial) {
      setIsPasswordReady(true)

    } else if(!auxMaiuscula || !auxMinuscula) {
      setIsPasswordReady(false)
      alert('Senha deve conter letras maiúsculas e minúsculas!')

    } else if(!auxNumero || !auxEspecial){
      setIsPasswordReady(false)
      alert('Senha deve conter números e caracteres especiais!')
    }
    
    redirectToHome()

  }

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
            className="form-control field-login"
            required={false}
            description="Digite seu login"
            isLabel
            label="Login"
          />
          <InputForm
            typeInput="password"
            className="form-control field-password"
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
            onPressButton={(e) => handleClick(e)}
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
