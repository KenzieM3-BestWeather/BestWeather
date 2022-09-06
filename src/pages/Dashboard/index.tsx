import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CityInf from "../../components/CityInfos";
import CityRegister from "../../components/CityRegister";
import FooterDashboard from "../../components/FooterDash";
import Forecast from "../../components/Forecast";
import HeaderDashboard from "../../components/HeaderDashboard";
import InfoUser from "../../components/InfosUser";
import Modal from "../../components/Modal";
import SectionSearch from "../../components/SectionSearch";
import { SiOpenstreetmap } from "react-icons/si";
import { MainDash } from "./styles";

import { CityContext } from "../../Context/CityContext";
import Banners from "../../components/Banners";

const Dashboard = () => {
  const { loading, modal } = useContext(CityContext);
  const navigate = useNavigate();
  const mapa = () => {
    navigate("/map");
  };
  const tokenUser = localStorage.getItem("@loginBWeather:token");

  return (
    <>
      {tokenUser ? (
        <>
          <HeaderDashboard />
          <MainDash>
            {loading ? (
              <div className="divLoading">
                <h2>Estamos preparando suas informações</h2>
              </div>
            ) : (
              <>
                {modal && <Modal />}
                <SectionSearch />
                <InfoUser />
                <section>
                  <CityInf />
                  <Banners />
                </section>
                <CityRegister />
                <Forecast />
                <button onClick={mapa}>
                  <SiOpenstreetmap width={26} size={26} />
                </button>
                <FooterDashboard />
              </>
            )}
          </MainDash>
        </>
      ) : (
        navigate("/")
      )}
    </>
  );
};

export default Dashboard;
