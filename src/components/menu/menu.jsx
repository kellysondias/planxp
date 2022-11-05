import logo from "../../../src/assets/img/logo.png";
import { Header } from "../styled-comps/Header/header";

export const Menu = () => {
  return (
    <Header>
      <div className="logo">
        <a href="#">
          <img src={logo} alt="Logo"></img>
        </a>
      </div>

      <nav>
        <ul>
          <li>
            <a href="#quem-somos">/Quem somos</a>
          </li>
          <li>
            <a href="#o-que-fazemos">/O que fazemos</a>
          </li>
          <li>
            <a href="#plan-news">/Plan news</a>
          </li>
          <li>
            <a href="#nossos-clientes">/Nossos clientes</a>
          </li>
          <li>
            <a href="#contato">/Contato</a>
          </li>
        </ul>
      </nav>

      <div>
        <span><a href="#">Que tal inovar <br/> com a gente?</a></span>
        <i class="fa-solid fa-arrow-down"></i>
      </div>
    </Header>
  );
};
