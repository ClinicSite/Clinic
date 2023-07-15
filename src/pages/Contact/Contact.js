import React from 'react'
import styles from './Contact.module.scss';
import { BsTelephoneInboundFill } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';
import { SlCalender } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
import AppointmentForm from '../../Components/AppointmentForm/AppointmentForm';

const Contact=() => {
  const navigate=useNavigate();
  return (
   <>
    <h4 className='mt-5 mb-3'>BİZE ULAŞIN</h4>
    <button class="btn btn-outline-secondary w-75 mb-3" type="button"><BsTelephoneInboundFill />0212 503 00 05</button>
    <button onClick={() => navigate(<AppointmentForm />)} type="button"><SlCalender />Online Randevu</button>
    <button class="btn btn-outline-secondary w-75 mb-3" type="button">caliskandent@gmail.com</button>
    <button class="btn btn-outline-secondary w-75 mb-3" type="button">
        <BsFacebook />
        <RiInstagramFill />
    </button>
    </>
  )
}

export default Contact;