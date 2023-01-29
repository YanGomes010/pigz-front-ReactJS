import Logo from "../../images/logo.png"
import Button from "../GeneralComps/Button"
import styles from "./NavBar.module.css"
export default function NavBar(){
    return(
        <nav className={styles.navBar}>
                  <div className={styles.blur}></div>
            <header>
                <img alt="Logo" src={Logo}></img>
                <Button text="Já sou parceiro"/>
            </header>
        </nav>
    )
}