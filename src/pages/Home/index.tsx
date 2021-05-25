import React, { useState } from "react";
import "./style.css";
import { Button, Modal } from "react-bootstrap";
import Logo from "../../assets/logo.png";
import Bitmap from "../../assets/bitmap.png";
import ButtonMap from "../../components/ButtonMap";
import DistrictUpa from "../../components/District";


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
              <div className="area">
                <img src={Bitmap} className="centro" alt="" />

                <img src={Logo} className="logo" alt=""/>

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
              </div>



              <div className="item">
                <h4>
                  <span style={{ fontWeight: "bold", color: "black" }}>
                    MÉDIA MENSAL DE ATENDIMENTOS:
                  </span>
                </h4>
              </div>
              <DistrictUpa
                DistrictTitle = "Centro"
                NumberOfAttendance = {1800}
              />
              <DistrictUpa
                DistrictTitle = "Rocinha"
                NumberOfAttendance = {1150}
              />
              <DistrictUpa
                DistrictTitle = "Lins"
                NumberOfAttendance = {950}
              />
              <DistrictUpa
                DistrictTitle = "Penha"
                NumberOfAttendance = {1100}
              />
              <DistrictUpa
                DistrictTitle = "Tijuca"
                NumberOfAttendance = {1100}
              />
              <DistrictUpa
                DistrictTitle = "Madureira"
                NumberOfAttendance = {1300}
              />
              <DistrictUpa
                DistrictTitle = "Barra da Tijuca"
                NumberOfAttendance = {800}
              />
              <DistrictUpa
                DistrictTitle = "Bangu"
                NumberOfAttendance = {1500}
              />
              <DistrictUpa
                DistrictTitle = "Campo Grande"
                NumberOfAttendance = {1400}
              />
              <DistrictUpa
                DistrictTitle = "Santa Cruz"
                NumberOfAttendance = {1600}
              />
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
