import ImageWithHover from "./ImageWithHover";

function Testimonials() {
  return (
    <div
      style={{
        backgroundColor:'white',
        position:'sticky',
        maxWidth: "1440px",
        maxHeight: "1552px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop:'40px',
        paddingBottom:'100px'
      }}
    >
      <p
        style={{
          textAlign: "center",
          font: "Oxygen",
          fontSize: "36px",
          fontWeight: "700",
          lineHeight: "45px",
          letterSpacing: "0.22em",
        }}
      >
        TESTIMONIALS
      </p>
      <div
        className="container-fluid"
        style={{
          // marginLeft:'20px',
          // maxWidth: "1440px",
          flexWrap: "wrap",
          display:'flex',
          justifyContent:'center',
          // alignItems:"center"
        }}
      >
        <div className="col-md-3 col-sm-12" style={{paddingTop: "53px",display:'flex',justifyContent:'center'}}>
          <ImageWithHover
            src1="https://i.ibb.co/NLHZsBx/kelly-sikkema-6-JQSN8u5-Fzg-unsplash-1.png"
            text="I stumbled upon this shop, and their selection blew me away. The user-friendly website made my shopping experience a breeze!"
            alt="Image 1"
          />
        </div>

        <div className="col-md-3 col-sm-12" style={{ paddingTop: "53px",display:'flex',justifyContent:'center' }}>
          <ImageWithHover
            src1="https://i.ibb.co/713NQF1/pexels-rikka-ameboshi-3477082-1-1.png"
            text="The checkout process was seamless, and the responsive design worked flawlessly on my mobile device. I'll definitely be coming back!"
            alt="Image 2"
          />
        </div>
        <div className="col-md-3 col-sm-12" style={{ paddingTop: "53px",display:'flex',justifyContent:'center' }}>
          <ImageWithHover
            src1="https://i.ibb.co/MyHdqRR/pexels-moein-moradi-11584529-1-2.png"
            text="Their site's intuitive navigation made finding the perfect pen a joy. Five stars for both their products and web design!"
            alt="Image 3"
          />
        </div>
        <div className="col-md-3 col-sm-12" style={{ paddingTop: "53px",display:'flex',justifyContent:'center' }}>
          <ImageWithHover
            src1="https://i.ibb.co/HXbPzPd/pexels-ferdie-sapitula-5001919-1.png"
            text="I appreciate the attention to detail in both their pens and website. A visually stunning and user-focused online shop."
            alt="Image 4"
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
