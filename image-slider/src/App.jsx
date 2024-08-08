import './App.css';
import Counter from './Counter';
import PhotoSlider from './PhotoSlider';
import pic1 from './assets/images/pic1.jpg';
import pic2 from './assets/images/pic2.jpg';
import pic3 from './assets/images/pic3.jpg';
import pic4 from './assets/images/pic4.jpg';

const photos = [pic1, pic2, pic3, pic4];

function App() {
  return (
    <>
      <div
        style={{
          maxWidth: '1200px',
          width: '100%',
          height: '600px',
          margin: 'auto',
        }}
      >
        {/* <PhotoSlider photos={photos}></PhotoSlider> */}
        <Counter />
      </div>
    </>
  );
}

export default App;
