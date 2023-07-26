import React from 'react'
import styles from './AboutOwner.module.scss'

function AboutOwner() {
    return (
        <div className={`container-fluid bg-white`}>
            <div className={`container ${styles.aboutGnl}`}>
                <div className={`row`}>
                    <div className={`col-12 text-center mt-5`}>
                        <h2>KURUCUMUZ HAKKINDA</h2>
                    </div>
                
                    
                        <div className={`col-12 col-lg-6 ${styles.aboutPhoto}`}>
                            BURAYA FOTO GELECEK
                        </div>
                        <div className={`col-12 col-lg-6 mt-3 ${styles.aboutMe}`}>
                            <p>
                                30 Yıldan fazladır aynı yerinde hizmet veren Çalışkan Dent, DT.Nurten Çalışkan tarafından 1990 yılında kurulmuştur. Bölgenin aktif çalışan ilk
                                diş hekimi olup, yıllar içinde binlerce memnun hasta tarafından tercih edilmiştir.</p>
                            <p>
                                1989 Yılında Marmara Üniversitesi Diş Hekimliği Fakültesi'nden mezun olup kısa süre Nişantaşı'nda bir klinikte çalıştıktan sonra,
                                kendi tedavi merkezini kurmuştur. Kendisine ÇAPA Diş Hekimliği fakültesinden uzmanlar, implant , kanal tedavisi , çene cerrahisi gibi alanlarda
                                destek vermektedir.
                            </p>
                            <p>
                                Günümüzde , kendisi ve uzman kadrosu ile tecrübesini, gülüşünüze ve ağız sağlığınıza yansıtmak adına hizmete devam etmektedir.
                            </p>
                        </div>
                    

                
                </div>
            </div>
        </div>

    )
}

export default AboutOwner;