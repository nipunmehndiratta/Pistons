

function Footer() {
  const containerStyle = {
    maxWidth: '1440px',
    maxHeight: '254px',
    padding: '26px 0px 53px 0px',
    // paddingTop:'50px',
    backgroundColor: '#000000',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const headingStyle = {
    fontFamily: 'Pridi',
    fontSize: '40px',
    fontWeight: '400',
    lineHeight: '62px',
    letterSpacing: '0em',
    textAlign: 'center',
    color: '#FFFFFF',
  };

  const subheadingStyle = {
    font: 'Oxygen',
    fontSize: '24px',
    fontWeight: '700',
    lineHeight: '30px',
    letterSpacing: '0.22em',
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: '20px',
  };

  const iconContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    minWidth: '210px',
    maxHeight: '34px',
    marginTop: '10px',
  };

  const iconStyle = {
    width: '34px',
    height: '34px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>PISTONS</h1>
      <h2 style={subheadingStyle}>STAY CONNECTED</h2>
      <div style={iconContainerStyle}>
        <img src={'https://i.ibb.co/4pcLdqF/facebook.png'} alt="Facebook" style={iconStyle} />
        <img src={'https://i.ibb.co/z2kDJ9k/youtube.png'} alt="YouTube" style={iconStyle} />
        <img src={'https://i.ibb.co/h9H5zP5/instagram.png'} alt="Instagram" style={iconStyle} />
        <img src={'https://i.ibb.co/88Rkr1s/twitter.png'} alt="Twitter" style={iconStyle} />
        <img src={'https://i.ibb.co/Vp2CMTL/message.png'} alt="Message" style={iconStyle} />
      </div>
    </div>
  );
}

export default Footer;
