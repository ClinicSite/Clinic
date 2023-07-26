import React from 'react'
import styles from './aestheticBonding.scss';
import implant from '../../../Assets/implant.jpg';

function AestheticBonding() {
    return (
        <div className='container-fluid bg-light'>
            <div className={`container ${styles.treatmentContentContainer}`}>
                <h2 className={`text-center py-5 ${styles.treatmentLabel}`}>İmplant Tedavisi</h2>
                <div className='row'>
                <div className={`col-12 col-md-6 d-flex justify-content-center`}>
                    <img src={implant} />
                </div>
                <div className={`col-12 col-md-6`}>
                    <h5 className={`py-2 ${styles.treatmentMainLabel}`}>Gülüşünüzle Fark Yaratın</h5>
                    <p className={`${styles.treatmentMainP}`}>
                    Güzel ve estetik bir gülümsemeye sahip olmak herkes tarafından arzu edilen bir durumdur. 
                    Bunun doğal bir sonucu olarak modern diş hekimliği, bireylerin gülümsemelerinin estetik olarak iyileşmesine odaklanarak 
                    bunun sağlanabilmesi için karmaşık cerrahi prosedürlere ihtiyaç duyulmayan birçok farklı seçenek sunar.
                    
                    Diş dolguları günümüzde en sık uygulanan diş hekimliği prosedürlerinin başında gelir. 
                    Dişlerin sağlığının ve estetik görünümünün iyileştirilmesini sağlayan rutin işlemlerden biri olan 
                    diş dolguları uzun vadede birçok diş probleminden kaçınmayı sağlar. 

                    Modern diş hekimliği diş dolguları şeklinde mükemmel çözümler sunmakta olup estetik dolgu uygulaması bunlardan biridir. 
                    Estetik dolgular hayallerindeki gülümsemeye kavuşmak isteyen kişiler için en sık uygulanan estetik diş hekimliği prosedürleri arasında yer alır.
                    </p>

                </div>
                </div>
                <br></br>
                <br></br>
                <hr></hr>
                <br></br>
                <br></br>
                
            </div>

        </div>

    )
}

export default AestheticBonding;