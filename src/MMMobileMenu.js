import React from 'react';
import userIcon from './assets/img/fakeuser.jpg';

class MMMobileMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    toggleSubMenu() {

    }

    render() {
        return (
            <nav className={this.state.isToggleOn ? 'mm-mobile-menu mm-mobile-menu-open' : 'mm-mobile-menu mm-mobile-menu-closed'} id="mobile-menu">
                <ul className="mm-menu mm-mobile-menu-container">

                    <li className="mm-mobile-menu-item" id="user-info">
                        <a href="#">
                            <div className="mm-user-info-container">
                                <img src={userIcon} alt="Avatar of Lea Gärtner"/>
                                <h2>Lea Gärtner</h2>
                            </div>
                        </a>

                        <ul className="mm-menu mm-mobile-submenu mm-mobile-menu-closed">

                            <li className="mm-mobile-submenu-item">
                                <a href="#">Mein Profil bearbeiten</a>
                            </li>

                            <li className="mm-mobile-submenu-item">
                                <a href="#">Administration</a>
                            </li>

                            <li className="mm-mobile-submenu-item">
                                <a href="#">Abmelden</a>
                            </li>
                        </ul>
                    </li>

                    <li className="mm-mobile-menu-item" id="dashboard">
                        <a href="#">Dashboard</a>

                        <ul className="mm-menu mm-mobile-submenu mm-mobile-menu-closed">

                            <li className="mm-mobile-submenu-item">
                                <a href="#">Homepage</a>
                            </li>

                            <li className="mm-mobile-submenu-item">
                                <a href="#">Statistics</a>
                            </li>
                        </ul>

                    </li>

                    <li className="mm-mobile-menu-item" id="albums">
                        <a href="#">Albums</a>

                        <ul className="mm-menu mm-mobile-submenu mm-mobile-menu-closed">

                            <li className="mm-mobile-submenu-item">
                                <a href="#">View all</a>
                            </li>

                            <li className="mm-mobile-submenu-item">
                                <a href="#">Add new</a>
                            </li>
                        </ul>
                    </li>

                    <li className="mm-mobile-menu-item"  id="artists">
                        <a href="#">Artists</a>

                        <ul className="mm-menu mm-mobile-submenu mm-mobile-menu-closed">

                            <li className="mm-mobile-submenu-item">
                                <a href="#">View all</a>
                            </li>

                            <li className="mm-mobile-submenu-item">
                                <a href="#">Add new</a>
                            </li>
                        </ul>
                    </li>

                    <li className="mm-mobile-menu-item"  id="songs">
                        <a href="#">Songs</a>

                        <ul className="mm-menu mm-mobile-submenu mm-mobile-menu-closed">
                            <li className="mm-mobile-submenu-item">
                                <a href="#">View all</a>
                            </li>

                            <li className="mm-mobile-submenu-item">
                                <a href="#">Add new</a>
                            </li>
                        </ul>
                    </li>

                    <li className="mm-mobile-menu-item"  id="user">
                        <a href="#">User</a>

                        <ul className="mm-menu mm-mobile-submenu mm-mobile-menu-closed">
                            <li className="mm-mobile-submenu-item">
                                <a href="#">View all</a>
                            </li>

                            <li className="mm-mobile-submenu-item">
                                <a href="#">Add new</a>
                            </li>
                        </ul>
                    </li>

                </ul>

                <div id="mobile-menu-close">
                    <a id="mobile-menu-close-btn" href="#" onClick={this.toggleMenu}>
                        <i className="sfi sfi-x sfi-inverted"/>
                    </a>
                </div>

            </nav>
        )
    }
}

export default MMMobileMenu;
