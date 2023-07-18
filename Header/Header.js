import React from 'react';
import styles from './Header.module.scss';
import { BsTelephoneInboundFill } from 'react-icons/bs';
import tr from '../../Assets/tr.svg';
import gb from '../../Assets/gb.svg';
import { BsFacebook } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';
import { MdHeight } from 'react-icons/md';
import { SiZenn } from 'react-icons/si';
import { RiHandSanitizerFill } from 'react-icons/ri';
import { Container,Navbar,Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {AiOutlineAlert, AiOutlineRight} from 'react-icons/ai'
import { useState, useEffect } from "react"

import NavDropdown from 'react-bootstrap/NavDropdown';




import { useNavigate } from 'react-router-dom';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import { FaArrowRight } from 'react-icons/fa';




function Header() {




    return (
        <div className={`container-fluid fixed-top ${styles.headerContainer}`}>
            <div className='row'>
                <div className={`col-4 ${styles.headerPhone}`}>
                    <button className=' btn d-flex'>
                        <div className={` mr-2 ${styles.phoneIcon}`}>
                            <BsTelephoneInboundFill />
                        </div>
                        <div className='mt-1'>
                            <h6>
                                <span className={styles.phoneStart}>0543 528 83 64</span>
                            </h6>
                        </div>
                    </button>
                </div>
                <div className={`col-4 ${styles.headerIcon}`}>
                    <a href="https://www.facebook.com/Microsoft/">
                    <BsFacebook /> </a>
                    <a href="https://www.instagram.com/microsoft/?ysclid=lk8m8qkfvp328070649">
                    <RiInstagramFill /></a>
                    <a href="https://shgmturizmdb.saglik.gov.tr/" className={styles.headerTrzm}>
                         <RiHandSanitizerFill />
                        <h6>SAĞLIK TURİZMİ</h6>
                    </a>

                </div>
                <div className={`col-4 ${styles.languageFlag}`}>
                    <div className="dropdown">

                        <a className={`btn dropdown-toggle bg-white ${styles.drdown}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={tr} className={styles.flags} />
                            Türkçe
                        </a>

                        <ul className="dropdown-menu">

                            <li>
                                <a className="btn dropdown-item" role='button' href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={gb} className={styles.flags} />
                                    English
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Header;
