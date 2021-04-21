import React, { Fragment } from "react";
import logo from "../../../assets/banner_upa_logo.jpg";
import ButtonForm from "../../../components/ButtonForm";
import InputForm from "../../../components/InputForm";
import "./style.css";

const NewUser: React.FC = () => {
  return (
    <Fragment>
      <h3 className="text-center mt-5">Cadastre-se - usuário - definir título</h3>
      <h3>
        <img src={logo} />
      </h3>
      <form>
        <div className="form-group col-md-2">
          <InputForm
            typeInput="text"
            className="form-control"
            required={false}
            description="Digite seu nome"
            isLabel
            label="Nome"
          />
        </div>
        <div className="form-group col-md-2">
          <InputForm
            typeInput="text"
            className="form-control"
            required={false}
            description="Digite seu sobrenome"
            isLabel
            label="Sobrenome"
          />
        </div>
        <div className="form-group col-md-2">
          <InputForm
            typeInput="text"
            className="form-control"
            required={false}
            description="Digite seu cpf"
            isLabel
            label="CPF"
          />
        </div>
        <div className="form-group col-md-4">
          <InputForm
            typeInput="email"
            className="form-control"
            required={false}
            description="Digite seu email"
            isLabel
            label="Email"
          />
        </div>
        <div className="form-group col-md-4">
          <InputForm
            typeInput="password"
            className="form-control"
            required={false}
            description="Digite sua senha"
            isLabel
            label="Senha"
          />
        </div>
        <div className="form-group col-md-6">
          <ButtonForm
            type="button"
            className="btn btn-primary"
            nome="Enviar"
            buttonWidth={610}
          />
        </div>
      </form>
    </Fragment>
  );
};

export default NewUser;
