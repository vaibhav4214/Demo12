import logo from './logo.svg';
import './App.css';
import Increment from './Components/Increment';
import Decrement from './Components/Decrement';

function App() {
  return (
    <>
    <div class="grid grid-cols-2 bg-[red] mt-[50px] gap-2">
      <div class="text-center "><Increment/></div>
      <div class="text-center "><Decrement/></div>

    </div>
    </>
  );
}

export default App;
