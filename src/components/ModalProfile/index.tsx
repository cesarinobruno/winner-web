import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router";
interface propsModal {
  isModal: boolean;
}

const ModalProfile: React.FC<propsModal> = (props: propsModal) => {
  const {isModal} = props;
  const [controlOpenModal, setControlOpenModal] = useState<boolean>(true);
  const navigation = useNavigate();

  return (
    <>
      <Modal show={isModal && controlOpenModal}>
        <Modal.Header>
          <Modal.Title>Como deseja se cadastrar</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Por favor, selecione o perfil que deseja se cadastrar!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setControlOpenModal(false)}>
            Fechar
          </Button>
          <Button variant="primary" onClick={() => navigation('/newUser')}>Usuário</Button>
          <Button variant="primary" onClick={() => navigation('/newUserAdmin')}>Administrador</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalProfile;
