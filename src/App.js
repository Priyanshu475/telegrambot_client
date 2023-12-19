import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import Updatesetting from "./Components/Updatesetting";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div>
          <Routes>
            <Route path ='/' exact element={<Home/>} />
            <Route path ='/dashboard' exact element={<Dashboard/>} />
            <Route path ='/settings' exact element={<Updatesetting/>} />
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
