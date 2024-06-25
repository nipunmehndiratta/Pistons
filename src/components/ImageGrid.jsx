import { Carousel } from 'react-bootstrap';

function ImageGrid() {
  return (
    <div className="container-fluid" style={{ maxWidth: '1440px', top: '80px', display: 'flex', flexWrap: 'wrap', padding: '0px' }}>
      <div className="col-md-6 col-sm-12" style={{ position: 'sticky', top: '80px' }}>
        <img
          src="https://i.ibb.co/FVCGbnf/pexels-energepiccom-110473-1-1.png"
          alt="Image 1"
          className="img-fluid"
          style={{ width: '100%', height: 'auto' }}
          
        ></img>
      </div>
      <div className="col-md-6 col-sm-12" style={{ position: 'sticky', top: '80px' }}>
        <img
          src="https://i.ibb.co/80Hs8n7/pexels-pixabay-261450-1.png"
          alt="Image 2"
          className="img-fluid"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div className="col-md-6 col-sm-12" style={{ position: 'sticky', top: '80px' }}>
        <img
          src="https://i.ibb.co/bKv0Dv7/Frame-8.png"
          alt="Image 3"
          className="img-fluid"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div className="col-md-6 col-sm-12" style={{ position: 'sticky', top: '80px' }}>
        <img
          src="https://i.ibb.co/gPGGRvj/pexels-anete-lusina-5240857-1.png"
          alt="Image 4"
          className="img-fluid"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div className="col-md-6 col-sm-12" style={{ position: 'sticky', top: '80px' }}>
        <img
          src="https://i.ibb.co/X8TwnhK/pexels-antoni-shkraba-4348078-1.png"
          alt="Image 5"
          className="img-fluid"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div className="col-md-6 col-sm-12" style={{ position: 'sticky', top: '80px' }}>
        <img
          src="https://i.ibb.co/PzrY492/omar-al-ghosson-zh-Q6-Wmcrah-Q-unsplash-1.png"
          alt="Image 6"
          className="img-fluid"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div className="col-md-12 col-sm-12" style={{ position: 'sticky', top: '80px' }}>
        <img
          src="     https://i.ibb.co/Z1TnvHc/ervan-m-wirawan-KY2baho4jn-A-unsplash-1-1.png"
          alt="Image 7"
          className="img-fluid"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
 
      <div className="col-md-12 col-sm-12" style={{ position: 'sticky', top: '80px' , display: 'flex', flexWrap: 'wrap',justifyContent:'center',width:'100%',backgroundColor:'#FFFFFF',minHeight:'636px',}}>
      <div style={{ width: 'auto', height: 'auto',display:'flex',justifyContent:'center',alignItems:'center',paddingTop:'93px',paddingLeft:'28px'}}>
      <Carousel style={{maxWidth:'597px',maxHeight:'450px',paddingRight:'30px'}} 
    controls={false}
    interval={null} 
    indicators={true}
    pause={true}
    >
          <Carousel.Item>
            <img
              src="https://i.ibb.co/HBQVxF4/pexels-addy-bronzzz-13518245-1.png"
              alt="Image 1"
              className="img-fluid"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://i.ibb.co/hWv4NDy/pexels-cottonbro-studio-6116870-1.png"
              alt="Image 2"
              className="img-fluid"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="  https://i.ibb.co/HXsBYWp/pexels-angela-roma-7319307-1.png"
              alt="Image 3"
              className="img-fluid"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://i.ibb.co/TvsKDXH/pexels-suzy-hazelwood-3905797-1.png
              "
              alt="Image 4"
              className="img-fluid"
            />
          </Carousel.Item>
          
        </Carousel>
        </div>
        <div className="col-md-6 col-sm-12" style={{display: 'flex', flexDirection: 'column',justifyContent:'center',alignItems:'center',paddingLeft:'10px',paddingRight:'10px'}}>
     <div style={{ width: '100%', height: 'auto', display: 'flex', flexDirection: 'column',justifyContent:'center',alignItems:'center'
 }}>
  <h1 style={{position:'relative',font: 'Oxygen',
fontSize: '36px',paddingLeft:'5px',paddingTop:"5px",
fontWeight: '700',
lineHeight: '45px',
letterSpacing: '0.22em',
textAlign: 'center'
}}>ABOUT PISTONS</h1>
  <p style={{ maxWidth: '443px', maxHeight: '201px', font: 'Oxygen',
fontSize: '15px',paddingLeft:'5px',
fontWeight: '400',
lineHeight: '24px',
letterSpacing: '0em',
textAlign: 'left'
}}>
    Established in 1897, our beloved fountain pen haven, 'PISTONS,' has been a haven for pen enthusiasts for generations. With a century-long dedication to fine writing instruments, we've bridged tradition and modernity, offering a curated selection of vintage and contemporary fountain pens. Our little shop, nestled in the heart of town, continues to inspire a love for the art of writing, connecting past and present through the timeless elegance of ink on paper.
  </p>
  </div>
</div>
</div>
</div>
  );
}

export default ImageGrid;
