import React from 'react'
import styles from './TreatmentCard.module.scss'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import implant from '../../Assets/implanthome.jpg';
import kanal from '../../Assets/kanal.jpeg';
import lamina from '../../Assets/lamina.jpg';
import zirkonyum2 from '../../Assets/zirkonyum2.png';
import dolgu from '../../Assets/dolgu5.jpg';
import gomuk from '../../Assets/gomuk.jpg';
import greft from '../../Assets/greft.png';
import plak from '../../Assets/plak3.jpg'



function TreatmentCard() {
    return (
        <div className={`container-fluid ${styles.tedaviContainer}`}>

            <div className='row justify-content-center'>


                <div className='col-12'>

                    <div className={styles.tedaviBaslik}>TEDAVİLER</div>
                </div>


                <div className={`${styles.mainTedavi} col-12 col-sm-6 col-md-3`}>


                    <Card className={styles.treatCard}>
                        <Card.Img variant="top" src={implant} />
                        <Card.Body className={styles.cardBody}>
                            <Card.Title className={`${styles.mainTedaviLabel}`} >Dental İmplant</Card.Title>

                            <Button className={styles.btnTdv} variant="primary">Detaylı Bilgi</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className={`${styles.mainTedavi} col-12 col-sm-6 col-md-3`}>
                    <Card className={styles.treatCard}>
                        <Card.Img variant="top" src={zirkonyum2} />
                        <Card.Body>
                            <Card.Title className={`${styles.mainTedaviLabel}`}>Zirkonyum Porselen</Card.Title>

                            <Button className={styles.btnTdv} variant="primary">Detaylı Bilgi</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className={`${styles.mainTedavi} col-12 col-sm-6 col-md-3`}>
                    <Card className={styles.treatCard}>
                        <Card.Img variant="top" src={kanal} />
                        <Card.Body>
                            <Card.Title className={`${styles.mainTedaviLabel}`}>Kanal Tedavisi</Card.Title>

                            <Button className={styles.btnTdv} variant="primary">Detaylı Bilgi</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className={`${styles.mainTedavi} col-12 col-sm-6 col-md-3`}>
                    <Card className={styles.treatCard}>
                        <Card.Img variant="top" src={dolgu} />
                        <Card.Body>
                            <Card.Title className={`${styles.mainTedaviLabel}`}>Estetik Dolgular</Card.Title>

                            <Button className={styles.btnTdv} variant="primary">Detaylı Bilgi</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className={`${styles.mainTedavi} col-12 col-sm-6 col-md-3`}>
                    <Card className={styles.treatCard}>
                        <Card.Img variant="top" src={gomuk} />
                        <Card.Body>
                            <Card.Title className={`${styles.mainTedaviLabel}`}>Çene Cerrahisi</Card.Title>

                            <Button className={styles.btnTdv} variant="primary">Detaylı Bilgi</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className={`${styles.mainTedavi} col-12 col-sm-6 col-md-3`}>
                    <Card className={styles.treatCard}>
                        <Card.Img variant="top" src={lamina} />
                        <Card.Body>
                            <Card.Title className={`${styles.mainTedaviLabel}`}>Porselen Laminalar</Card.Title>

                            <Button className={styles.btnTdv} variant="primary">Detaylı Bilgi</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className={`${styles.mainTedavi} col-12 col-sm-6 col-md-3`}>
                    <Card className={styles.treatCard}>
                        <Card.Img variant="top" src={plak} />
                        <Card.Body>
                            <Card.Title className={`${styles.mainTedaviLabel}`}>Bruksizm - Şeffaf Plak</Card.Title>

                            <Button className={styles.btnTdv} variant="primary">Detaylı Bilgi</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className={`${styles.mainTedavi} col-12 col-sm-6 col-md-3`}>
                    <Card className={styles.treatCard}>
                        <Card.Img variant="top" src={greft} />
                        <Card.Body>
                            <Card.Title className={`${styles.mainTedaviLabel}`}>Greft & Kemik Tozu </Card.Title>

                            <Button className={styles.btnTdv} variant="primary">Detaylı Bilgi</Button>
                        </Card.Body>
                    </Card>
                </div>




            </div>
        </div>

    )
}
export default TreatmentCard;
