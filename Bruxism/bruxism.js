import React from 'react'
import styles from './bruxism.scss';
import plak from '../../../Assets/plak.jpeg';


function Bruxism() {
    return (
        <div className='container-fluid bg-light'>
            <div className={`container ${styles.treatmentContentContainer}`}>
                <h2 className={`text-center py-5 ${styles.treatmentLabel}`}>Bruksizm-Şeffaf Plak</h2>
                <div className='row'>
                <div className={`col-12 col-md-6 d-flex justify-content-center`}>
                    <img src={plak} className={`${styles.img}`}/>
                     <hr></hr>
                     <hr></hr>
                   


                </div>
                <div className={`col-12 col-md-6`}>
                    <h5 className={`py-2 ${styles.treatmentMainLabel}`}>Gülüşünüzle Fark Yaratın</h5>
                    <p className={`${styles.treatmentMainP}`}>
                    Bruksizm (diş sıkma) bireyin dişlerini sıktığı, gıcırdattığı veya birbirine bastırdığı bir durumdur. 
                    Bruksizmi (diş gıcırdatma) olan bireyler uyanıkken dişleri bilinçsizce sıkabilir veya uyku sırasında dişlerini sıkabilir veya gıcırdatabilir. 
                    <br></br>
                    <br></br>
                    Uyku bruksizm (diş gıcırdatma), normalde uyku ile ilişkili bir hareket bozukluğu olarak kabul edilir. 
                    Uyku sırasında dişlerini sıkan veya gıcırdatan bireylerin, horlama ve nefes almada duraklamalar yani uyku apnesi gibi 
                    başka uyku bozukluklarına sahip olma olasılığının daha yüksek olduğu gözlemlenmiştir.
                    <br></br>
                    <br></br>
                    Hafif bruksizm vakaları herhangi bir tedavi gerektirmeyebilir. Bununla birlikte, bazı bireylerde bruksizm, çene bozukluklarına,
                    baş ağrılarına, hasarlı dişlere ve diğer sorunlara yol açacak kadar sık ve şiddetli olabilir.
                    </p>

                    Telsiz ortodonti (şeffaf plak tedavisi) tedavisi, klasik metal veya porselen teller kullanılmadan, 
                    3 boyutlu yazıcılarla kişiye özel hazırlanan şeffaf plaklar kullanılarak yapılan ortodontik tedavidir.

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

export default Bruxism;