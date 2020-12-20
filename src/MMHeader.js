import logo from './assets/img/streamical_icon.svg';
import userIcon from './assets/img/fakeuser.jpg';

function MMHeader() {
    function toggleMenu() {
        if(document.getElementById("mobile-menu").classList[1] === "mm-mobile-menu-open") {
            document.getElementById("mobile-menu").classList.replace("mm-mobile-menu-open", "mm-mobile-menu-closed");
        } else {
            document.getElementById("mobile-menu").classList.replace("mm-mobile-menu-closed", "mm-mobile-menu-open");
        }
    }

    function toggleSubMenu(element) {

        let subMenu = document.querySelector("#"+element + "  > .mm-mobile-submenu");
        console.log(element)

        if(subMenu.classList[2] === "mm-mobile-menu-closed") {
            subMenu.classList.remove("mm-mobile-menu-closed")
        } else {
            subMenu.classList.add("mm-mobile-menu-closed")
        }
    }

    console.log("MMHeader called.");

    return(
        <header className="mm-page-header">

            <div className="mm-page-header-logo">
                <img id="page-icon" src={logo} alt="Streamical Icon"/>
                <h1 id="page-title">Music Manager</h1>
            </div>

            <nav className="mm-page-header-navigation">
                <a href="#" onClick={toggleMenu} id="mobile-menu-button"><i className="sfi sfi-menu sfi-inverted" id="menu-icon"/></a>

                <ul className="mm-menu" id="navigation-menu">
                    <li>
                        <div className="mm-navigation-quick-actions">
                            <i className="sfi sfi-plus sfi-inverted"/>
                            <i className="sfi sfi-chevron-down sfi-inverted"/>
                        </div>
                    </li>

                    <li>
                        <a href="#">
                            <div className="mm-user-info-container">
                                <img src={userIcon} alt="Avatar of Lea Gärtner" />
                                <i className="sfi sfi-chevron-down sfi-inverted"/>
                            </div>
                        </a>
                    </li>
                </ul>
            </nav>


        </header>
    );
}

export default MMHeader;
