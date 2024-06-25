import Header from './components/Header';
import ImageGrid from './components/ImageGrid';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';


function App() {
  const containerStyle = {
    minWidth: '100vw',
    minHeight: '100vh',
    top: '-745px',
    left: '15px',
    border: '1px solid #0000001A',
    backgroundColor: '#FFFFFF',
  };

  const headerStyle = {
    padding: '11px 0px',
    maxWidth: '1440px',
    maxHeight: '41px',
    backgroundColor: '#E3E3E3',
    display: 'flex',
    justifyContent: 'center',
  };

  const headerTextStyle = {
    fontSize: '15px',
    color: '#9A9A9A',
    minWidth: '230px',
    minHeight: '19px',
    top: '11px',
    left: '605px',
    lineHeight: '18.94px',
    fontWeight: '700',
    fontFamily: 'Oxygen, sans-serif',
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <p style={headerTextStyle}>FREE SHIPPING ON ALL ORDERS</p>
      </div>
      <Header />
      <ImageGrid />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
