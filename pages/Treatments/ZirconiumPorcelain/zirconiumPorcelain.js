import React from 'react'
import styles from './zirconiumPorcelain.scss';
import zirkonyum from '../../../Assets/zirkonyum2.png';


function ZirconiumPorcelain() {
    return (
        <div className='container-fluid bg-light'>
            <div className={`container ${styles.treatmentContentContainer}`}>
                <h2 className={`text-center py-5 ${styles.treatmentLabel}`}>Zirkonyum Porselen</h2>
                <div className='row'>
                <div className={`col-12 col-md-6 d-flex justify-content-center`}>
                    <img src={zirkonyum} />
                     <hr></hr>
                     <hr></hr>
                   


                </div>
                <div className={`col-12 col-md-6`}>
                    <h5 className={`py-2 ${styles.treatmentMainLabel}`}>Gülüşünüzle Fark Yaratın</h5>
                    <p className={`${styles.treatmentMainP}`}>
                    Daha doğal ve estetik bir görünüm sağladığı için zirkonyum kaplama son zamanlarda diş hekimleri tarafından çok fazla tercih edilmekte ve önerilmektedir.
                    Zirkonyum kaplama, adını yapıldığı malzemeden alır. Doğada bulunan  güçlü bir element olan zirkonyum şeffaf ve beyaz rengi sayesinde 
                    doğal dişlere çok yakın bir görüntü sağlar. Zirkonyum dişin en önemli avantajlarından biri diş etine zarar vermemesidir. 
                    Diş ve diş etine mükemmel uyum sağlayan zirkon kaplama, kompozit ve porselen kaplamalarda karşılaştığımız diş eti problemlerini ortadan kaldırır.
                    <br></br>
                    Zirkonyum diş,  bilgisayar desteği ile özel olarak tasarlanarak üretilir. 
                    Zirkonyum kaplama, her hastanın ağız ve diş ölçüleri alınarak özel olarak üretilmelidir. 
                    Bu gibi nedenlerden dolayı, diğer tür kaplamalara göre maliyeti biraz daha fazladır. 
                    Tedaviye başlamadan önce hastanın genel diş sağlığının iyi olması beklenir. Eğer dişlerde problem varsa, 
                    öncelikle bunlar tedavi edilmelidir. Çoğu hastamızda, zirkonyum kaplama aşamasına geçmeden önce diş çürüklerini tedavi etmekte ya da kanal tedavisi gibi işlemler uygulamaktayız.
                    <br></br>
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

export default ZirconiumPorcelain;