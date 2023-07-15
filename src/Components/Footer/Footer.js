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
                
                    <div className='container-fluid d-flex'>
                      <div className='row'>
                        <div className='col-3'>
                            <div className={styles.lokasyon}>
                                <h4 className='mt-5 mb-3'>BİZE ULAŞIN</h4>
                                <button class="btn btn-outline-secondary w-75 mb-3" type="button"><BsTelephoneInboundFill />0212 503 00 05</button>
                                <button class="btn btn-outline-secondary w-75 mb-3" type="button"><SlCalender />Online Randevu</button>
                                <button class="btn btn-outline-secondary w-75 mb-3" type="button">caliskandent@gmail.com</button>
                                <button class="btn btn-outline-secondary w-75 mb-3" type="button">
                                    <BsFacebook />
                                    <RiInstagramFill />
                                </button>
                            </div>
                        </div>
                        <div className='col-3 justify-content-center'>
                            <div className={styles.lokasyon}>
                                <h4 className='mt-5 mb-2'>NASIL GİDİLİR?</h4>
                                <div class="accordion ml-5" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                            <button class="btn btn-outline-secondary w-75 d-flex justify-content-between mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <span>Adres</span>
                                                <i><MdArrowDropDownCircle /></i>
                                            </button>

                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div class="accordion-body w-75">
                                                <strong>Fevzi Çakmak Mah. Zile Sk. No:2/2 Bahçelievler/İST.</strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingTwo">
                                            <button class="btn btn-outline-secondary w-75 d-flex justify-content-between mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                <span>Metro</span>
                                                <i><MdArrowDropDownCircle /></i>
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div class="accordion-body w-75">
                                                <strong>Yenikapı-AHL metrosu ile Yenibosna-Metro durağında inerek kolayca ulaşabilirsiniz</strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingThree">
                                            <button class="btn btn-outline-secondary w-75 justify-content-between d-flex mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                <span>Metrobüs</span>
                                                <i><MdArrowDropDownCircle /></i>
                                            </button>
                                        </h2>
                                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div class="accordion-body w-75">
                                                <strong>Metrobüs Yenibosna durağında indikten sonra 300m. yürüme mesafesindeyiz</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className={styles.lokasyon}>
                                <h4 className='mt-5 mb-3 '>LOKASYONUMUZ</h4>
                                <a href="https://www.google.com/maps/place/Di%C5%9F+Hekimi+Nurten+%C3%87al%C4%B1%C5%9Fkan/@40.9977269,28.8344996,15z/data=!4m6!3m5!1s0x14caa49fc75ad0a1:0x1fcabfa9d9c8959b!8m2!3d40.9977269!4d28.8344996!16s%2Fg%2F11c7s_0_y6?entry=ttu" className='mr-5'><img src={Konum} alt="Klinik Konum" /></a>
                            </div>
                        </div>
                        <div className='col-3'>

                            <h4 className='mt-5'>SİZİ ARAYALIM</h4>
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Ad / Soyad</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Telefon Numarası</label>
                                    <input type="telephone" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="mb-3 form-check d-flex">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1"><strong>Gizlilik koşullarını okudum kabul ediyorum.</strong> Formda girmiş olduğunuz bilgiler sadece sizlere geri dönüş sağlayabilmek ve randevunuzun oluşturulması için kullanılacaktır.</label>
                                </div>
                                <button type="submit" class="btn btn-outline-secondary">Gönder</button>
                            </form>
                        </div>
                    </div>

                </div>
                <div className='container'>
                <div className='row justify-content-center mt-5'>
                    <div className={styles.tecrube}>
                        34 Yıllık Tecrubemiz İle Dişlerinizin Yanındayız...
                    </div>
                </div>
                </div>
            </div>
    )
}
export default Footer;