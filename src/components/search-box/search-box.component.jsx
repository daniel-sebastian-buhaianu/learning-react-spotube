import './search-box.styles.css';
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = ({ className, placeholder, handleKeyDown, handleOnClick }) => {
    return (
        <div className={`search-box ${className}`}>
            <input
                type='search'
                placeholder={placeholder}
                onKeyDown={handleKeyDown}
            />
            <button className='search-btn' onClick={handleOnClick}>
                <SearchIcon className='search-icon'/>
            </button>
        </div>
    )
}

export default SearchBox;