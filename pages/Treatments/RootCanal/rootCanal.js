import React from 'react'
import styles from './rootCanal.scss';
import  kanal from '../../../Assets/kanal.jpeg';


function RootCanal() {
    return (
        <div className='container-fluid bg-light'>
            <div className={`container ${styles.treatmentContentContainer}`}>
                <h2 className={`text-center py-5 ${styles.treatmentLabel}`}>Kanal Tedavisi</h2>
                <div className='row'>
                <div className={`col-12 col-md-6 d-flex justify-content-center`}>
                    <img src={kanal} />
                     <hr></hr>
                     <hr></hr>
                   


                </div>
                <div className={`col-12 col-md-6`}>
                    <h5 className={`py-2 ${styles.treatmentMainLabel}`}>Gülüşünüzle Fark Yaratın</h5>
                    <p className={`${styles.treatmentMainP}`}>
                    Endodonti tedavisi ya da gündelik dilde yaygın kullanımıyla kanal tedavisi; 
                    çürümüş ya da enfekte olmuş dişi kurtarmak amacıyla yapılan bir tedavi yöntemidir.
                    Her diş çürüğüne endodonti tedavisi uygulanmaz. Diş çürüğüne dolgu ile müdahalenin yetersiz kaldığı durumlarda, 
                    iltihaplanma varsa,diş çürüğü ilerlediyse, acılı ve ağrılıysa diş kanal tedavisi uygulanır.
                    <br></br>
                    Dişte meydana gelen çürümeler zamanında tedavi edilmezse çürük derinlere doğru ilerler ve dişte bulunan sinirlerin
                    iltihaplanmasına neden olur. Diş sinirlerinin iltihaplanması kişinin şiddetli diş ağrısı yaşamasına neden olabilir,
                    dişte kararma, sıcak ve soğuğa hassasiyet gibi sorunlar ortaya çıkabilir.
                    <br></br>
                    Dişlerin dış kısmında sert olan mine dokusu, iç kısmında ise diş kökü boyunca uzanan damar ve sinir paketinden oluşan bir boşluk yer alır. 
                    Dişe canlılık ve hayat veren dokular, dişin merkezindeki bu boşlukta yer alan ve pulpa adı verilen damar ve sinirlerdir.
                    Kanal tedavisi sırasında dişin sert dokusunun içindeki kök kanalı adı verilen doğal boşlukta bulunan yumuşak doku yani pulpa ile diş siniri çıkarılır,
                    dişin içi temizlenir ardından açılan boşluk doldurulur. 
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

export default RootCanal;