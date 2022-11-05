import styled from "styled-components";
import logoHover from "../../../assets/img/logo-hover.png"

export const Header = styled.header`
    background-color: grey;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: fixed;
    background-color: #1e1e1e;
    padding: 0 4.7rem 4.8rem 3.2rem;

    .logo {
        padding-left: 1.5rem;
        padding-bottom: 7rem;
    }

    img {
        width: 140px;
    }

    li {
        padding-bottom: 4.8rem;
    }

    li a {
        text-transform: uppercase;
        font-size: 1.6rem;
        text-align: start;
        line-height: 24px;
        color: #f8f9fa;
    }

    li a:hover {
        color: #939598;
    }

    span a {
        color: #939598;
        font-size: 1.7rem;
        width: 69px;
    }

    span a:hover {
        color: grey;
    }

    .fa-arrow-down {
        transform: rotate(667deg);
    }
`