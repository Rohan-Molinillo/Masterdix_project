import NavBar from "../components/NavBar";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
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
        <p>
          Bonjour, je me présente, Molinillo Rohan, née un 17 février. Gameur et
          passioné de jeux vidéos, Youtube, Twitch et tout ce qui touche au
          monde du Gaming. Je passe mon temps libre à streamer mes parties de
          jeux solo ou avec des amis, monter des videos pour mes réseaux, créé
          des compositions ou des overlays sur photoshop. J'aime aussi découvrir
          et apprendre de nouvelle chose. Je fonctionne beaucoup en auto
          didacte. J'ai appris à maitrisé des logiciel comme Photoshop ou
          Premier Pro tout seul comme un grand. Actuellement j'apprend les
          languages HTML, CSS, JAVA, PHP...etc, pour devenir dévloppeur web.
          J'ai créé ce site avec mes connaissances apprises sur openclassrooms.
        </p>
      </section>
      <footer className="Home-footer">
        <NavBar />
      </footer>
    </div>
  );
}
