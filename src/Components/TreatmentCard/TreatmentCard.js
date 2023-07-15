import React from 'react'
import styles from './TreatmentCard.module.scss'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import implant from '../../Assets/implanthome.jpg';
import bleactching from '../../Assets/gulus2.jpg';
import kanal from '../../Assets/kanal.jpeg';
import lamina from '../../Assets/lamina.jpg';
import zirkonyum from '../../Assets/zirkonyum.png';
import dolgu from '../../Assets/dolgu5.jpg';
import gomuk from '../../Assets/gomuk.jpg';
import greft from '../../Assets/greft.png';


function TreatmentCard() {
    return (
        <>
            <div className={styles.tedaviBaslik}>TEDAVİLER</div>
            <div className={styles.mainTedavi}>
                <div className='container d-flex mt-5'>
                    <Card style={{ width: '22rem', boxShadow: '0px 0px 5px black' }}>
                        <Card.Img variant="top" src={implant} />
                        <Card.Body>
                            <Card.Title >Dental İmplant</Card.Title>
                            <Card.Text>
                                Diş implantları, bir diş veya birkaç diş eksikliği olan hastalarda kullanılabilir. İmplantlar, çeşitli diş problemleri olan kişilere uzun vadeli bir çözüm sunar ve doğru bir şekilde bakım sağlandığında uzun ömürlü olur.
                            </Card.Text>
                            <Button variant="primary">Detaylı Bilgi</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '22rem', marginLeft: '20px', boxShadow: '0px 0px 5px black' }}>
                        <Card.Img variant="top" src={zirkonyum} />
                        <Card.Body>
                            <Card.Title >Zirkonyum Porselen</Card.Title>
                            <Card.Text>
                                Zirkonyum porselen, diş kaplamaları ve protezler için kullanılan bir porselen türüdür. Zirkonyum oksit adı verilen beyaz renkte bir seramik malzemeden yapılmaktadır. Diş estetiği ve restorasyonunda kullanılan bu malzeme, dayanıklılığı ve doğal görünümü nedeniyle popüler bir seçenektir.
                            </Card.Text>
                            <Button variant="primary">Detaylı Bilgi</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '22rem', marginLeft: '20px', boxShadow: '0px 0px 5px black' }}>
                        <Card.Img variant="top" src={kanal} />
                        <Card.Body>
                            <Card.Title >Kanal Tedavisi</Card.Title>
                            <Card.Text>
                                Kanal tedavisi, dişin iç kısmında bulunan pulp adı verilen yumuşak doku ve sinirlerin enfeksiyon veya hasar durumunda çıkarılarak, boşaltılan kanalın temizlenmesi, şekillendirilmesi ve doldurulması işlemidir.
                            </Card.Text>
                            <Button variant="primary">Detaylı Bilgi</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '22rem', marginLeft: '20px', boxShadow: '0px 0px 5px black' }}>
                        <Card.Img variant="top" src={bleactching} />
                        <Card.Body>
                            <Card.Title >Bleaching</Card.Title>
                            <Card.Text>
                                Diş beyazlatma, dişlerin renk tonunu açmak veya beyazlatmak için uygulanan bir kozmetik dental prosedürdür.Uzun süreli kalıcı beyazlık sağlar.
                            </Card.Text>
                            <Button variant="primary">Detaylı Bilgi</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className='container d-flex mt-5'>
                    <Card style={{ width: '22rem', boxShadow: '0px 0px 10px black' }}>
                        <Card.Img variant="top" src={lamina} />
                        <Card.Body>
                            <Card.Title >Porselen Laminalar</Card.Title>
                            <Card.Text>
                                Porselen laminalar, dişlerin ön yüzeyine uygulanan ince porselen kabuklardır. Dişlerin şeklini, boyutunu, rengini veya hatta hafif hizalanmasını değiştirmek için kullanılırlar. Porselen laminalar, estetik bir gülümseme elde etmek ve dişlerdeki kusurları gizlemek için popüler bir seçenektir.
                            </Card.Text>
                            <Button variant="primary">Detaylı Bilgi</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '22rem', marginLeft: '20px', boxShadow: '0px 0px 5px black' }}>
                        <Card.Img variant="top" src={gomuk} />
                        <Card.Body>
                            <Card.Title >Çene Cerrahisi</Card.Title>
                            <Card.Text>
                                Çene cerrahisi, çene ve yüz bölgesindeki estetik veya sağlık sorunlarını tedavi etmek için yapılan cerrahi müdahaleleri kapsayan bir tıbbi disiplindir. Bu cerrahi prosedürler genellikle maksillofasiyal cerrahi veya oral ve maksillofasiyal cerrahi olarak da adlandırılır.
                            </Card.Text>
                            <Button variant="primary">Detaylı Bilgi</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '22rem', marginLeft: '20px', boxShadow: '0px 0px 5px black' }}>
                        <Card.Img variant="top" src={dolgu} />
                        <Card.Body>
                            <Card.Title >Estetik Dolgular</Card.Title>
                            <Card.Text>
                                Estetik diş dolguları, dişlerdeki çürükleri veya kırıkları onarmak ve diş rengini düzeltmek için kullanılan dolgu malzemeleridir. Geleneksel dolgulara göre daha estetik bir görünüm sağlarlar, çünkü diş rengiyle uyumlu olarak seçilen kompozit veya porselen malzemeler kullanılır.
                            </Card.Text>
                            <Button variant="primary">Detaylı Bilgi</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '22rem', marginLeft: '20px', boxShadow: '0px 0px 5px black' }}>
                        <Card.Img variant="top" src={greft} />
                        <Card.Body>
                            <Card.Title >Greft & Kemik Tozu Uygulaması</Card.Title>
                            <Card.Text>
                            Greft ve kemik tozu uygulaması, dental implant veya periodontal (dişeti) tedavi gibi bazı diş hekimliği prosedürlerinde kullanılan bir tedavi yöntemidir. Bu yöntem, eksik kemik dokusunu onarmak veya yeniden oluşturmak için kullanılır.
                            </Card.Text>
                            <Button variant="primary">Detaylı Bilgi</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </>
    )
}
export default TreatmentCard;
