import React, { useState } from "react";
import ModalCreationAndEditingManager from "./ModalCreationAndEditingManager";



const NewManager: React.FC = () => {
    const [isModal, setIsModal] = useState<boolean>(false);
    const controlModalProfile = () => {
        if (!isModal) {
          setIsModal(true);
        } else if (isModal) {
          setIsModal(false);
        }
      };
    return (
        <body>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <h3>Cadastrar Administrador</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <button type="button" className="btn btn-primary float-right" data-toggle="modal" data-target="#modalRegistro" onClick={() => setIsModal(true)}>Adicionar Administrador</button>
                    </div>
                </div>
                <div className="row" style={{ marginTop: 20 }}>
                    <div className="col-md-12">
                        <table id="tblDados" className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Sobrenome</th>
                                    <th scope="col">Matrícula</th>
                                    <th scope="col" style={{ width: 50 }}></th>
                                    <th scope="col" style={{ width: 50 }}></th>
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
                    </div>
                </div>
                <ModalCreationAndEditingManager isActive={isModal} onPressButton={controlModalProfile}/>
            </div>
        </body>
    )
}
export default NewManager;