import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ContactDetails from '../components/contact/ContactDetails';
import { fetchContacts } from '../data/api'; // Adjust the path if necessary
import { Contact } from '../types/types';
import ContactCard from "../components/contact/ContactCard";

jest.mock('../data/api');

describe('ContactDetails', () => {
    const mockContact: Contact = {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        phone: '1234567890',
        username: 'johndoe',
        address: {
            street: '123 Main St',
            suite: 'Apt 1',
            city: 'Anytown',
            zipcode: '12345',
            geo: {
                lat: '40.7128',
                lng: '-74.0060',
            },
        },
        website: 'www.johndoe.com',
        company: {
            name: 'Acme Inc.',
            catchPhrase: 'Catchy phrase',
            bs: 'Some bs',
        },
    };

    it('renders contact details correctly', async () => {
        (fetchContacts as jest.Mock).mockResolvedValueOnce({ data: [mockContact] });

        render(
            <MemoryRouter initialEntries={['/contacts/1']}>
                <Routes>
                    <Route path="/contacts/:contactId"  element={<ContactDetails  />} />
                </Routes>
            </MemoryRouter>
        );

        // Wait for the contact data to load, using a more flexible matcher
        await waitFor(() => {
            const nameElements = screen.getAllByText(/John/i); // Case-insensitive search for "John"
            const doeElements = screen.getAllByText(/Doe/i);  // Case-insensitive search for "Doe"
            expect(nameElements.length).toBeGreaterThan(0);
            expect(doeElements.length).toBeGreaterThan(0);
        });

        // Now you can assert the presence of other contact details
        expect(screen.getByText(mockContact.email)).toBeInTheDocument();
        expect(screen.getByText(mockContact.phone)).toBeInTheDocument();
        // ... Test for other details
    });


    it('shows a loading message while fetching', async () => {
        (fetchContacts as jest.Mock).mockImplementationOnce(() => {
            return new Promise(() => {}); // Never resolve
        });

        render(
            <MemoryRouter initialEntries={['/contacts/1']}>
                <Routes>
                    <Route path="/contacts/:contactId" element={<ContactDetails />} />
                </Routes>
            </MemoryRouter>
        );

        expect(screen.getByText('Contact not found or loading...')).toBeInTheDocument();
    });

    it('handles errors during fetching', async () => {
        (fetchContacts as jest.Mock).mockRejectedValueOnce(new Error('API Error'));

        render(
            <MemoryRouter initialEntries={['/contacts/1']}>
                <Routes>
                    <Route path="/contacts/:contactId" element={<ContactDetails />} />
                </Routes>
            </MemoryRouter>
        );

        await waitFor(() => {
            // You might want to check for a specific error message or element in your UI
            expect(screen.getByText(/Contact not found or loading/i)).toBeInTheDocument(); // Check for a generic error message
        });
    });
});
