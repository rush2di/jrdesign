import { _aboutHero } from "utils/constants/";

const AboutHero = () => {
  return (
    <header className="header__wrapper">
      <div className="container">
        <div className="header__content">
          <h1 className="heading3 animated">
            <div>{_aboutHero.title}</div>
          </h1>
          <h2 className="heading2 animated">
            <div>{_aboutHero.sub_tiltes[0]}</div>
            <div>{_aboutHero.sub_tiltes[1]}</div>
            <div>{_aboutHero.sub_tiltes[2]}</div>
          </h2>
        </div>
      </div>
    </header>
  );
};

export default AboutHero;
