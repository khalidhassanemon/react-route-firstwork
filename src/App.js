import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import NoMatch from './NoMatch/NoMatch';
import FriendDetail from './Component/FriendDetail/FriendDetail';

function App() {  
    return (
        <Router>
        <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/friend/:friendId" element={<FriendDetail/>}/>
        <Route exact path="/" element={<Home/>}/>
        <Route path="*" element={<NoMatch/>}/>
        </Routes>
        </Router>
    );
};

export default App;