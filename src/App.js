import {
  Routes,
  Route,

} from "react-router-dom";
import CarDealershipUpload from "./pages/CarDealershipUpload";


function App() {



  return (
    <Routes>
      <Route path="/" element={<CarDealershipUpload />} />
    </Routes>
  );
}
export default App;
