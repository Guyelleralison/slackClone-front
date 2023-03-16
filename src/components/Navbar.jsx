import NavBarMenu from "./NavBarMenu";

export default function NavBar() {
    return (
        <nav>
            <NavBarMenu title="Liste candidats" link="/" isActive="true"></NavBarMenu>
            <NavBarMenu title="Paramètres" link="/params"></NavBarMenu>
        </nav>
    );
}