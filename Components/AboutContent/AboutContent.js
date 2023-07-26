import styles from './AboutContent.module.scss';
import React from 'react';
import smile from '../../Assets/gulus2.jpg';
import prof from '../../Assets/mainimg.jpg';

function AboutContent() {
    return (
        <div className='container-fluid bg-light'>
            <div className={`container ${styles.aboutContentContainer}`}>
                <h2 className={`text-center py-5 ${styles.aboutLabel}`}>Gülümsemeleri Yeniden İnşa Eden Merkez ;</h2>
                <div className='row'>
                <div className={`col-12 col-md-6 d-flex justify-content-center`}>
                    <img src={smile} />
                </div>
                <div className={`col-12 col-md-6`}>
                    <h5 className={`py-2 ${styles.aboutMainLabel}`}>Gülüşünüzle Fark Yaratın</h5>
                    <p className={`${styles.aboutMainP}`}>
                        Sağlıklı bir gülümseme, kendine güvenin kaynağıdır. Ancak, çeşitli nedenlerle gülümsememizi etkileyen diş problemleri yaşayabiliriz.
                        Neyse ki, modern diş klinikleri bu sorunları çözmek için donanımlı teknolojiler ve uzman diş hekimleri ile hizmet vermektedir.
                        Bu makalede, en son teknolojilerle donatılmış bir diş kliniği olan Çalışkan Dent'i tanıtacağız. Çalışkan Dent,
                        gülümsemenizi yeniden inşa etmek ve size sağlıklı bir ağız sağlamak için mükemmeliyet odaklı bir yaklaşım sunar.
                    </p>

                </div>
                </div>
                <br></br>
                <br></br>
                <hr></hr>
                <br></br>
                <br></br>
                
                <div className='row'>
                <div className={`col-12 col-md-6`}>
                    <h5 className={`py-3 ${styles.aboutMainLabel}`}>Konunun Uzmanından Hizmet Alın</h5>
                    <p className={`${styles.aboutMainP}`}>
                        Çalışkan Dent, alanında deneyimli ve uzman diş hekimlerinden oluşan bir ekip tarafından yönetilmektedir.
                        Bu uzmanlar, en son tedavi yöntemlerini takip ederek hastalarına en iyi hizmeti sunmaktadır. Merkezimizdeki diş hekimleri,
                        hastalarının ihtiyaçlarını anlamak ve onlara kişiye özel tedaviler sunmak için her zaman, zaman ayırır.Estetik ve sağlık açısından,
                        en verimli tedavi planlanır ve uygulanır.
                    </p>
                </div>
                <div className={`col-12 col-md-6 d-flex justify-content-center`}>
                    <img src={prof} />
                </div>
                </div>
                
            </div>

        </div>

    )
}

export default AboutContent;