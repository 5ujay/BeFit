import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Workout from "./components/Workout";
import WorkoutDetail from "./components/WorkoutDetail";
import WorkoutInfo from "./components/WorkoutInfo";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/workout/:id" element={<WorkoutDetail />} />
        <Route path="/workout/:id/info" element={<WorkoutInfo/>}/>
      </Routes>
    </Router>
  );
}

export default App;
