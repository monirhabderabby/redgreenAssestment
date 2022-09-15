import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/dashboad/Dashboard";
import DashboardOverView from "./components/DashboardOverView/DashboardOverView";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Dashboard />}>
                    <Route index element={<DashboardOverView />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
