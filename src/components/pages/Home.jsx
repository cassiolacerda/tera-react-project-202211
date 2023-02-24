import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";

import AppLoading from "../organisms/AppLoading";

export default function Home() {
  const navigate = useNavigate();

  const [users, setUsers] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState("");
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
    <div className="home center">
      <div className="home__logo">
        <img src={logo} className="responsive" alt="" />
      </div>
      <select onChange={handleUserChange} className="home__select-users">
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
