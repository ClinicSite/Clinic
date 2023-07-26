import React from 'react'
import styles from './implant.scss';
import implant from '../../../Assets/implant.jpg';

function Implant() {
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
                    İmplant çene kemiğine yerleştirilen ve protezlere destek için yapılan yapay diş kökleridir. 
                    Eksik dişlerin yerine yapılan, uzun ömürlü ve yaşam boyu kullanılabilecek  bu yapay köklerin 
                    üzerine yapılan sabit ya da hareketli protezler hastanın çiğneme  fonksiyonunu ve estetiğini yerine getirir.
                    
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

export default Implant;