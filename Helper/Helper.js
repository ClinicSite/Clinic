import React from 'react';
import styles from './Helper.module.scss';
import { AiOutlineSchedule } from 'react-icons/ai';
import { BiColor } from 'react-icons/bi';
import { SiWhatsapp } from 'react-icons/si';

const style = { color: "#0BAFA7", fontSize: "1.5rem" }
const style2 = {color: "rgb(55, 253, 55)",fontSize: "2rem"}
function Helper() {
    return (
        <div className={`container elementor-column-gap-default ${styles.helperMain}`}>
            <div className='row w-100'>
             <button className={`elementor-column col-12 col-md-3 elementor-top-column elementor-element ${styles.elementor}`}>
                    <div className={`elementor-widget-wrap elementor-element-populated `}>
                        <div className={`elementor-widget container-fluid`}>
                            <div className={`elementor-row d-flex`}>
                                <div className={`icon-box ${styles.iconBox}`}>

                                    <AiOutlineSchedule style={style} />

                                </div>
                                <div className='ml-2 mt-1'>
                                    <h2 className={`elementor-header ${styles.elementorText}`}>
                                        HIZLI RANDEVU
                                    </h2>
                                    <p className={`${styles.elementorText2}`}>Randevu talep edin.</p>
                                </div>
                            </div>

                        </div>
                    </div>  
                </button>
                <button className={`elementor-column col-12 col-md-3 elementor-top-column elementor-element ${styles.elementor}`}>
                    <div className={`elementor-widget-wrap elementor-element-populated `}>
                        <div className={`elementor-widget container-fluid`}>
                            <div className={`elementor-row d-flex`}>
                                <div className={`icon-box ${styles.iconBox}`}>

                                    <AiOutlineSchedule style={style} />

                                </div>
                                <div className='ml-2 mt-1'>
                                    <h2 className={`elementor-header ${styles.elementorText}`}>
                                       
                                       RÖNTGEN GÖNDERİN
                                        
                                    </h2>
                                    <p className={`${styles.elementorText2}`}>Tedavinizi Planlayalım.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </button>
                <button className={`elementor-column col-12 col-md-3 elementor-top-column elementor-element ${styles.elementor}`}>
                    <div className={`elementor-widget-wrap elementor-element-populated `}>
                        <div className={`elementor-widget container-fluid`}>
                            <div className={`elementor-row d-flex`}>
                                <div className={`icon-box ${styles.iconBox}`}>

                                    <AiOutlineSchedule style={style} />

                                </div>
                                <div className='ml-2'>
                                    <h2 className={`elementor-header ${styles.elementorText}`}>
                                        YURT DIŞI HASTA
                                    </h2>
                                    <p className={`${styles.elementorText2}`}>Hizmetlerimizi inceleyin.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </button>
                <button className={`elementor-column col-12 col-md-3 elementor-top-column elementor-element ${styles.elementor2}`}>
                    <div className={`container`}>
                        <div className='row d-flex'>
                            <div>
                                <div className={`elementor-iletisim ${styles.bilgiText}`}>
                                    <h5>Bilgi ve Randevu İçin</h5>
                                </div>
                                <div className={`${styles.telText}`}>
                                    <h3>0 543 528 83 64</h3>
                                </div>
                            </div>
                            <div className={`${styles.wpLogo}`} >
                                <div className={`${styles.wpLogo2}`}>
                                    <SiWhatsapp style={style2} />
                                </div>
                            </div>
                        </div>

                    </div>
                </button>

            </div>
        </div>
    )
}

export default Helper;