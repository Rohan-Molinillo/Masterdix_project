import NavBar from "../components/NavBar";
import "./MyHistory.css";

export default function MyHistory() {
  return (
    <div className="history-container">
      <header>
        <img
          className="banniere"
          alt="Logo Banniere"
          src="src/assets/banniere_manette.png"
        />
      </header>
      <section className="my-history">
        <h1 className="my-history-title">MON HISTOIRE</h1>
        <div className="decouverte">
          <h2>La découverte</h2>
          <img
            className="master-system"
            alt="master system"
            src="src/assets/master_system.png"
          />
          <p>
            C'est vers l'âge de mes 5 ans qu'un jour ma mère reçoit un colis à
            la maison, une console de jeux qu'elle s'empresse de brancher à la
            télévision 4:3. Elle l'allume et joue une dizaine de minutes. Je me
            souviens encore regardant cet écran, subjuguer, les yeux écarquillés
            en train de découvrir ce jeu et cette console.
            <br />
            Quels étaient donc ce jeu et cette fameuse console ? Je venais tout
            simplement de découvrir le monde des jeux vidéo avec Alex Kidd in
            Miracle World sur Sega Master System 2.
            <br />
            Je me souviens avoir passé des heures sur cet unique jeu, appelant
            ma mère "AU SECOURS ", car je n'arrivais pas à passer les minis boss
            du jeu qui n'était rien d'autre qu'un simple jeu de
            pierre/feuille/ciseaux. Alex Kidd est le seul souvenir que j'ai de
            la master system.
            <br />
            C'est donc grâce à ma mère que cette passion est née.
          </p>

          <div className="souvenirs">
            <h2>Les Souvenirs</h2>
            <img
              className="megadrive"
              alt="sega megadrive"
              src="src/assets/megadrive.png"
            />
            <p>
              J'ai des souvenirs tous particuliers concernant une console qui
              m'a fait découvrir beaucoup de jeux qui à l'heure actuelle, je
              porte encore dans mon cœur. Je parle de la Sega Mega Drive.
              <br />
              C'est avec cette console que j'ai découvert des jeux comme Sonic
              The Hedgehog, Quackshot, Le Roi Lion, ou encore Castle Of
              Illusion. Ces mêmes jeux qui sont devenus des classiques aimer de
              tous.
              <br />
              J'ai aussi connu les joies de devoir souffler dans la cartouche de
              jeu parce que ce dernier ne démarrer pas. C'est aussi grâce à
              cette console que j'ai joué à mon tout premier jeu de combat qui
              n'est autre que Street Of Rage, j'en ai passé des heures sur ce
              jeu à marteler les touches de la manette.
              <br />
              J'ai aussi beaucoup aimé et jouer à d'autres jeux avec un peu
              moins de succès et un peu moins connu comme Toejam & Earl, Cool
              Spot ou Rocket Knight Adventure.
            </p>
          </div>
          <div className="nintendo">
            <h2>La 3D</h2>
            <img
              className="nintendo64"
              alt="nintendo 64"
              src="src/assets/nintendo64.png"
            />
            <p>
              Ce sera sans grande surprise pour vous si je vous dis que j'ai
              découvert les jeux en 3D avec la Nintendo 64 ?<br />
              J'ai eu un peu de mal à prendre en main mes premiers jeux en 3D.
              J'étais enfant et cela était pour moi quelque chose de difficile à
              comprendre et à assimiler. Et puis il y avait aussi en cause cette
              "magnifique" manette à trois poignées à l'ergonomie plus que
              discutable.
              <br />
              Mais avec un peu de temps et d'acharnement, j'ai enfin pris du
              plaisir sur des jeux comme Super Mario 64, Mario Kart 64, et même
              sur mon tout premier TPS qui n'est autre que Duke Nukem : Zero
              Hour.
              <br />
              Mais maman, on peut brancher 4 manettes sur cette console ! Bien
              vue l'ami ! C'est ainsi que j'ai pu disputer mes premières parties
              de jeu en multijoueurs avec mon frère, ma mère ou encore mes
              cousins et cousines sur le mythique Mario Party.
            </p>
          </div>
          <div className="ds">
            <h2>Deux écrans dans la poche</h2>
            <img
              className="nintendo-ds"
              alt="nintendo DS"
              src="src/assets/ds.png"
            />
            <p>
              J'ai découvert la Nintendo ds avec la Nintendo ds lite. J'avais la
              couleur blanche que je mettais payer avec mon petit pécule que je
              mettais mis de côté avec l'argent que je recevais à Noel ou a mon
              anniversaire.
              <br />
              C'est donc la première console que je me suis payé moi-même avec
              mon argent. J'avais vraiment le sentiment d'enfin possédé ma
              propre console de jeu à moi.
              <br />
              Mon tout premier jeu sur cette console a été Nintendogs "petite
              pensée à tous les chiens virtuelles abandonnée depuis toutes ces
              années". Ensuite, j'ai eu le jeu que j'ai poncé étant enfant,
              Animal Crossing Wild World. J'ai passé énormément d'heure sur ce
              jeu. Pouvoir jouer à animal crossing "que j'ai découvert sur
              Gamecube" partout où je veux me paraissait incroyable.
              <br />
              J'ai aussi découvert Kirby avec Kirby power paintbrush sur cette
              console.
            </p>
          </div>
        </div>
      </section>
      <footer className="History-footer">
        <NavBar />
      </footer>
    </div>
  );
}
