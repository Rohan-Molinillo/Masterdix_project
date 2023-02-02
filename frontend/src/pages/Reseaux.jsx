import NavBar from "../components/NavBar";
import "./Reseaux.css";

export default function Reseaux() {
  return (
    <div className="reseaux-container">
      <header>
        <img
          className="banniere-reseaux"
          alt="Logo reseaux"
          src="src/assets/reseaux.png"
        />
      </header>
      <section className="lien-reseaux">
        <h1>MES RESEAUX</h1>
        <p>Retrouvez moi sur mes differents réseaux</p>
        <div className="clic">
          <a href="https://www.twitch.tv/masterdixtv/">
            <img
              className="twitch image-lien"
              alt="Logo Twitch"
              src="src/assets/twitch.png"
            />
          </a>
          <a href="https://discord.com/invite/6uHyh2pSDJ">
            <img
              className="discord image-lien"
              alt="Logo discord"
              src="src/assets/discord.png"
            />
          </a>
          <a href="https://twitter.com/masterdix51/">
            <img
              className="twitter image-lien"
              alt="Logo twitter"
              src="src/assets/twitter.png"
            />
          </a>
          <a href="https://www.tiktok.com/@masterdix.tv?is_from_webapp=1&sender_device=pc/">
            <img
              className="tiktok image-lien"
              alt="Logo tiktok"
              src="src/assets/tiktok.png"
            />
          </a>
        </div>
      </section>
      <footer className="Reseaux-footer">
        <NavBar />
      </footer>
    </div>
  );
}
