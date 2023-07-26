import React from 'react'
import implant from '../../Assets/i1.jpeg'
import styles from './Slider.module.scss'
import bleatching from '../../Assets/bleatching2.jpg'
import zirkonyum from '../../Assets/zirkonyum3.jpg'
import plak from '../../Assets/splak1.jpg'
import smile from '../../Assets/gulslide.jpg'



function Slider() {
    return (

        <div id="carouselExampleCaptions" className={`carousel-slide ${styles.slider}`}>
            <div className="carousel-inner">
                <div className={`carousel-item ${styles.carouselItem}`} data-bs-interval="2000">
                    <img src={zirkonyum} className="d-block w-100 simg" alt="Zirkonyum diş uygulamaları" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className={`${styles.labels2}`}>DOĞAL ZİRKONYUM</h5>
                    </div>
                </div>
                <div className={`carousel-item ${styles.carouselItem}`} data-bs-interval="2000">
                    <img src={implant} className="d-block w-100 simg" alt="Dental implant uygulamaları" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className={`${styles.labels2}`}>DENTAL İMPLANT İLE GENÇLEŞİN</h5>
                    </div>
                </div>
                <div className={`carousel-item-active ${styles.carouselItem}`} data-bs-interval="2000">
                    <img src={smile} className={`d-block w-100 ${styles.carouselImg2}`} alt="Gülüş tasarım uygulamaları" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className={`${styles.labels}`}>GÜLÜŞÜNÜZÜ YENİDEN TASARLAYALIM</h5>
                    </div>
                </div>
                <div className={`carousel-item ${styles.carouselItem}`} data-bs-interval="2000">
                    <img src={bleatching} className="d-block w-100" alt="Diş beyazlatma uygulamaları" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className={`${styles.labels}`}>BLEACHİNG DİŞ BEYAZLATMA</h5>
                    </div>
                </div>
                <div className={`carousel-item ${styles.carouselItem}`} data-bs-interval="2000">
                    <img src={plak} className={`d-block w-100 ${styles.carouselImg}`} alt="Diş beyazlatma uygulamaları" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className={`${styles.labels2}`}>ŞEFFAF PLAKLAR</h5>
                    </div>
                </div>
            </div>
            <div className={` ${styles.carouselIndicators}`}>
                <ul>
                    <li className={`${styles.btnLi}`}><button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className={`active  ${styles.btnSlider}`} aria-current="true" aria-label="Slide 1">01</button></li>
                    <li className={`${styles.btnLi}`}><button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className={` ${styles.btnSlider}`} aria-label="Slide 2">02</button></li>
                    <li className={`${styles.btnLi}`}><button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className={` ${styles.btnSlider}`} aria-label="Slide 3">03</button></li>
                    <li className={`${styles.btnLi}`}><button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" className={` ${styles.btnSlider}`} aria-label="Slide 4">04</button></li>
                    <li className={`${styles.btnLi}`}><button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" className={` ${styles.btnSlider}`} aria-label="Slide 5">05</button></li>
                </ul>
                
            </div>

        </div>

    )
}

export default Slider;