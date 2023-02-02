import { useState, useRef, useContext } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/ContextAuth";
import NavBar from "../components/NavBar";
import "./Login.css";

export default function Login() {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState("password");
  const [errorInput, setErrorInput] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = () => {
    const dataPost = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataPost),
    })
      .then((response) => response.json())
      .then((data) => {
        const { token, user } = data;
        const { role, id } = user;
        if (token) {
          setAuth((oldAuth) => ({
            ...oldAuth,
            isAuthenticated: true,
            token,
            role,
            id,
          }));
          navigate("/");
        } else {
          setErrorInput(true);
        }
      })

      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="login-container">
      <Link to="/" className="Logo_content">
        <img
          src="./src/assets/logo_banniere.png"
          alt="logo banniere"
          className="banniere"
        />
      </Link>
      <img
        src="./src/assets/profil_logo.png"
        alt="login"
        className="logo_connect"
      />
      <form
        className="form_login"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div>
          <input
            type="email"
            className="username"
            name="email"
            placeholder="Email"
            ref={emailRef}
          />
        </div>
        <div className="form_input">
          <div className="password_box">
            {showPassword === "password" ? (
              <AiFillEye
                className="icon"
                onClick={() => {
                  setShowPassword("text");
                }}
              />
            ) : (
              <AiFillEyeInvisible
                className="icon"
                onClick={() => {
                  setShowPassword("password");
                }}
              />
            )}
            <input
              type={showPassword}
              className="password"
              name="password"
              minLength="8"
              required
              placeholder="Mot de passe"
              ref={passwordRef}
            />
          </div>
        </div>

        <input type="submit" value="Connexion" className="sign_in" />
        {errorInput && <p className="error">Email ou mot de passe incorrect</p>}
      </form>
      <Link className="register" to="/register">
        <p>Créer un compte</p>
      </Link>
      <footer className="Login-footer">
        <NavBar />
      </footer>
    </div>
  );
}
