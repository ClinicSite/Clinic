import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './Naav.module.scss';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState} from "react"
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import logo from '../../Assets/logoCanva6.png';

const Naav = () => {

    const navigate = useNavigate();

    const [navbar] = useState(false)   //navbar scroll when active state

    // const changeBackground = () => {
    //     //console.log(window.scrollY)
    //     if (window.scrollY >= 60) {  
    //         setNavbar(true)
    //     } else {
    //         setNavbar(false)
    //     }
    // }
    // useEffect(() => {
    //     changeBackground()
    //     // adding the event when scroll change background
    //     window.addEventListener("scroll", changeBackground)
    // })


    const menus = [
        {
            name: "ANA SAYFA",
            id: 1,
            path: "/"
        },
        {
            name: "HAKKIMIZDA",
            id: 2,
            path: "/about"
        },
        {
            name: "İLETİŞİM",
            id: 3,
            path: "/contact"
        },
        {
            name: "ÖNCE-SONRA",
            id: 4,
            path: "/beforeafter"
        },


    ]
    
    const treatments = [
        {
            name: "Dental İmplant",
            id: 1,
            path: "/dental-implant"
        },
        {
            name: "Zirkonyum-Porselen",
            id: 2,
            path: "/zirkonyum-porselen"
        },
        {
            name: "Kanal Tedavisi",
            id: 3,
            path: "/kanal-tedavisi"
        },
        {
            name: "Estetik Dolgular",
            id: 4,
            path: "/estetik-dolgular"
        },
        {
            name: "Çene Cerrahisi",
            id: 5,
            path: "/cene-cerrahisi"
        },
        {
            name: "Porselen Laminalar",
            id: 6,
            path: "/porselen-laminalar"
        },
        {
            name: "Bruksizm-Şeffaf Plak",
            id: 7,
            path: "/seffaf-plak"
        },
        {
            name: "Greft&Kemik Tozu",
            id: 8,
            path: "/greft-kemiktozu"
        },

    ];
    return (
        <div>
            <Navbar expand="lg" className={navbar ? "activeNavBar" : `${styles.navBar}`}>
                <Container>
                    <Navbar.Brand>
                        <NavLink to="/" className={`${styles.navLink} text-uppercase`}>
                            <img src={logo} alt='Çalışkan Dent Logo' height={'55px'} />
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle className='order-5' aria-controls="navbarScrooll" />
                    <Navbar.Collapse id="navbarScrooll">
                        <Nav className={`ml-auto my-2 my-lg-0 ${styles.navBarCustom}`}
                            style={{ maxHeight: "50px" }}>
                            {menus.map((menu) => <NavLink
                                key={menu.id}
                                to={menu.path}
                                className={`${styles.navLink} ${styles.menuLink} `}>
                                {menu.name}
                            </NavLink>)}

                            <NavDropdown title="TEDAVİLER" className={`${styles.basicNavDropdown}`}>
                                {
                                    treatments.map((menu) => (

                                        <NavDropdown.Item key={menu.id} to={menu.path} href={menu.path}>{menu.name}</NavDropdown.Item>
                                    ))

                                }
                            </NavDropdown>







                        </Nav>

                    </Navbar.Collapse>
                    <div className={`order-1 ${styles.navBtnDiv}`}>
                        <button onClick={() => navigate('/appointment')} className={`btn w-45 ${styles.btnNav}`} type="button">RANDEVU AL <FaArrowRight /></button>

                        <button onClick={() => navigate('/sendroentgen')} className={`btn w-45 ${styles.btnNav2}`} type="button">RÖNTGEN GÖNDER <FaArrowRight /></button>

                    </div>
                </Container>
            </Navbar>
        </div >
    );
}

export default Naav;

