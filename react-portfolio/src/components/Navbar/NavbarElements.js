
import { NavLink as Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

export const Nav = styled.nav`
    background: #A8A4A6;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 100px) /2);
    z-index: 10;
`

export const NavLink = styled(Link)`
color: #fff;
display: flex;
align-items: center;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active {
    color: #15cdfc;
}
`
export const Bars = styled(FaBars)`
display: none;
color: #fff

@mediascreen and (max-width: 768x) {
    display: block;
    posititon: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
}
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    media screen and (max-width: 768px) {
        display: none;
    }
    `