import React from 'react';
import styles from './Footer.module.scss';
import { BsTelephoneInboundFill } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';
import AccordionItem from '../Accordion/AccordionItem';
import { MdArrowDropDownCircle } from 'react-icons/md';
import Konum from './Konum.png';
import { SlCalender } from 'react-icons/sl';



function Footer() {
    return (

        <div className={styles.footer}>

            <div className='container-fluid d-flex align-items-center m-0 p-0'>
                <div className='row m-0'>
                    <div className='col-12 col-md-3'>
                        <div className={styles.lokasyon}>
                            <h4 className={`pt-3 pr-5 ${styles.bizeUlasin}`}>BİZE ULAŞIN</h4>
                            <button className={`btn btn-outline-secondary w-75 mb-3 d-flex justify-content-center ${styles.btnBizeUlasin} `} type="button"><BsTelephoneInboundFill />0212 503 00 05</button>
                            <button className={`btn btn-outline-secondary w-75 mb-3 d-flex justify-content-center ${styles.btnBizeUlasin} `} type="button"><SlCalender />Online Randevu</button>
                            <button className={`btn btn-outline-secondary w-75 mb-3 d-flex justify-content-center ${styles.btnBizeUlasin} `} type="button">caliskandent@gmail.com</button>
                            <button className={`btn btn-outline-secondary w-75 mb-3 d-flex justify-content-center ${styles.btnBizeUlasin} `} type="button">
                                <BsFacebook />
                                <RiInstagramFill />
                            </button>
                        </div>
                    </div>
                    <div className='col-12 col-md-3 justify-content-center'>
                        <div className={styles.lokasyon2}>
                            <h4 className='pt-3 mb-2'>NASIL GİDİLİR?</h4>
                            <div className={`accordion ${styles.accFooter}`} id="accordionExample">
                                <div className={`accordion-item  ${styles.accFooter}`}>
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className={`btn btn-outline-secondary justify-content-between d-flex mt-3 ${styles.btnLok}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <span>Adres</span>
                                            <i><MdArrowDropDownCircle /></i>
                                        </button>

                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body w-75">
                                            <strong>Fevzi Çakmak Mah. Zile Sk. No:2/2 Bahçelievler/İST.</strong>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className={`btn btn-outline-secondary justify-content-between d-flex mt-3 ${styles.btnLok}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <span>Metro</span>
                                            <i><MdArrowDropDownCircle /></i>
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body w-75">
                                            <strong>Yenikapı-AHL metrosu ile Yenibosna-Metro durağında inerek kolayca ulaşabilirsiniz</strong>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className={`btn btn-outline-secondary justify-content-between d-flex mt-3 ${styles.btnLok}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <span>Metrobüs</span>
                                            <i><MdArrowDropDownCircle /></i>
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body w-75">
                                            <strong>Metrobüs Yenibosna durağında indikten sonra 300m. yürüme mesafesindeyiz</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-3'>
                        <div className={styles.lokasyon}>
                            <h4 className='mt-3  '>LOKASYONUMUZ</h4>
                            <a className='d-flex justify-content-center' href="https://www.google.com/maps/place/Di%C5%9F+Hekimi+Nurten+%C3%87al%C4%B1%C5%9Fkan/@40.9977269,28.8344996,15z/data=!4m6!3m5!1s0x14caa49fc75ad0a1:0x1fcabfa9d9c8959b!8m2!3d40.9977269!4d28.8344996!16s%2Fg%2F11c7s_0_y6?entry=ttu" ><img src={Konum} alt="Klinik Konum" /></a>
                        </div>
                    </div>
                    <div className='col-12 col-md-3'>

                        <h4 className='mt-3'>SİZİ ARAYALIM</h4>
                        <form>
                            <div className="">
                                <label htmlFor="exampleInputEmail1" className="form-label">Ad / Soyad</label>
                                <input type="text" className={`form-control ${styles.footerInput}`} id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Telefon Numarası</label>
                                <input type="telephone" className={`form-control ${styles.footerInput}`} id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1"><strong>Gizlilik koşullarını okudum kabul ediyorum.</strong></label>
                                <p className={styles.formGz}>
                                    Formda girmiş olduğunuz bilgiler sadece sizlere geri dönüş sağlayabilmek ve randevunuzun oluşturulması için kullanılacaktır.
                                </p>
                            </div>
                            <button type="submit" className="btn btn-outline-secondary">Gönder</button>
                        </form>
                    </div>
                </div>

            </div>
            <div className='container'>
                <div className='row justify-content-center mt-5'>
                    <div className={styles.tecrube}>
                        <h4>
                            34 Yıllık Tecrübemiz İle Dişlerinizin Yanındayız...
                        </h4>

                        <h6>Web Tasarım : 0543 528 83 64</h6>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Footer;