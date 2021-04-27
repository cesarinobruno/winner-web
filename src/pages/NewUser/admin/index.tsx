import React, { Fragment } from "react";
import logo from "../../../assets/logo.png";
import ButtonForm from "../../../components/ButtonForm";
import InputForm from "../../../components/InputForm";
import "./style.css";

const NewAdmin: React.FC = () => {
  return (
    <Fragment>
      <div className="container">
        <h3 className="text-center mt-5">Cadastro administrador</h3>
        <img src={logo} alt="logotipo winner" className="logo-img"/>
        <form>
          <div className="form-group w-75">
            <InputForm
              typeInput="text"
              className="form-control"
              required={false}
              description="Digite seu nome"
              isLabel
              label="Nome"
            />
          </div>
          <div className="form-group w-75">
            <InputForm
              typeInput="text"
              className="form-control"
              required={false}
              description="Digite seu sobrenome"
              isLabel
              label="Sobrenome"
            />
          </div>
          <div className="form-group w-75">
            <InputForm
              typeInput="text"
              className="form-control"
              required={false}
              description="Digite seu cpf"
              isLabel
              label="CPF"
            />
          </div>
          <div className="form-group w-75">
            <InputForm
              typeInput="password"
              className="form-control"
              required={false}
              description="Digite sua senha"
              isLabel
              label="Senha"
            />
          </div>
          <div className="form-group w-75">
            <ButtonForm
              type="button"
              className="btn btn-primary w-100 mt-2"
              nome="Enviar"
              buttonWidth={610}
            />
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default NewAdmin;
