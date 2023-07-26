import React from 'react'
import styles from './MainContent.module.scss'

import { FaTooth } from 'react-icons/fa'
import hosg from '../../Assets/hosg.jpg'



function MainContent() {
    return (
        <div className={`container-fluid mt-5 ${styles.mainAna} `}>
            <div className={`container`}>
                <div className='row' >
                    <div className={`col-12 col-sm-6 ${styles.mainBox}`}>
                        <h1 className={styles.mainText}>Çalışkan Dent'e Hoş Geldiniz </h1>
                        <h6 className={styles.mainText2}><FaTooth /> Ekip olarak sağlıkla ve güvenle gülümsemeniz için, kalıcı ve ekonomik çözümlerle hizmetinizdeyiz.</h6>
                        <h6 className={styles.mainText2}><FaTooth /> Tedavi teknolojilerindeki gelişmeleri sürekli takip ederek en çağdaş malzemeler, son teknoloji cihazlar ile konforunuzu arttırmaya özen gösteriyoruz.</h6>
                        <h6 className={styles.mainText2}><FaTooth /> Implantoloji, endodonti(kanal tedavisi), zirkonyum, çene cerrahisi, bleacthing(diş beyazlatma),kompozit-estetik dolgu uygulama ve operasyonlarında alanında uzman hekimlerimiz ile dişlerinizin sağlığına ve estetiğine katkı sunuyoruz.</h6>
                        <h2 className={styles.mainText3}>30 + Yıllık Tecrübe, Gülüşünüze Yansısın</h2>
                    </div>
                    <div className={`col-12 col-sm-6  ${styles.mainFoto}`}>
                        <img
                            src={hosg}
                            alt="Sağlıklı gülüşler"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MainContent;

