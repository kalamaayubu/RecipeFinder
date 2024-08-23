import { createContext, useState } from "react";
import Header from "./header";
import Hero from "./Hero";
import QuerySection from "./QuerySection";
import SearchResult from "./SearchResult";
import Footer from "./footer";


export const SearchTextContext = createContext(); // Create context for the searchText


function App() {

  //Define the searchText state in the app(parent) component of the searchBar component
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <SearchTextContext.Provider value={{ searchText, setSearchText }}>
        <Header/><hr />
        <Hero/>
        <QuerySection/><hr />
        <SearchResult/>
        <Footer/>
      </SearchTextContext.Provider>

    </div>
  )
}

export default App
