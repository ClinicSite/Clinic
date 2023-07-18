import { Container,Navbar,Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {AiOutlineAlert} from 'react-icons/ai'
import styles from './Naav.module.scss';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState, useEffect } from "react"
import { BsTelephoneInboundFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import {FaArrowRight} from 'react-icons/fa';

const Naav = () => {

const navigate=useNavigate();

const [navbar, setNavbar] = useState(false)   //navbar scroll when active state

const changeBackground=()=>{
    console.log(window.scrollY)
    if(window.scrollY>=60){
        setNavbar(true)
    }else{
        setNavbar(false)
    }
 }
 useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })


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
            id: 3,
            path: "/contact"
        },
            
      
   ]
   {/* <NavDropdown.Item href="#treatments/1"></NavDropdown.Item>
              <NavDropdown.Item href="#treatments/2">Estetik Diş Hekimliği </NavDropdown.Item>
              <NavDropdown.Item href="#treatments/3"></NavDropdown.Item>
              <NavDropdown.Item href="#treatments/4">Ortodonti</NavDropdown.Item>
              <NavDropdown.Item href="#treatments/4">Pedodonti</NavDropdown.Item> */}
   const treatments = [
    {
        name: "İmplant Tedavisi",
        id: 1,
        path: "/implat-tedavisi"
    },
    {
        name: "Estetik Diş Hekimliği",
        id: 2,
        path: "/estetik-dis-hekimligi"
    },
    {
        name: "Ağız ve Çene Cerrahisi",
        id: 3,
        path: "/agiz-cene-cerrahisi"
    },
    {
        name: "Ortodonti",
        id: 4,
        path: "/ortodonti"
    },
    {
        name: "Pedodonti",
        id: 5,
        path: "/pedodonti"
    },
    
   ];
    return (
        <div>
            <Navbar expand="lg" className={navbar? "activeNavBar" :`${styles.navBar}` }>
                <Container>
                    <Navbar.Brand>
                        <NavLink to="/" className={`${styles.navLink} text-uppercase`}>
                            <h3>ÇALIŞKAN DENT</h3>
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScrooll" />
                    <Navbar.Collapse id="navbarScrooll">
                        <Nav className={`ml-auto my-2 my-lg-0 ${styles.navBarCustom}` }   
                            style={{ maxHeight: "100px" }}
                            navbarScrooll>
                                 {menus.map((menu)=> <NavLink
                                         key={menu.id}
                                         to={menu.path}
                                         className={`${styles.navLink} ${styles.menuLink} ` }>
                                        {menu.name}
                                    </NavLink> )    }
                                                           
                               <NavDropdown title="TEDAVİLER" className={`${styles.basicNavDropdown}`}>
                               {
                                treatments.map((menu) => (
                           
                                     <NavDropdown.Item to={menu.path} href={"#treatments"+menu.id}>{menu.name}</NavDropdown.Item>
                                ))
                            
                                }
                                </NavDropdown>

                                

                        <button class="btn btn-outline-primary w-45" type="button">RANDEVU AL <FaArrowRight /></button>
                       </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >    
    );
}

export default Naav;
