import { useContext } from 'react';
import { ThemeContext } from '../context/context';

function Section() {
  const {theme} = useContext(ThemeContext)

  return (
    <section className={`${theme == 'light' ? "mt-4 text-gray-600 py-3  px-3 rounded-xl body-font" :"mt-4 text-gray-600 py-3 bg-teal-800 px-3 rounded-xl body-font"}`}>
      <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className={`${theme == 'light' ?"title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900":"title-font sm:text-4xl text-3xl mb-4 font-medium text-white"}`}>
            OUR TEACHER
            <br className="hidden lg:inline-block" />
            --- SIR BILAL RAZA ---
          </h1>
          <p className={`${theme == 'light' ? "mb-8 leading-relaxed" :"mb-8 leading-relaxed text-white"}`}>
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <button className={`${theme == 'light' ?  "inline-flex text-white bg-teal-800 border-0 py-2 px-6 focus:outline-none hover:bg-teal-900  rounded text-lg" : "hover:bg-teal-500 hover:text-white inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none rounded text-lg"}`}>
              Button
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-teal-100 border-0 py-2 px-6 focus:outline-none hover:bg-teal-500 hover:text-white  rounded text-lg">
              Button
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://media.licdn.com/dms/image/v2/D4D16AQHtie3x6ncyyQ/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1723369895815?e=2147483647&v=beta&t=ElHOkkAW2p8q7yBVKJfO__OtpQ3G70kQnswUE-jJds8"
          />
        </div>
      </div>
    </section>
  );
}

export default Section;
