import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  return (
    <div className="App">
      
      { /* Header */ }
      <Header/>

      { /* App Body*/}
      <div className="app_body">
        <Sidebar/>
        <Feed/>
        { /* Widgets */}
      </div>
    </div>


  );
}

export default App;
