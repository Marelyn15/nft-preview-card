import "../styles/index.css";
import ImageEquilibrium from "../images/image-equilibrium.jpg";
import Avatar from "../images/imageAvatar.jpg";
import IconClock from "../images/iconClock.svg";
import IconEthereum from "../images/iconEthereum.svg";

function App() {
  return (
    <main className="App">
      {/**Cuadro */}
      <div className="container">
        <div className="container__box">
          {/*Cuadro de imagen */}
          <figure className="container__box__picture ">
            <img
              src={ImageEquilibrium}
              className="container__box__picture-image "
            />
            <div className="showIcon"></div>
            <span data-icon="iconView"></span>
          </figure>
          {/*Parrafos */}
          <h2 className="container__box__title">
            {" "}
            <a href="#">Equilibrium #3429</a>{" "}
          </h2>
          <p className="container__box__parragraph">
            Our Equilibrium collection promotes balance and calm.
          </p>
          <div className="container__box__details">
            <p className="container__box__details-price">
              {" "}
              <img
                src={IconEthereum}
                alt="IconEthereum"
                className="container__box__details-price-etherium"
              />{" "}
              0.041 ETH
            </p>
            <p className="container__box__details-date">
              {" "}
              <img
                src={IconClock}
                alt="IconClock"
                className="container__box__details-date-icon"
              />{" "}
              3 days left{" "}
            </p>
          </div>
          <p className="linea"> ________________________________ </p>
          <div className="container__box__author">
            <img
              src={Avatar}
              alt="avatar"
              className="container__box__author-avatar"
            />
            <p>
              Creation of{" "}
              <a href="#" className="container__box__author-name">
                Jules Wyvern
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
