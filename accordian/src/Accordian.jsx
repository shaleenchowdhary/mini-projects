import { useState } from 'react';
import data from './data';
const Accordian = () => {
  const [state, setState] = useState(null);
  const toggle = (index) => {
    return setState((prev) => (prev == index ? null : index));
  };

  return (
    <>
      <div className="sm:w-1/2 mx-auto">
        {data.map((item, index) => {
          return (
            <div key={index} className="m-2 text-left cursor-pointer">
              <div
                className="font-bold text-lg p-2 border-2 border-white rounded-lg bg-slate-100 flex justify-between items-center"
                onClick={() => toggle(index)}
              >
                <h3>{item.question}</h3>
                {state == index ? (
                  <i className="fa-solid fa-plus text-blue-500"></i>
                ) : (
                  <i className="fa-solid fa-minus text-blue-500"></i>
                )}
              </div>
              {state == index ? (
                <div className="transition-all duration-5000 transition-show p-2 mt-2 border-2 border-white rounded-lg bg-slate-100">
                  <p onClick={() => toggle(index)}>{item.answer}</p>
                </div>
              ) : (
                <div className="transition-all duration-5000 transition-hide"></div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Accordian;
