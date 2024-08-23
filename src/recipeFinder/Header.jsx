import SearchBar from "./SearchBar"
import logo from '../assets/recipeImages/logo.png';


function Header() {

  return (
    <div className="w-screen mx-auto px-4 flex justify-around align-center z-10">
        <img src={logo} alt="Logo" className="h-24 sm:h-28"/>
        <SearchBar/>
    </div>
  )
}

export default Header
