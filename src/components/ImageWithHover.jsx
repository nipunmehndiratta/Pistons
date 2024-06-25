import { useState } from 'react';

function ImageWithHover({ src1, text, alt }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="image-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        minWidth:'200px',
        maxWidth: '277px',
        maxHeight: '277px',
        borderRadius: '20px',
        boxShadow: '0px 4px 4px 0px #00000040',
        position: 'relative', 
      }}
    >
      <img
        src={src1}
        alt={alt}
        className={`img-fluid ${hovered ? 'hidden' : ''}`}
        style={{
          opacity: hovered ? 0 : 1,
          transition: 'opacity 300ms ease-in-out',
          width: '100%',
          height: 'auto',
          
        }}
      />
      <p
        
        className={`img-fluid ${hovered ? 'hovered' : ''}`}
        style={{
          opacity: hovered ? 1 : 0,
          transition: 'opacity 300ms ease-in-out',
          width: '100%',
          height: '100%',
          position: 'absolute', 
          top: 0,
          left: 0,
          color:'#FFFFFF',
          backgroundColor:'#000000',
          textAlign:'center',
          paddingTop:'5px',
          paddingLeft:'5px',
          paddingRight:'5px',
          font: 'Oxygen',
          fontSize: '15px',
          fontWeight: '400',
          lineHeight: '24px',
          letterSpacing: '0em',
          boxShadow: '0px 4px 4px 0px #00000040'
          
        }}
      >{`"${text}"`}</p>
    </div>
  );
}

export default ImageWithHover;
