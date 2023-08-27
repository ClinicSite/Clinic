import React from 'react'
import styles from './porcelainLaminates.scss';
import  porselenLamine from '../../../Assets/lamina.jpg';


function PorcelainLaminates() {
    return (
        <div className='container-fluid bg-light'>
            <div className={`container ${styles.treatmentContentContainer}`}>
                <h2 className={`text-center py-5 ${styles.treatmentLabel}`}>Porselen Laminalar</h2>
                <div className='row'>
                <div className={`col-12 col-md-6 d-flex justify-content-center`}>
                    <img src={porselenLamine} className={`${styles.img}`}/>
                     <hr></hr>
                     <hr></hr>
                   


                </div>
                <div className={`col-12 col-md-6`}>
                    <h5 className={`py-2 ${styles.treatmentMainLabel}`}>Gülüşünüzle Fark Yaratın</h5>
                    <p className={`${styles.treatmentMainP}`}>
                    Porselen diş kaplaması dişlerin tüm yüzeyleri kesilmeden sadece ön yüzlerinin 0.3-0.7 mm inceltilerek
                    yapılan ve sağlam diş dokusunun minumum kaybedildiği yöntemdir. İnceltilen bu alana porselen diş laminalarının yapıştırılma işlemidir.
                    <br></br>
                    <br></br>
                    Porselen Laminalar sağlam, renkleri bozulmayan ve dayanıklı malzemelerden üretilirler.
                    <br></br>
                    <br></br>
                    Dişlerinizin doğal yapısı bozulmadan istediğiniz estetik özelliklere (renk, şekil v.b) sahip olması porselen lamina ile yapılabilmektedir.
                    Diş üzerinde ya hiçbir değişiklik yapılmaz ya da minimal bir düzeltme uygulanır. Diş üzerinden kaldırılan miktar 0,3-0,7 mm ile sınırlıdır. 
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

export default PorcelainLaminates;