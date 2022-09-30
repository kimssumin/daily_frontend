
import './App.css';
import Hello from './component/Hello'
import Welcome from './component/Welcome'

function App() {
  
  return (
    <div className="App">
      <Hello />
      <Welcome age = {10}/>
      <Welcome age = {20}/>
      <Welcome age = {30}/>
    </div>
  );
}

export default App;
