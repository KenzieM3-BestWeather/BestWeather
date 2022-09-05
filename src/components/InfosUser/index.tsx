import { useContext } from "react";
import { AuthContext } from "../../Context/LoginContext";
import { ListInfosUser } from "./styles";
import { CityContext } from "../../Context/CityContext";

const InfoUser = () => {
  const { user } = useContext(AuthContext);
  const { setModal } = useContext(CityContext);

  return (
    <>
      <ListInfosUser>
        <li>
          <figure>
            <img src={user.url} alt="homem" />
          </figure>
        </li>
        <li className="city-list">{user.city} </li>
        <li> {user.occupation}</li>
        <li>
          <button onClick={() => setModal("edit")}>
            <svg
              width="76"
              height="60"
              viewBox="0 0 76 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="76" height="60" rx="20" fill="#0F4670" />
              <path
                d="M21.267 35.3409C20.2159 35.3409 19.3139 34.9645 18.5611 34.2116C17.8082 33.4588 17.4318 32.5568 17.4318 31.5057C17.4318 30.4545 17.8082 29.5526 18.5611 28.7997C19.3139 28.0469 20.2159 27.6705 21.267 27.6705C22.3182 27.6705 23.2202 28.0469 23.973 28.7997C24.7259 29.5526 25.1023 30.4545 25.1023 31.5057C25.1023 32.2017 24.9247 32.8409 24.5696 33.4233C24.2287 34.0057 23.767 34.4744 23.1847 34.8295C22.6165 35.1705 21.9773 35.3409 21.267 35.3409ZM37.7905 35.3409C36.7393 35.3409 35.8374 34.9645 35.0845 34.2116C34.3317 33.4588 33.9553 32.5568 33.9553 31.5057C33.9553 30.4545 34.3317 29.5526 35.0845 28.7997C35.8374 28.0469 36.7393 27.6705 37.7905 27.6705C38.8416 27.6705 39.7436 28.0469 40.4964 28.7997C41.2493 29.5526 41.6257 30.4545 41.6257 31.5057C41.6257 32.2017 41.4482 32.8409 41.093 33.4233C40.7521 34.0057 40.2905 34.4744 39.7081 34.8295C39.1399 35.1705 38.5007 35.3409 37.7905 35.3409ZM54.3139 35.3409C53.2628 35.3409 52.3608 34.9645 51.608 34.2116C50.8551 33.4588 50.4787 32.5568 50.4787 31.5057C50.4787 30.4545 50.8551 29.5526 51.608 28.7997C52.3608 28.0469 53.2628 27.6705 54.3139 27.6705C55.3651 27.6705 56.267 28.0469 57.0199 28.7997C57.7727 29.5526 58.1491 30.4545 58.1491 31.5057C58.1491 32.2017 57.9716 32.8409 57.6165 33.4233C57.2756 34.0057 56.8139 34.4744 56.2315 34.8295C55.6634 35.1705 55.0241 35.3409 54.3139 35.3409Z"
                fill="white"
              />
            </svg>
          </button>
        </li>
      </ListInfosUser>
    </>
  );
};
export default InfoUser;
