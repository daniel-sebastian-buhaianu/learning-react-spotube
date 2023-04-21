import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='container'>
        <h1 className='app-title'>SpoTube</h1>
        <SearchBox placeholder={'Search anything from YouTube...'}/>
      </div>
    </div>
  );
}

export default App;
