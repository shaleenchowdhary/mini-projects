import logo from '../../assets/SchoolLogo.png';
import { Link } from 'react-router-dom';

function TeacherForget() {
  return (
    <>
      <div className="flex w-full h-full flex-col sm:flex-row justify-around">
        <div className="flex w-full  sm:h-full items-center justify-center sm:w-1/2 flex-col">
          <div className="sm:h-2/5 sm:w-1/2">
            <img
              src={logo}
              alt="School's logo"
              className="object-fit h-full w-full"
            />
          </div>
          <div className="sm:w-11/12 flex justify-normal gap-4 flex-col items-center">
            <h1 className="font-bold text-xl">Streaming Teaching Excellence</h1>
            <p>
              Empowering Teacher for Academic Excellence: From Class Management
              to Insights, Our Teacher ERP Streamlines Operations Across Desktop
              and Mobile Platforms. Collaborate Efficiently, Utilize Insights
              Effectively, and Benchmark Quality Education for Personalized
              Teaching Experiences.
            </p>
          </div>
        </div>

        <div className="w-full flex items-center justify-center sm:w-1/2 h-1/2 sm:h-full py-0 sm:m-0 my-10">
          <form
            action=""
            className="flex flex-col sm:w-11/12 sm:h-5/6 border-2 border-slate-300 rounded-2xl py-4 items-center px-4 bg-slate-50 justify-center"
          >
            <h1 className="font-bold text-xl">Forgot Password</h1>
            <p className="text-gray-500">Please Fill the Details Below</p>

            <div className="flex flex-col w-4/5 text-left gap-4 py-4">
              <label htmlFor="new-password" className="text-base font-medium">
                Enter New Password
              </label>
              <input
                id="new-password"
                type="text"
                className="border-gray-500 border-2 rounded-lg py-1 px-2"
                placeholder="Ex: 49283"
              />
              <label htmlFor="re-enter" className="text-base font-medium">
                Re-enter Password
              </label>
              <input
                id="re-enter"
                type="text"
                className="border-gray-500 border-2 rounded-lg py-1 px-2"
              />
            </div>
            <Link
              to="/teacher-login"
              className="border-2 border-sky-500 py-1 px-10 rounded-xl bg-sky-500 text-white mt-4"
            >
              Save & Login
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
export default TeacherForget;
