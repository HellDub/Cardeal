import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import CarDealershipUpload from "./pages/CarDealershipUpload";


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;


  return (
    <Routes>
      <Route path="/" element={<CarDealershipUpload />} />
    </Routes>
  );
}
export default App;
