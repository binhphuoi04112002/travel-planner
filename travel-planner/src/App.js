import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import DestinationList from './components/DestinationList';

function App() {
    return (
        <Router>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Travel Planner</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Dashboard</Nav.Link>
                    <Nav.Link href="/destinations">DestinationList</Nav.Link>
                </Nav>
            </Navbar>

            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/destinations" element={<DestinationList />} />
            </Routes>
        </Router>
    );
}

export default App;


