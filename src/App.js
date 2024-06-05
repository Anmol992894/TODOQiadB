import './App.css'; // Importing the CSS file for styling
import Inputodo from './components/Input'; // Importing the Inputodo component
import Listtodo from './components/List'; // Importing the Listtodo component

function App() {
  return (
    <div className="App">
      <Inputodo/> {/* Rendering the Inputodo component */}
      <Listtodo/> {/* Rendering the Listtodo component */}
    </div>
  );
}

export default App; // Exporting the App component as default
