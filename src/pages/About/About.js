import React from 'react'
import styles from'./About.module.scss';
import {FaTooth} from 'react-icons/fa'
import hosg from '../../Assets/hosg.jpg'

const About=() => {
  return (
    <div className='container-fluid mt-5 d-flex' style={{height: '750px', backgroundColor: 'rgb(225, 250, 250)'}}>

    <img
        style={{marginLeft: '50px', width: 'max'}}
        src={hosg}
        alt="Sağlıklı gülüşler"
    />
    <div className={styles.mainBox}>
    <h1 className={styles.mainText}>Çalışkan Dental'e Hoş Geldiniz!</h1>
    <h6 className={styles.mainText2}>34 yıllık tecrubemiz ve uzman kadromuz ile dişinizin sağlığı ve estetiği için yanınızdayız;</h6>
    <h6 className={styles.mainText2}><FaTooth /> Çalışkan Dent olarak sağlıkla ve güvenle gülümsemeniz için, kalıcı ve ekonomik çözümlerle hizmetinizdeyiz.</h6>
    <h6 className={styles.mainText2}><FaTooth /> Tedavi teknolojilerindeki gelişmeleri sürekli takip ederek en çağdaş malzemeler, en yeni cihazlar ile konforunuzu arttırmaya özen gösteriyoruz.</h6>
    <h6 className={styles.mainText2}><FaTooth /> Implantoloji, endodonti(kanal tedavisi), zirkonyum, çene cerrahisi, bleacthing(diş beyazlatma),kompozit-estetik dolgu uygulama ve operasyonlarında alanında uzman hekimlerimiz ile dişlerinizin sağlığına ve estetiğine katkı sunuyoruz.</h6>
    </div>
    

</div>
  )
}

export default About;