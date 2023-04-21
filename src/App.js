import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <h1 className='app-title'>SpoTube</h1>
      <SearchBox placeholder={'Search anything from YouTube...'}/>
    </div>
  );
}

export default App;
