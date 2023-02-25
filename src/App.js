import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './component/Login';
import Volume from './component/Volume';
import BillYear from './component/Billyear';
import Bill from './component/Bill';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<SignIn />}>
        {/* <Route index element={<Home />} />
        <Route path="/home" element={<BasicTable />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}
      </Route>
      <Route path="/volume" element={<Volume />}></Route>
      <Route path="/bill" element={<BillYear />}></Route>
      <Route path="/" element={<Bill />}></Route>
    </Routes>
  </BrowserRouter>
);
}

export default App;
