import { useContext } from 'react';
import {Link,} from 'react-router-dom'
import { ThemeContext } from '../context/context';

function Nav() {
const {theme , setTheme} = useContext(ThemeContext)
function handletheme (){
  if (theme === 'light'){
    setTheme('dark')    
  }else{
    setTheme('light')
  }
}
  return (
<header  className={`${theme == 'light' ? "text-gray-600 bg-white body-font rounded-md" : "bg-teal-800 rounded-md text-white body-font" }`}>
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className={`${theme=='light' ?"w-10 h-10 text-white p-2 bg-teal-800 rounded-full" : "w-10 h-10 text-black p-2 bg-white rounded-full"}`}
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span className={`${theme == 'light'?  "ml-3 text-xl":"ml-3 text-xl text-white"} `}>Assigment</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link to={"/"} className="mr-5 hover:text-gray-900">Home</Link>
      <Link to={"product"} className="mr-5 hover:text-gray-900">Products</Link>
      <Link to={"auth"} className="mr-5 hover:text-gray-900">Auth</Link>
      <Link to={"image"} className="mr-5 hover:text-gray-900">Image Gallery</Link>
      <Link to={"material"} className="mr-5 hover:text-gray-900">Material UI</Link>
      <Link to={"todo"} className="mr-5 hover:text-gray-900">todo App </Link>
    </nav>
    <button onClick={handletheme} className={`${theme == 'light' ? " inline-flex items-center bg-teal-800 border-0 py-2 px-3 focus:outline-none hover:bg-teal-900 rounded text-white mt-4 md:mt-0" : " inline-flex items-center bg-white border-0 py-2 px-3 focus:outline-none hover:bg-white-900 rounded text-black mt-4 md:mt-0"}`}>
      {
        theme === 'light'? "Make it Dark" :"Make   it light" 
      }
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</header>
  )
}

export default Nav;
