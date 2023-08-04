import {NavBar} from './components/NavBar.jsx'
import { ItemListContainer } from './components/ItemListContainer';
import './App.css';



function App() {
    return (
    <>
      <NavBar />
      <div className="App">
        <header className="App-header">
        <ItemListContainer greeting="2"/>
        </header>
      </div>
    </>
  );
}

export default App;
