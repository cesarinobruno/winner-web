import React, { useState } from "react";
import "./style.css";
import { Button, Modal } from "react-bootstrap";
import Logo from "../../assets/logo.png";
import Bitmap from "../../assets/bitmap.png";
import Maps from "./Maps";
import ButtonMap from "../../components/ButtonMap";
import InformationModalUpa from "../../components/InformationModal";

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const activeModal = (show: boolean) => {
    if (!showModal && show) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };

  const OpenGeolocation = () => {
    console.log("abrir Geolocalização");
  };

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

              <img src={Logo} className="logo" alt="" />

              <ButtonMap //btnCentro
                backgroundColorButton="rgb(204, 220, 226)"
                borderRadiusButton="5px"
                positionButton="absolute"
                heigthButton={27}
                widthButton={31}
                topButton={457}
                leftButton={1125}
                typeButton="submit"
                onClickButton={() => setShowModal(true)}
              />

              <ButtonMap //btnRocinha
                backgroundColorButton="rgb(204, 220, 226)"
                borderRadiusButton="5px"
                positionButton="absolute"
                heigthButton={27}
                widthButton={31}
                topButton={528}
                leftButton={1114}
                typeButton="submit"
                onClickButton={() => setShowModal(true)}
              />

              <ButtonMap //btnTijuca
                backgroundColorButton="rgb(204, 220, 226)"
                borderRadiusButton="5px"
                positionButton="absolute"
                heigthButton={27}
                widthButton={31}
                topButton={500}
                leftButton={1062}
                typeButton="submit"
                onClickButton={() => setShowModal(true)}
              />

              <ButtonMap //btnLins
                backgroundColorButton="rgb(204, 220, 226)"
                borderRadiusButton="5px"
                positionButton="absolute"
                heigthButton={27}
                widthButton={31}
                topButton={443}
                leftButton={1032}
                typeButton="submit"
                onClickButton={() => setShowModal(true)}
              />

              <ButtonMap //btnPenha
                backgroundColorButton="rgb(204, 220, 226)"
                borderRadiusButton="5px"
                positionButton="absolute"
                heigthButton={27}
                widthButton={31}
                topButton={377}
                leftButton={1033}
                typeButton="submit"
                onClickButton={() => setShowModal(true)}
              />

              <ButtonMap //btnMadureira
                backgroundColorButton="rgb(204, 220, 226)"
                borderRadiusButton="5px"
                positionButton="absolute"
                heigthButton={27}
                widthButton={31}
                topButton={387}
                leftButton={968}
                typeButton="submit"
                onClickButton={() => setShowModal(true)}
              />

              <ButtonMap //btnBangu
                backgroundColorButton="rgb(204, 220, 226)"
                borderRadiusButton="5px"
                positionButton="absolute"
                heigthButton={27}
                widthButton={31}
                topButton={422}
                leftButton={866}
                typeButton="submit"
                onClickButton={() => setShowModal(true)}
              />

              <ButtonMap //btnBarra
                backgroundColorButton="rgb(204, 220, 226)"
                borderRadiusButton="5px"
                positionButton="absolute"
                heigthButton={27}
                widthButton={31}
                topButton={522}
                leftButton={899}
                typeButton="submit"
                onClickButton={() => setShowModal(true)}
              />

              <ButtonMap //btnCampoGrande
                backgroundColorButton="rgb(204, 220, 226)"
                borderRadiusButton="5px"
                positionButton="absolute"
                heigthButton={27}
                widthButton={31}
                topButton={494}
                leftButton={741}
                typeButton="submit"
                onClickButton={() => setShowModal(true)}
              />

              <ButtonMap //btnSantaCruz
                backgroundColorButton="rgb(204, 220, 226)"
                borderRadiusButton="5px"
                positionButton="absolute"
                heigthButton={27}
                widthButton={31}
                topButton={467}
                leftButton={611}
                typeButton="submit"
                onClickButton={() => setShowModal(true)}
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
                <span style={{ fontWeight: "bold", color: "black" }}>950</span>
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
                <span style={{ fontWeight: "bold", color: "black" }}>800</span>
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
              Endereço: Praça dos Lavradores, S/N - CEP: 21310-200 - Campinho -
              RJ. Telefone: (21) 2594-4875
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
              Endereço: Av. Cesário Melo, 950 - CEP: 23055-002 - Campo Grande -
              RJ. Telefone: (21) 2333-6808
            </p>
          </div>
          <div className="itemEnd">
            <h4>
              <strong>UPA 24h - SANTA CRUZ</strong>
            </h4>
            <p>
              Endereço: Avenida João XXIII, S/N - CEP: 23560-000 - Santa Cruz -
              RJ. Telefone: (21) 2416-5719
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

      <InformationModalUpa
        upaName="UPA 24 Copacanaba"
        // onClick={setShowModal(true)}
      />
  </div>
  );
};

export default Home;
