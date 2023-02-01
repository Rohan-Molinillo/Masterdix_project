import NavBar from "../components/NavBar";
import "./Home.css";

export default function MyHistory() {
  return (
    <div className="history-container">
      <header>
        <img
          className="banniere"
          alt="Logo Banniere"
          src="src/assets/logo_banniere.png"
        />
      </header>
      <section className="presentation">
        <img
          className="rounded_logo"
          alt="Logo MDX"
          src="src/assets/logo_round.png"
        />
      </section>
      <footer className="History-footer">
        <NavBar />
      </footer>
    </div>
  );
}
