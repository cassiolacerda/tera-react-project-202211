import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";

import styles from "./Home.module.css";

import AppLoading from "../organisms/AppLoading";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function Home() {
  const navigate = useNavigate();

  const [users, setUsers] = React.useState([]);
  const { currentUser, setCurrentUser } = React.useContext(CurrentUserContext);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://63cf09718a780ae6e6710dbe.mockapi.io/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      });
  }, []);

  const handleUserChange = (e) => setCurrentUser(e.target.value);

  const handleConfirmClick = () => navigate(`/users/${currentUser}`);

  return isLoading ? (
    <AppLoading />
  ) : (
    <div className={`${styles.home} center`}>
      <div className={styles.logo}>
        <img src={logo} className="responsive" alt="" />
      </div>
      <select onChange={handleUserChange} className={styles.selectUsers}>
        <option value="">Selecionar usuário</option>
        {users
          .sort((a, b) => a.fn.localeCompare(b.fn))
          .map((user) => (
            <option key={user.id} value={user.id}>
              {user.fn} {user.ln}
            </option>
          ))}
      </select>
      {!!currentUser && (
        <button onClick={handleConfirmClick} className="button-primary">
          Entrar
        </button>
      )}
    </div>
  );
}
