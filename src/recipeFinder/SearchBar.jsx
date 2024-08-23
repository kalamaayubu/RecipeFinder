import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import { SearchTextContext  } from './App';


function SearchBar() {

    const { searchText, setSearchText } = useContext(SearchTextContext);
    const [localSearchText, setLocalSearchText] = useState(searchText); // Local state for each search bar

    const handleSearchTextChange = (e) => {
        setLocalSearchText(e.target.value); // Update local state
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchText(localSearchText); // Update global context state on submit
    }

  return (
    <form
        className="mt-2"
    >
        <div>
            <input 
                type="text"
                value={localSearchText} // Bind local state to the input
                onChange={handleSearchTextChange}
                placeholder="Search here..." 
                className="px-3 py-2 max-w-[150px] border focus:border-red-200 outline-none sm:min-w-[200px]"
            />
            <button
                onClick={handleSubmit}
                className="bg-red-500 p-2 ring-1 ring-red-500"
            >
                <FontAwesomeIcon icon={faSearch}/>
            </button>
        </div>
    </form>
  )
}

export default SearchBar
