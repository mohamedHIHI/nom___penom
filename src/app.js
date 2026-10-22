
import { useState } from "react";

const initialListUsers = [
  { id: 1, username: "admin", password: "admin123" },
  { id: 2, username: "salma", password: "salma123" },
  { id: 3, username: "youssef", password: "youssef123" },
  { id: 4, username: "amina", password: "amina123" }
];

export default function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  function submitHandler(e) {
    e.preventDefault();

    if (login.trim() === "" || password === "") {
      setMessage({
        type: "error",
        message: "Veuillez remplir tous les champs."
      });
      return;
    }

    const userInfos = initialListUsers.find((user) => {
      return (
        user.username === login.trim() &&
        user.password === password
      );
    });

    if (userInfos) {
      setMessage({
        type: "success",
        message: `Bienvenue, ${userInfos.username} ! Connexion réussie.`
      });
    } else {
      setMessage({
        type: "error",
        message: "Nom d'utilisateur ou mot de passe incorrect."
      });
    }
  }

  return (
    <div className="container min-vh-100 d-flex align-items-center justify-content-center">
      <div className="card shadow-sm w-100" style={{ maxWidth: "420px" }}>
        <div className="card-body p-4">
          <h1 className="h3 text-center mb-4">Login</h1>

          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <label htmlFor="login" className="form-label">
                Username :
              </label>
              <input
                id="login"
                type="text"
                className="form-control"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                placeholder="Entrez votre username"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password :
              </label>
              <input
                id="password"
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Entrez votre password"
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Se connecter
            </button>
          </form>

          {message && (
            <div
              className={`alert mt-3 mb-0 ${
                message.type === "success" ? "alert-success" : "alert-danger"
              }`}
              role="alert"
            >
              {message.message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}