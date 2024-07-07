import { useState } from 'react';
import './PhotoSlider.css';

const content = [
  {
    heading: "Let's get Started Together",
    paragraph:
      "Gain a Comprehensive View Of Your Child's Grade, Attendance, Assignments And Assessments.",
  },
  {
    heading: 'Personalized insights await',
    paragraph:
      "Delve Deep Into Detailed Insights On Your Child's Learning Pattern And Performance Metrics.",
  },
  {
    heading: 'Timely Notifications',
    paragraph:
      "Receive Timely Update On Your Child's Achievements, Milestones, And Progress.",
  },
  {
    heading: 'Stay Updated, Stay Informed',
    paragraph:
      "Efforlessly Stay Abreast Of Your Child's Progress And Milestone In Real Time",
  },
];

function PhotoSlider({ photos }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <img src={photos[currentIndex]} className="photoSliderImage" />
        <div className="info">
          <h2>{content[currentIndex].heading}</h2>
          <p>{content[currentIndex].paragraph}</p>
        </div>

        <button
          onClick={() =>
            setCurrentIndex((prev) =>
              prev === 0 ? photos.length - 1 : prev - 1
            )
          }
          className="photoSliderButton"
          style={{ left: '370px' }}
        >
          Previous
        </button>
        <button
          onClick={() =>
            setCurrentIndex((prev) =>
              prev === photos.length - 1 ? 0 : prev + 1
            )
          }
          className="photoSliderButton"
          style={{ left: '500px' }}
        >
          Next
        </button>
        <div className="sliderButtons">
          {photos.map((_, index) => {
            return (
              <div
                className="sliderDotButton"
                key={index}
                onClick={() => setCurrentIndex(index)}
                style={
                  index === currentIndex
                    ? { backgroundColor: 'black' }
                    : { backgroundColor: 'white' }
                }
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default PhotoSlider;
