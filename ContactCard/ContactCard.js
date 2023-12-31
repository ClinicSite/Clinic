import React from 'react';
import main2 from '../../Assets/phonetooth.jpg';
import styles from './ContactCard.module.scss';


function ContactCard() {
  return (
    <div className={`container-fluid ${styles.contactContainer}`} >
          <br>
        </br>
        <br>
        </br>
        <br>
        </br>
      <div className={`container ${styles.contactMain}`}>
        
      
        <h2 className={`text-center align-items-center`}>BİZE ULAŞIN</h2>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <div className={`row ${styles.contactContent}`}>
          <div className={`col-12 col-md-6 d-flex justify-content-start ${styles.rPhoto}`}>
            <img src={main2} />
          </div>
          <div className={`col-12 col-md-2`}>
            <button className={`btn btn-primary ${styles.btnContact}`}>TELEFON ET</button>
            <br></br>
            <br></br>
            <button className={`btn btn-primary ${styles.btnContact}`}>WHATSAPP İLETİŞİM HATTI</button>
            <br></br>
            <br></br>
            <button className={`btn btn-primary ${styles.btnContact}`}>YOL TARİFİ</button>
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default ContactCard;
