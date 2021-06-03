import React, { useState } from "react";
import "./style.css";
import { Button, Modal, Nav, NavDropdown } from "react-bootstrap";
import Logo from "../../assets/logo.png";
import Bitmap from "../../assets/bitmap.png";
import ButtonMap from "../../components/ButtonMap";
import DistrictUpa from "../../components/District";
import { title } from "node:process";


const Home: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  // const activeModal = (show: boolean) => {
  //   if (!showModal && show) {
  //     setShowModal(true);
  //   } else {
  //     setShowModal(false);
  //   }
  // };

  // const OpenGeolocation = () => {
  //   console.log("abrir Geolocalização");
  // };

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
  const districtUpas = [
    {
      title: "Centro",
      atendimentos: 2000,
    },
    {
      title: "Rocinha",
      atendimentos: 1506,
    },
    {
      title: "Lins",
      atendimentos: 1200,
    },
    {
      title: "Penha",
      atendimentos: 1100,
    },
    {
      title: "Tijuca",
      atendimentos: 1700,
    },
    {
      title: "Madureira",
      atendimentos: 1520,
    },
    {
      title: "Barra da Tijuca",
      atendimentos: 1322,
    },
    {
      title: "Bangu",
      atendimentos: 1750,
    },
    {
      title: "Campo Grande",
      atendimentos: 1660,
    },
    {
      title: "Santa Cruz",
      atendimentos: 1740,
    },
  ];
  return (
    <div className="container-root">
      {/* <div className="page-header"> */}

      <ul className="nav nav-tabs ml-1" role="tablist">
        {/* <li role="presentation" className="active">
            <a
              href="#disponiveis"
              aria-controls="disponiveis"
              role="tab"
              data-toggle="tab"
            >
              <span className="tabsNavigation ml-1">UPAs disponíveis</span>
            </a>
          </li> */}
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
            <div className="area">

              <img src={Bitmap} className="centro" alt="" />

              <img src={Logo} className="logo" alt="" />

              <ButtonMap  //btnCentro
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

              <ButtonMap  //btnRocinha
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

              <ButtonMap  //btnTijuca
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

              <ButtonMap  //btnLins
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

              <ButtonMap  //btnPenha
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

              <ButtonMap  //btnMadureira
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

              <ButtonMap  //btnBangu
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

              <ButtonMap  //btnBarra
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

              <ButtonMap  //btnCampoGrande
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

              <ButtonMap  //btnSantaCruz
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
              <div className="avalie">
                <div className="form-group ">
                  <label className="col-md-1 control-label">Avalie:</label>
                  <div className="col-md-3">
                    <select className="form-control" id="cidades" data-placeholder="Selecione a cidade">
                      <option value="0"></option>
                      <option value="1">Centro</option>
                      <option value="1">Rocinha</option>
                      <option value="2">Lins</option>
                      <option value="3">Penha</option>
                      <option value="4">Tijuca</option>
                      <option value="5">Madureira</option>
                      <option value="6">Barra da Tijuca</option>
                      <option value="7">Bangu</option>
                      <option value="8">Campo Grande</option>
                      <option value="9">Santa Cruz</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"></link>
                    <div className="estrelas">
                      <input type="radio" id="cm_star-empty" name="fb" value="" checked />
                      <label htmlFor="cm_star-1"><i className="fa"></i></label>
                      <input type="radio" id="cm_star-1" name="fb" value="1" />
                      <label htmlFor="cm_star-2"><i className="fa"></i></label>
                      <input type="radio" id="cm_star-2" name="fb" value="2" />
                      <label htmlFor="cm_star-3"><i className="fa"></i></label>
                      <input type="radio" id="cm_star-3" name="fb" value="3" />
                      <label htmlFor="cm_star-4"><i className="fa"></i></label>
                      <input type="radio" id="cm_star-4" name="fb" value="4" />
                      <label htmlFor="cm_star-5"><i className="fa"></i></label>
                      <input type="radio" id="cm_star-5" name="fb" value="5" />
                    </div>
                
                </div>
                </div>
             
              </div>



              <div className="item">
                <h4>
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    MÉDIA MENSAL DE ATENDIMENTOS:
                  </span>
                </h4>
              </div>

              {districtUpas.map((upa, index) => {
                return (
                  <DistrictUpa
                    key={upa.title.toString()}
                    DistrictTitle={upa.title}
                    NumberOfAttendance={upa.atendimentos}
                  />
                )
              })}



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


        {/*Adicionar informações de cada upa.
//adicionar um array que vai renderizar essas informações
*/}
        {/* O componente foi criado */}

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
  );
};

export default Home;
