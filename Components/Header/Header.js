import React from 'react';
import styles from './Header.module.scss';
import { BsTelephoneInboundFill } from 'react-icons/bs';
import tr from '../../Assets/tr.svg';
import gb from '../../Assets/gb.svg';
import { BsFacebook } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';
import { RiHandSanitizerFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';


function Header() {

    const navigateHeader = useNavigate();


    return (
        <div className={`container-fluid fixed-top ${styles.headerContainer}`}>
            <div className='row'>
                <div className={`col-4 ${styles.headerPhone}`}>
                    <button className={`btn d-flex ${styles.phoneBtn}`}>
                        <div className={` ${styles.phoneIcon}`}>
                            <BsTelephoneInboundFill />
                        </div>
                        <div className={styles.headerPhone2}>
                            <h6>
                                <span className={styles.phoneStart}>0543 528 83 64</span>
                            </h6>
                        </div>
                    </button>
                </div>
                <div className={`col-4  ${styles.headerIcon}`}>
                    <a className={styles.aIcon} href="https://www.facebook.com/Microsoft/">
                    <BsFacebook /> </a>
                    <a className={styles.aIcon2} href="https://www.instagram.com/microsoft/?ysclid=lk8m8qkfvp328070649">
                    <RiInstagramFill /></a>
                    <button onClick={()=> navigateHeader ('/healthtourism')} type='button' className={`btn btn-sm text-center ${styles.headerTrzm}`}>
                         <RiHandSanitizerFill />
                        <h5 className={`text-center ${styles.headerTourismLabel}`}>SAĞLIK TURİZMİ</h5>
                    </button>

                </div>
                <div className={`col-4 ${styles.languageFlag}`}>
                    <div className="dropdown">

                        <a className={`btn dropdown-toggle bg-white ${styles.drdown}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={gb} className={styles.flags} />
                            <span className={styles.langText}>English</span>
                        </a>

                        <ul className="dropdown-menu">

                            <li>
                                <a className={`btn dropdown-item `} role='button' href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={tr} className={styles.flags} />
                                    <span>Türkçe</span>
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