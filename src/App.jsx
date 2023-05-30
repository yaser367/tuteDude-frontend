import { BrowserRouter, Routes, Route} from "react-router-dom";


import ReferAndEarn from "./pages/Refer&Earn/ReferAndEarn";
import FriendsReffer from "./pages/FriendsReffer/FriendsReffer"

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReferAndEarn />}></Route>
        <Route path="/friend" element={<FriendsReffer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
