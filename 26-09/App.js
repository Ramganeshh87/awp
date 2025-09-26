import logo from './logo.svg';
import './App.css';
import Eventbind  from './Eventbind';
import ArrowEventBind from  './ArrowEventBind';
import Eventbindhooks from './Eventbindhooks';
import DateTime from './datetime';

function App() {
  return (
    <div className="App">
      <Eventbind/>
      <ArrowEventBind/>
      <Eventbindhooks/>
      <DateTime/>
    </div>
  );
}

export default App;
