import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import ContactList from './components/contact/ContactList';
import ContactDetails from './components/contact/ContactDetails';

class App extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Box sx={{ display: 'flex' }}>
                    <Sidebar />
                    <Container maxWidth="md" sx={{ marginTop: 4, marginLeft: 2 }}>
                        <Routes>
                            <Route path="/" element={<ContactList />} />
                            <Route path="/contacts/:contactId" element={<ContactDetails />} />
                        </Routes>
                    </Container>
                </Box>
            </Router>
        );
    }
}

export default App;
