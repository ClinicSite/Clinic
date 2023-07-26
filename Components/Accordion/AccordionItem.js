import Accordion from 'react-bootstrap/Accordion';
import {BiPlusMedical} from 'react-icons/bi';
import './AccordionItem.module.scss';

function AccordionItem() {
  return (
    <Accordion defaultActiveKey="0" className='acorAdres'>
      <Accordion.Item eventKey="0" className='bdt-ep-accordion-item bdt-flex-between'>
        <Accordion.Header className=' d-flex'>
            <span className='float-left'>
                Adres
            </span>
            <span className='float-right'>
                 <BiPlusMedical />
            </span>
        </Accordion.Header>
        <Accordion.Body>
          Fevzi Çakmak Mah. Zile Sk. No:2/2
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Metro ile Ulaşım</Accordion.Header>
        <Accordion.Body>
          Yenikapı-AHL metrosu ile Yenibosna-Metro durağında inerek kolayca ulaşabilirsiniz.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionItem;