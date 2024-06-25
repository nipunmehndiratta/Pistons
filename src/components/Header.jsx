import { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

function Header() {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleMagnifierClick = () => {
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  return(
    <div style={{maxWidth: '1440px',position: 'sticky',
        maxHeight: '83px',
        top: '0px',
        display:'flex',justifyContent:'space-between',alignItems:'center',padding:'30px'}}>
     <img style={{maxWidth: '149px',
maxHeight: '28px',
top: '27px',
}} src={'https://i.ibb.co/9YNtJJB/PISTONS-1.png'}/>
<div className="d-none d-md-flex" style={{ width: '535px', height: '39px', left: '-48px', padding: '10px 0px 10px 0px', display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
  <p style={{ font: 'Oxygen', fontSize: '15px', fontWeight: '700', lineHeight: '19px', letterSpacing: '0em', textAlign: 'center', width: '37px', height: '19px' }}>NEW</p>
  <p style={{ font: 'Oxygen', fontSize: '15px', fontWeight: '700', lineHeight: '19px', letterSpacing: '0em', textAlign: 'center', width: '62px', height: '19px' }}>BRANDS</p>
  <p style={{ font: 'Oxygen', fontSize: '15px', fontWeight: '700', lineHeight: '19px', letterSpacing: '0em', textAlign: 'center', width: '103px', height: '19px' }}>COLLECTIONS</p>
  <p style={{ font: 'Oxygen', fontSize: '15px', fontWeight: '700', lineHeight: '19px', letterSpacing: '0em', textAlign: 'center', width: '102px', height: '19px' }}>ACCESSORIES</p>
  <p style={{ font: 'Oxygen', fontSize: '15px', fontWeight: '700', lineHeight: '19px', letterSpacing: '0em', textAlign: 'center', width: '54px', height: '19px' }}>ABOUT</p>
</div>

<div style={{display:'flex',justifyContent:'cente',alignItems:'center'}}>

<img
style={{
  width: '18px',
  height: '20.02px',
}}
src={'https://i.ibb.co/y48z9Jy/Vector.png'}
alt="Vector Image"
/>
<p
style={{
  width: '11px',
  height: '13px',
  left: '-6px',
  backgroundColor: '#000000',
  borderRadius: '100%',
  position:'relative'
}}
>
<span
  style={{
    maxWidth: '11px',
    maxHeight: '13px',
    font: 'Oxygen',
    fontSize: '10px',
    fontWeight: '700',
    lineHeight: '13px',
    letterSpacing: '0em',
    textAlign: 'center',
    color: '#FFFFFF',
    display: 'block',
    position: 'relative', 
    top: '50%',
    transform: 'translateY(-50%)', 
  }}
>
  0
</span>
</p>
<img style={{
minWidth: '24px',
minHeight: '24px',
padding: '1.98px 2.01px 2.02px 1.98px',

}} src={'https://i.ibb.co/P4jhZTp/Magnifier.png'}
          alt="Magnifier Icon"
          onClick={handleMagnifierClick}
        />

        {/* Overlay */}
        <Modal show={showOverlay} onHide={handleCloseOverlay} dialogClassName="custom-modal">
          <Modal.Header closeButton style={{ border:'0',maxHeight:'0px' }}>
            
          </Modal.Header>
          <Modal.Body closeButton style={{ maxWidth: '436px', maxHeight: '90px', display: 'flex',paddingTop:0,alignItems:'center' }}>
            <Form style={{minHeight:'33px', minWidth:'150px',maxWidth: '246px', maxHeight: '33px', top: '32px', left: '32px', borderRadius: '50px', border: '1px solid #000000', background: '#FFFFFF', }}>
             
            </Form>
            <Button style={{ maxWidth: '122px', maxHeight: '41px', top: '28px', marginLeft:'5px', borderRadius: '50px', border: '3px solid #FFECC1', background: 'linear-gradient(0deg, #000000, #000000), linear-gradient(0deg, #FFECC1, #FFECC1)' }}>
              SEARCH
            </Button>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default Header;
