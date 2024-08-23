import SearchBar from "./SearchBar"


function Header() {

  return (
    <div className="w-screen mx-auto px-4 flex justify-around align-center z-10">
        <img src="src/assets/recipeImages/logo.png" alt="Logo" className="h-24 sm:h-28"/>
        <SearchBar/>
    </div>
  )
}

export default Header
