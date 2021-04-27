import React, { useState } from "react";
import "./style.css";
import { Button, Modal } from "react-bootstrap";
import Logo from "../../assets/logo.png";
import Bitmap from "../../assets/bitmap.png";

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const activeModal = (show: boolean) => {
    if(!showModal && show){
      setShowModal(true);
    }
    else{
      setShowModal(false)
    }
  };

  const OpenGeolocation = () => {
    console.log('abrir Geolocalização');
  }

  //PARA ficar de cola
  // const data = [
  //   {
  //     x: [
  //       "Centro",
  //       "Rocinha",
  //       "Lins",
  //       "Penha",
  //       "Tijuca",
  //       "Madureira",
  //       "Barra da Tijuca",
  //       "Bangu",
  //       "Campo Grande",
  //       "Santa Cruz",
  //     ],
  //     y: [900, 1020, 890, 875, 695, 389, 835, 821, 978, 756],
  //     type: "bar",
  //   },
  // ];
  // Plotly.newPlot('grafico', data);

  return (
    <div className="container-root">
        {/* <div className="page-header"> */}
        <ul className="nav nav-tabs ml-1" role="tablist">
          <li role="presentation" className="active">
            <a
              href="#disponiveis"
              aria-controls="disponiveis"
              role="tab"
              data-toggle="tab"
            >
              <span className="tabsNavigation ml-1">UPAs disponíveis</span>
            </a>
          </li>
          <li role="presentation">
            <a
              href="#graficoatend"
              aria-controls="graficoatend"
              role="tab"
              data-toggle="tab"
            >
              <span className="tabsNavigation">Gráfico Atendimentos</span>
            </a>
          </li>
          <li role="presentation">
            <a
              href="#endereco"
              aria-controls="endereco"
              role="tab"
              data-toggle="tab"
            >
              <span className="tabsNavigation">Endereços UPAs</span>
            </a>
          </li>
          <li role="presentation">
            <a
              href="#avaliacao"
              aria-controls="avaliacao"
              role="tab"
              data-toggle="tab"
            >
              <span className="tabsNavigation">Avaliações UPAs</span>
            </a>
          </li>
        </ul>
        {/* </div> */}
        <div className="tab-content">
          <div role="tabpanel" className="tab-pane active" id="disponiveis">
            <div className="conteiner">
              <div className="item area">
                <img src={Bitmap} className="centro" alt="" />

                <img src={Logo} className="logo" alt=""/>

                <button
                  className="btnCentro"
                  type="submit"
                  data-toggle="modal"
                  onClick={() => activeModal(true)}
                />

                <button
                  className="btnRocinha"
                  type="submit"
                  data-toggle="modal"
                  data-target="#abrirRocinha"
                />

                <button
                  className="btnTijuca"
                  type="submit"
                  data-toggle="modal"
                  data-target="#abrirTijuca"
                />

                <button
                  className="btnLins"
                  type="submit"
                  data-toggle="modal"
                  data-target="#abrirLins"
                />

                <button
                  className="btnPenha"
                  type="submit"
                  data-toggle="modal"
                  data-target="#abrirPenha"
                />

                <button
                  className="btnMadureira"
                  type="submit"
                  data-toggle="modal"
                  data-target="#abrirMadureira"
                />

                <button
                  className="btnBangu"
                  type="submit"
                  data-toggle="modal"
                  data-target="#abrirBangu"
                />

                <button
                  className="btnBarra"
                  type="submit"
                  data-toggle="modal"
                  data-target="#abrirBarra"
                />

                <button
                  className="btnCampoGrande"
                  type="submit"
                  data-toggle="modal"
                  data-target="#abrirCampoGrande"
                />

                <button
                  className="btnSantaCruz"
                  type="submit"
                  data-toggle="modal"
                  data-target="#abrirSantaCruz"
                />
              </div>

              <div className="item" id="texto">
                <h4>
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    MÉDIA MENSAL DE ATENDIMENTOS:
                  </span>
                </h4>
              </div>
              <div className="item" id="texto">
                <h4>
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    Centro:
                  </span>
                </h4>
                <p>
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    1.300
                  </span>
                </p>
              </div>
              <div className="item" id="texto">
                <h4>
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    Rocinha:
                  </span>
                </h4>
                <p>
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    1.150
                  </span>
                </p>
              </div>
              <div className="item" id="texto">
                <h4>
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    Lins:
                  </span>
                </h4>
                <p>
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    950
                  </span>
                </p>
              </div>
              <div className="item" id="texto">
                <h4>
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    Penha:
                  </span>
                </h4>
                <p>
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    1.100
                  </span>
                </p>
              </div>
              <div className="item" id="texto">
                <h4>
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    Tijuca:
                  </span>
                </h4>
                <p>
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    1.200
                  </span>
                </p>
              </div>
              <div className="item" id="texto">
                <h4>
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    Madureira:
                  </span>
                </h4>

                <p>
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    1.300
                  </span>
                </p>
              </div>
              <div className="item" id="texto">
                <h4>
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    Barra da Tijuca:
                  </span>
                </h4>
                <p>
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    800
                  </span>
                </p>
              </div>
              <div className="item" id="texto">
                <h4>
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    Bangu:
                  </span>
                </h4>
                <p>
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    1.500
                  </span>
                </p>
              </div>
              <div className="item" id="texto">
                <h4>
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    Campo Grande:
                  </span>
                </h4>
                <p>
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    1.400
                  </span>
                </p>
              </div>
              <div className="item" id="texto">
                <h4>
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    Santa Cruz:
                  </span>
                </h4>
                <p>
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    1.600
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div role="tabpanel" className="tab-pane" id="graficoatend">
            <div className="conteinerGrafico">
              <div id="grafico" style={{ width: "500", height: "800px" }}>
                {/* {
								let data = [
									{
										x: ['Centro', 'Rocinha', 'Lins', 'Penha', 'Tijuca', 'Madureira', 'Barra da Tijuca', 'Bangu', 'Campo Grande', 'Santa Cruz'],
										y: [900, 1020, 890, 875, 695, 389, 835, 821, 978, 756],
										type: 'bar'
									}
								];
								Plotly.newPlot('grafico', data)
              } */}
              </div>
            </div>
          </div>

          <div role="tabpanel" className="tab-pane" id="endereco">
            <div className="itemEnd">
              <h4>
                <strong>UPA 24h - CENTRO</strong>
              </h4>
              <p>
                Endereço: Rua Frei Caneca, 67 - CEP: 20211-005 - Centro - RJ.
                Telefone: (21) 3762-6292
              </p>
            </div>
            <div className="itemEnd">
              <h4>
                <strong>UPA 24h - LINS</strong>
              </h4>
              <p>
                Endereço: Rua Souza Barros, 90 - CEP: 20961-150 - Lins - RJ.
                Telefone: (21) 3847-4822
              </p>
            </div>
            <div className="itemEnd">
              <h4>
                <strong>UPA 24h - ROCINHA</strong>
              </h4>
              <p>
                Endereço: Estr. da Gávea, 522 - CEP: 22451-971 - Gávea - RJ.
                Telefone: (21) 3322-7190
              </p>
            </div>
            <div className="itemEnd">
              <h4>
                <strong>UPA 24h - PENHA</strong>
              </h4>
              <p>
                Endereço: Av. Braz de Pina, S/N - CEP: 21210-673 - Penha - RJ.
                Telefone: (21) 2334-7859
              </p>
            </div>
            <div className="itemEnd">
              <h4>
                <strong>UPA 24h - MADUREIRA</strong>
              </h4>
              <p>
                Endereço: Praça dos Lavradores, S/N - CEP: 21310-200 - Campinho
                - RJ. Telefone: (21) 2594-4875
              </p>
            </div>
            <div className="itemEnd">
              <h4>
                <strong>UPA 24h - BANGU</strong>
              </h4>
              <p>
                Endereço: Rua Figueiredo Camargo, S/N - CEP: 21870-210 - Bangu -
                RJ. Telefone: (21) 2333-4754
              </p>
            </div>
            <div className="itemEnd">
              <h4>
                <strong>UPA 24h - BARRA DA TIJUCA</strong>
              </h4>
              <p>
                Endereço: Rua Ayrton Senna, 2000 - CEP: 22750-009 - Barra da
                Tijuca - RJ. Telefone: (21) 2232-3173
              </p>
            </div>
            <div className="itemEnd">
              <h4>
                <strong>UPA 24h - CAMPO GRANDE</strong>
              </h4>
              <p>
                Endereço: Av. Cesário Melo, 950 - CEP: 23055-002 - Campo Grande
                - RJ. Telefone: (21) 2333-6808
              </p>
            </div>
            <div className="itemEnd">
              <h4>
                <strong>UPA 24h - SANTA CRUZ</strong>
              </h4>
              <p>
                Endereço: Avenida João XXIII, S/N - CEP: 23560-000 - Santa Cruz
                - RJ. Telefone: (21) 2416-5719
              </p>
            </div>
          </div>

          <div role="tabpanel" className="tab-pane" id="avaliacao">
            <div style={{ left: "50" }}>
              <div className="conteinerGrafico">
                <h4>
                  <strong>Avalie UPA Centro</strong>
                </h4>
                <form>
                  <div className="estrelas">
                    <input type="radio" id="vazio" name="estrela" value="" />

                    <label>
                      <i className="fa"></i>
                    </label>
                    <input
                      type="radio"
                      id="estrela_um"
                      name="estrela"
                      value="1"
                    />

                    <label>
                      <i className="fa"></i>
                    </label>
                    <input
                      type="radio"
                      id="estrela_dois"
                      name="estrela"
                      value="2"
                    />

                    <label>
                      <i className="fa"></i>
                    </label>
                    <input
                      type="radio"
                      id="estrela_tres"
                      name="estrela"
                      value="3"
                    />

                    <label>
                      <i className="fa"></i>
                    </label>
                    <input
                      type="radio"
                      id="estrela_quatro"
                      name="estrela"
                      value="4"
                    />

                    <label>
                      <i className="fa"></i>
                    </label>
                    <input
                      type="radio"
                      id="estrela_cinco"
                      name="estrela"
                      value="5"
                    />
                    <br />
                    <br />

                    <input type="submit" value="Avaliar" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <Modal show={showModal} scrollable={true}>
          <Modal.Header>
            <Modal.Title>UPA 24h - Centro</Modal.Title>
          </Modal.Header>
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
            <Button onClick={() => activeModal(false)}>Fechar</Button>

            <Button onClick={() => OpenGeolocation()}>Abrir geolocalização</Button>
          </Modal.Footer>
        </Modal>

        {/* <div className="modal" id="abrirCentro" tabIndex={-1} role="dialog">
       
          <div className="modal-dialog" role="document">
            <div className="modal-content">

              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  <span>&times;</span>
                  <h4>
                    <span style={{ fontWeight: 'bold', color: "black" }}>
                      UPA 24h - Centro
                </span>
                  </h4>
                </button>
              </div> */}

        {/* <div className="modal-body">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12">
                      <span
                        style={{ fontWeight: 'bold', textDecoration: 'underline' }}>EQUIPAMENTOS COM DEFEITO</span>
                      <p>&nbsp;&nbsp;Eletrocardiograma<br />
											&nbsp;&nbsp;Ecocardiografia<br />
											&nbsp;&nbsp;Radiologia<br />
											&nbsp;&nbsp;Imobilizações<br />
											&nbsp;&nbsp;Mamografia<br />
											&nbsp;&nbsp;Ultrassonografia
                    </p>
                    </div>
                    <div className="col-12">
                      <span
                        style={{ fontWeight: 'bold', textDecoration: 'underline' }}>EQUIPAMENTOS
											FUNCIONANDO:</span>
                      <p>&nbsp;&nbsp;Eletrocardiograma<br />
											&nbsp;&nbsp;Ecocardiografia<br />
											&nbsp;&nbsp;Radiologia<br />
											&nbsp;&nbsp;Imobilizações<br />
											&nbsp;&nbsp;Mamografia<br />
											&nbsp;&nbsp;Ultrassonografia</p>
                    </div>
                    <div className="col-12">
                      <span
                        style={{ fontWeight: 'bold', textDecoration: 'underline' }}>PROFISSIONAIS
											AUSENTES:</span>
                      <p>&nbsp;&nbsp;Cardiologista<br />
											&nbsp;&nbsp;Clínica Médica<br />
											&nbsp;&nbsp;Cirurgia Geral<br />
											&nbsp;&nbsp;Neurocirurgia<br />
											&nbsp;&nbsp;Oftalmologia<br />
											&nbsp;&nbsp;Ortopedia</p>
                    </div>
                    <div className="col-12">
                      <span
                        style={{ fontWeight: 'bold', textDecoration: 'underline' }}>PROFISSIONAIS
											PRESENTES:</span>
                      <p>&nbsp;&nbsp;Cardiologista<br />
											&nbsp;&nbsp;Clínica Médica<br />
											&nbsp;&nbsp;Cirurgia Geral<br />
											&nbsp;&nbsp;Neurocirurgia<br />
											&nbsp;&nbsp;Oftalmologia<br />
											&nbsp;&nbsp;Ortopedia</p>
                    </div>
                  </div>
                </div>
              </div> */}

        {/* <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">Fechar</button>
              </div>
            </div>
          </div>
        </div> */}

        <div
          className="modal fade"
          id="abrirRocinha"
          tabIndex={-1}
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
                <h4>
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    UPA 24h - Rocinha
                  </span>
                </h4>
              </div>

              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12">
                      <span style={{ fontWeight: "bold", color: "black" }}>
                        EQUIPAMENTOS COM DEFEITO:
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
                      <span style={{ fontWeight: "bold", color: "black" }}>
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
                      <span style={{ fontWeight: "bold", color: "black" }}>
                        PROFISSIONAISAUSENTES:
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
                      <span style={{ fontWeight: "bold", color: "black" }}>
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

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="abrirLins" tabIndex={-1} role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
                <h4>
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    UPA 24h - Lins
                  </span>
                </h4>
              </div>

              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12">
                      <span style={{ fontWeight: "bold", color: "black" }}>
                        EQUIPAMENTOS COM DEFEITO:
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
                      <span style={{ fontWeight: "bold", color: "black" }}>
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
                      <span style={{ fontWeight: "bold", color: "black" }}>
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
                      <span style={{ fontWeight: "bold", color: "black" }}>
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

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="abrirPenha" tabIndex={-1} role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>

                <h4>
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    UPA 24h - Penha
                  </span>
                </h4>
              </div>

              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12">
                      <span style={{ fontWeight: "bold", color: "black" }}>
                        EQUIPAMENTOS COM DEFEITO:
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
                      <span style={{ fontWeight: "bold", color: "black" }}>
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
                      <span style={{ fontWeight: "bold", color: "black" }}>
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
                      <span style={{ fontWeight: "bold", color: "black" }}>
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

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Modal UPA Tijuca--> */}
        <div
          className="modal fade"
          id="abrirTijuca"
          tabIndex={-1}
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>

                <h4>
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    UPA 24h - Tijuca
                  </span>
                </h4>
              </div>

              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12">
                      <span style={{ fontWeight: "bold", color: "black" }}>
                        EQUIPAMENTOS COM DEFEITO:
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
                      <span style={{ fontWeight: "bold", color: "black" }}>
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
                      <span style={{ fontWeight: "bold", color: "black" }}>
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
                      <span style={{ fontWeight: "bold", color: "black" }}>
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

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Modal UPA Madureira--> */}
        <div
          className="modal fade"
          id="abrirMadureira"
          tabIndex={-1}
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  {" "}
                  {/*estou verificando esses buttons e colocando o fechamento abaixo do <span></span> */}
                  <span>&times;</span>
                </button>
                <h4>
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    UPA 24h - Madureira
                  </span>
                </h4>
              </div>

              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12">
                      <span style={{ fontWeight: "bold", color: "black" }}>
                        EQUIPAMENTOS COM DEFEITO:
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
                      <span style={{ fontWeight: "bold", color: "black" }}>
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
                      <span style={{ fontWeight: "bold", color: "black" }}>
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
                      <span style={{ fontWeight: "bold", color: "black" }}>
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

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Modal UPA Barra da Tijuca--> */}
        <div className="modal fade" id="abrirBarra" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>

                <h4>
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    UPA 24h - Barra da Tijuca
                  </span>
                </h4>
              </div>

              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12">
                      <span style={{ fontWeight: "bold", color: "black" }}>
                        EQUIPAMENTOS COM DEFEITO:
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
                      <span style={{ fontWeight: "bold", color: "black" }}>
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
                      <span style={{ fontWeight: "bold", color: "black" }}>
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
                      <span style={{ fontWeight: "bold", color: "black" }}>
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

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Modal UPA Bangu--> */}
        <div className="modal fade" id="abrirBangu" tabIndex={-1} role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
                <h4>
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    UPA 24h - Bangu
                  </span>
                </h4>
              </div>

              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12">
                      <span style={{ fontWeight: "bold", color: "black" }}>
                        EQUIPAMENTOS COM DEFEITO:
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
                      <span style={{ fontWeight: "bold", color: "black" }}>
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
                      <span style={{ fontWeight: "bold", color: "black" }}>
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
                      <span style={{ fontWeight: "bold", color: "black" }}>
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

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Modal UPA Campo Grande--> */}
        <div
          className="modal fade"
          id="abrirCampoGrande"
          tabIndex={-1}
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
                <h4>
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    UPA 24h - Campo Grande
                  </span>
                </h4>
              </div>

              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12">
                      <span style={{ fontWeight: "bold", color: "black" }}>
                        EQUIPAMENTOS COM DEFEITO:
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
                      <span style={{ fontWeight: "bold", color: "black" }}>
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
                      <span style={{ fontWeight: "bold", color: "black" }}>
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
                      <span style={{ fontWeight: "bold", color: "black" }}>
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

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="abrirSantaCruz"
          tabIndex={-1}
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>

                <h4>
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    UPA 24h - Santa Cruz
                  </span>
                </h4>
              </div>

              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12">
                      <span style={{ fontWeight: "bold", color: "black" }}>
                        EQUIPAMENTOS COM DEFEITO:
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
                      <span style={{ fontWeight: "bold", color: "black" }}>
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
                      <span style={{ fontWeight: "bold", color: "black" }}>
                        PROFISSIONAISAUSENTES:
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
                      <span style={{ fontWeight: "bold", color: "black" }}>
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
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
          PARA O
          {/* <!-- jQuery (necessary for Bootstrap's JavaScript plugins) --> */}
          {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script> */}
          {/* <!-- Include all compiled plugins (below), or include individual files as needed --> */}
          {/* <script src="js/bootstrap.min.js"></script> */}
        </div>
      </div>
  );
};

export default Home;
