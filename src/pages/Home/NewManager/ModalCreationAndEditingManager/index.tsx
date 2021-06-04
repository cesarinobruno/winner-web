import React, { useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import "./style.css";
interface ButtonProps {
    isActive: boolean;
    onPressButton: Function;
}

const ModalCreationAndEditingManager: React.FC<ButtonProps> = (props: ButtonProps) => {
    const { isActive, onPressButton } = props;


    return (
        <Modal size={'lg'} show={isActive}>
            <Modal.Header>
                <Modal.Title>Registrar Administrador</Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="form-group">
                                <label htmlFor=""><i>Edit</i></label>
                                <input id="txtNome" type="text" className="form-control" placeholder="digite o nome..." />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="form-group">
                                <label htmlFor="">Sobrenome</label>
                                <input id="txtSobrenome" type="text" className="form-control" placeholder="digite o sobrenome..." />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div className="form-group">
                                <label htmlFor="">Matrícula</label>
                                <input id="txtMatricula" type="text" className="form-control" placeholder="digite sua matrícula..." />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => onPressButton(false)}>Fechar </Button>
                <Button variant="primary" onClick={() => null}>Salvar</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalCreationAndEditingManager;



