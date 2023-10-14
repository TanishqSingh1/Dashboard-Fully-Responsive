import Mainbar from './Components/Mainbar';
import Sidebar from './Components/Sidebar';
import './App.css';
import Bargraph from './Components/Bargraph';
import Piegraph from './Components/Piegraph';
import Lastbar from './Components/Lastbar';
import Lastbar2 from './Components/Lastbar2';
function App() {
  return (
    <>
    <div className="container">
        <div class="sidebar"><Sidebar/></div>
        <div class="mainbar">
            <div class="block1 mainbar"><Mainbar/></div>
            <div className='chart_block'>
              <div class="block2"><Bargraph/></div>
              <div class="block3"><Piegraph/></div>
            </div>
            <div className='last_block'>
              <div className='last_block1'><Lastbar/></div>
            </div>
            <div className='last_block last_block2'><Lastbar2/></div>
        </div>
        </div>
    </>
  );
}

export default App;
