import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ModalProfile: React.FC = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [closeModal, setCloseModal] = useState<boolean>(true);

    useEffect(() => {
        console.log(openModal);
    }, [openModal]);

    return (
      <>
        <Button variant="primary" onClick={() => setOpenModal(true)}>Abrir modal</Button>
        <Modal show={openModal}>
          <Modal.Header>
            <Modal.Title>Como deseja se cadastrar</Modal.Title>
          </Modal.Header>

          <Modal.Body>Por favor, selecione o perfil que deseja se cadastrar!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setOpenModal(false)}>Fechar</Button>
            <Button variant="primary">Usuário</Button>
            <Button variant="primary">Administrador</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default ModalProfile;
