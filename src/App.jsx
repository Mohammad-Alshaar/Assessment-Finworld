import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardList from './components/CardList';
import Agents from './components/Agents';
import Filter from './components/Filter';
import Details from './components/Details';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CardList />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/properties/:id" element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
