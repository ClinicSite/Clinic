import React from 'react'
import styles from './boneGreft.scss';
import greft from '../../../Assets/greft.jpeg';


function BoneGreft() {
    return (
        <div className='container-fluid bg-light'>
            <div className={`container ${styles.treatmentContentContainer}`}>
                <h2 className={`text-center py-5 ${styles.treatmentLabel}`}>Greft & Kemik Tozu</h2>
                <div className='row'>
                <div className={`col-12 col-md-6 d-flex justify-content-center`}>
                    <img src={greft} className={`${styles.treatmentImg}`} />
                     <hr></hr>
                     <hr></hr>
                   


                </div>
                <div className={`col-12 col-md-6`}>
                    <h5 className={`py-2 ${styles.treatmentMainLabel}`}>Gülüşünüzle Fark Yaratın</h5>
                    <p className={`${styles.treatmentMainP}`}>
                    Her ne kadar vücudunuz normalde kendi kendine kemik büyütemezse de, yeni teknikler ve gelişmiş kemik aşılama teknolojisi 
                    kayıp çene kemiği dokusunun yeniden büyümesini sağlamak, dişinizin bağlantısını güçlendirmek ve 
                    periodontal hastalık sonucu oluşan kemik kaybı ceplerinin doldurulma olanağını sunar.
                    Ayrıca yeniden oluşan kemik üzerine bir implant konmasında imkan verir.
                    <br></br>
                    <br></br>
                    Kemik aşılamanın(dental greftin) pek çok faydası vardır. Kaybedilmiş kemiğin yerine geçer, 
                    kemik kaybında oluşan cepleri doldurur ve yeni kemik ve yumuşak dokunun büyümesini teşvik eder.
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

export default BoneGreft;