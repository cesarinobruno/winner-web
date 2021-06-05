import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

type statusEquipment = "bug" | "good";
type situation = "off" | "on";

interface modalProps {
  upaName?: string;
  showModal?: Function;
  listEquipment?: [];
  status?: statusEquipment;
  employer?: situation;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const InformationModalUpa: React.FC<modalProps> = (props: modalProps) => {
    const {upaName} = props;
  return (
    <Modal show={true} scrollable={true}>
      <Modal.Header>
        <Modal.Title>{upaName}</Modal.Title>
      </Modal.Header>
      <div>
            Endereço: <br />
            Bairro:
            <hr />
      </div>
      <Modal.Body>
        <div className="modal-body">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <span
                  style={{
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                >
                  EQUIPAMENTOS COM DEFEITO
                </span>
                {/* uma lista de equipamentos */}
                <p>
                  &nbsp;&nbsp;Eletrocardiograma
                  <br />
                  &nbsp;&nbsp;Ecocardiografia
                  <br />
                  &nbsp;&nbsp;Radiologia
                  <br />
                  &nbsp;&nbsp;Imobilizações
                  <br />
                  &nbsp;&nbsp;Mamografia
                  <br />
                  &nbsp;&nbsp;Ultrassonografia
                </p>
              </div>
              <div className="col-12">
                <span
                  style={{
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                >
                  EQUIPAMENTOS FUNCIONANDO:
                </span>
                <p>
                  &nbsp;&nbsp;Eletrocardiograma
                  <br />
                  &nbsp;&nbsp;Ecocardiografia
                  <br />
                  &nbsp;&nbsp;Radiologia
                  <br />
                  &nbsp;&nbsp;Imobilizações
                  <br />
                  &nbsp;&nbsp;Mamografia
                  <br />
                  &nbsp;&nbsp;Ultrassonografia
                </p>
              </div>
              <div className="col-12">
                <span
                  style={{
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                >
                  PROFISSIONAIS AUSENTES:
                </span>
                <p>
                  &nbsp;&nbsp;Cardiologista
                  <br />
                  &nbsp;&nbsp;Clínica Médica
                  <br />
                  &nbsp;&nbsp;Cirurgia Geral
                  <br />
                  &nbsp;&nbsp;Neurocirurgia
                  <br />
                  &nbsp;&nbsp;Oftalmologia
                  <br />
                  &nbsp;&nbsp;Ortopedia
                </p>
              </div>
              <div className="col-12">
                <span
                  style={{
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                >
                  PROFISSIONAIS PRESENTES:
                </span>
                <p>
                  &nbsp;&nbsp;Cardiologista
                  <br />
                  &nbsp;&nbsp;Clínica Médica
                  <br />
                  &nbsp;&nbsp;Cirurgia Geral
                  <br />
                  &nbsp;&nbsp;Neurocirurgia
                  <br />
                  &nbsp;&nbsp;Oftalmologia
                  <br />
                  &nbsp;&nbsp;Ortopedia
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={() => null}>Fechar</Button>

        <Button onClick={() => null}>Abrir geolocalização</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InformationModalUpa;
