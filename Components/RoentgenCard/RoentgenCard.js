import React from 'react';
import styles from './RoentgenCard.module.scss';
import sendr from '../../Assets/sendr.png';
import Form from 'react-bootstrap/Form';

function RoentgenCard() {
  return (
    <div className={`container-fluid ${styles.rbigContainer}`} >
      <div className={`container ${styles.roentgenMain}`}>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <h2 className={`text-center align-items-center`}>RÖNTGEN GÖNDERİN</h2>
        <h5 className='text-center'>Elinizde mevcut ağız-çene görüntülerini bizimle paylaşın, en hızlı ve en ekonomik şekilde tedavinizi planlayalım.</h5>
        <div className={`row ${styles.roentgenContent}`}>
          <div className={`col-12 col-md-6 d-flex justify-content-start ${styles.rPhoto}`}>
            <img src={sendr} alt='...' />
          </div>
          <div className={`col-12 col-md-6`}>
            <div className="mr-3">
              <label for="formFile" className="form-label">Yüklemek İstediğiniz Dosyayı Seçin</label>
              <input className="form-control p-1" type="file" id="formFile" />
            </div>
            <div className="input-group mt-3">
              {/* <span className="input-group-text" id="basic-addon1"> Adınız </span> */}
              <input type="text" placeholder='Adınız' className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mt-3">
              {/* <span className="input-group-text" id="basic-addon1">Telefon</span> */}
              <input type="text" placeholder='Telefon Numarası' className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <Form.Group className={`mt-3 ${styles.formMsg}`} controlId="exampleForm.ControlTextarea1">
              <Form.Control placeholder='Bize iletmek istediklerinizi buraya yazabilirsiniz' className={`mr-3 ${styles.formCntrl2}`} as="textarea" rows={3} />
            </Form.Group>
          </div>
        </div>

      </div>
    </div>

  )
}

export default RoentgenCard;
