import React from 'react'
import styles from './AppointmentForm.module.scss'
import Form from 'react-bootstrap/Form'
import appointmentimg from '../../Assets/main2.jpg'
import {Button} from 'react-bootstrap'

function AppointmentForm() {
    return (
        <div className=''>
            <div className='container mt-5 mb-5'>

                <div className={styles.appointmentLabel}>ONLİNE RANDEVU FORMU</div>

                <div className={styles.appointmentBox}>
                    
                        <img src = {appointmentimg}></img>
                    
                    
                        <Form>
                            <Form.Group className="mb-2 d-flex mt-5" controlId="exampleForm.ControlInput1">
                                <Form.Control className='mr-3' type="email" placeholder="Ad - Soyad" style={{borderRadius:' 15px'}} />
                                <Form.Control type="email" placeholder="Telefon" style={{borderRadius:' 15px'}}/>
                            </Form.Group>
                            <Form.Group className="mb-2 d-flex">
                                <Form.Control className='mr-3' type="date" placeholder="" style={{borderRadius:' 15px'}}/>
                                <Form.Control type="time" placeholder="Randevu saati seçiniz" style={{borderRadius:' 15px'}}/>
                            </Form.Group>
                            
                            <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                                <Form.Label style = {{marginLeft: '10px'}}>Bize İletmek İstediğiniz Mesajınız;</Form.Label>
                                <Form.Control as="textarea" rows={3} style={{borderRadius:' 15px'}}/>
                            </Form.Group>
                            <Button variant="primary" type="submit">Formu Gönder</Button>
                        </Form>
                    

                </div>


            </div>
        </div>
    )
}
export default AppointmentForm;
