import React from 'react';
import GridLayout from 'react-grid-layout';
import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';



class MMContent extends React.Component {

    render() {

        const layout = [
            {i: 'a', x: 0, y: 0, w: 1, h: 2, static: false},
            {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
            {i: 'c', x: 4, y: 0, w: 1, h: 2}
        ];

        return (
            <main className="mm-page-content">
                <nav className="mm-page-content-sidebar">
                    <ul className="mm-menu mm-page-content-navigation">
                        <li className="mm-page-content-navigation-item" onClick='toggleSubMenu("dashboard")'
                            id="dashboard">
                            <a href="#">
                                <i className="sfi sfi-inverted sfi-home"/>
                                <span>Dashboard</span>
                            </a>

                            <ul className="mm-menu mm-mobile-submenu mm-mobile-menu-closed">

                                <li className="mm-mobile-submenu-item">
                                    <a href="#">Homepage</a>
                                </li>

                                <li className="mm-mobile-submenu-item">
                                    <a href="#">Statistics</a>
                                </li>
                            </ul>

                        </li>

                        <li className="mm-page-content-navigation-item" onClick='toggleSubMenu("albums")' id="albums">
                            <a href="#">
                                <i className="sfi sfi-inverted sfi-disc"/>
                                <span>Albums</span>
                            </a>

                            <ul className="mm-menu mm-mobile-submenu mm-mobile-menu-closed">

                                <li className="mm-mobile-submenu-item">
                                    <a href="#">View all</a>
                                </li>

                                <li className="mm-mobile-submenu-item">
                                    <a href="#">Add new</a>
                                </li>
                            </ul>
                        </li>

                        <li className="mm-page-content-navigation-item" onClick='toggleSubMenu("artists")' id="artists">
                            <a href="#">
                                <i className="sfi sfi-inverted sfi-users"/>
                                <span>Artists</span>
                            </a>

                            <ul className="mm-menu mm-mobile-submenu mm-mobile-menu-closed">

                                <li className="mm-mobile-submenu-item">
                                    <a href="#">View all</a>
                                </li>

                                <li className="mm-mobile-submenu-item">
                                    <a href="#">Add new</a>
                                </li>
                            </ul>
                        </li>

                        <li className="mm-page-content-navigation-item" onClick='toggleSubMenu("songs")' id="songs">
                            <a href="#">
                                <i className="sfi sfi-inverted sfi-mic"/>
                                <span>Songs</span>
                            </a>

                            <ul className="mm-menu mm-mobile-submenu mm-mobile-menu-closed">
                                <li className="mm-mobile-submenu-item">
                                    <a href="#">View all</a>
                                </li>

                                <li className="mm-mobile-submenu-item">
                                    <a href="#">Add new</a>
                                </li>
                            </ul>
                        </li>

                        <li className="mm-page-content-navigation-item" onClick='toggleSubMenu("user")' id="user">
                            <a href="#">
                                <i className="sfi sfi-inverted sfi-users"/>
                                <span>User</span>
                            </a>

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
                </nav>

                <div className="mm-page-main-content">

                    <ResponsiveGridLayout className="layout" layouts={layout}
                                          breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
                                          cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}>
                        <div key="1">1</div>
                        <div key="2">2</div>
                        <div key="3">3</div>
                    </ResponsiveGridLayout>

                    <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
                        <div className="mm-page-widget" key="a">
                            <h2>Lorem Ipsum</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt
                                ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                                duo
                                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                                dolor
                                sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                                et
                                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                                ipsum dolor sit amet.
                            </p>
                        </div>
                        <div className="mm-page-widget" key="b">
                            <h2>Lorem Ipsum</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt
                                ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                                duo
                                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                                dolor
                                sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                                et
                                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                                ipsum dolor sit amet.
                            </p>
                        </div>
                        <div className="mm-page-widget" key="c">
                            <h2>Lorem Ipsum</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt
                                ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                                duo
                                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                                dolor
                                sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                                et
                                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                                ipsum dolor sit amet.
                            </p>
                        </div>
                    </GridLayout>

                </div>
            </main>
        );
    }
}

export default MMContent;
