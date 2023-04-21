import './search-box.styles.css';
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = ({ className, placeholder }) => {
    return (
        <div className={`search-box ${className}`}>
            <input
                type='search'
                placeholder={placeholder}
            />
            <button className='search-btn'>
                <SearchIcon className='search-icon'/>
            </button>
        </div>
    )
}

export default SearchBox;