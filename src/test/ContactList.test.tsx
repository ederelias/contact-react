import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactList from '../components/contact/ContactList';
import { fetchContacts } from '../data/api'; // Adjust the path if necessary
import { Contact } from '../types/types';

jest.mock('../data/api'); // Mock the API call


jest.mock('../data/api');

describe('ContactList', () => {
    const mockContacts: Contact[] = [/* ... same mock data as before ... */];

    beforeEach(() => {
        (fetchContacts as jest.Mock).mockResolvedValue({ data: mockContacts });
    });


    it('renders contact list', async () => {
        render(<ContactList />);

        await waitFor(() => {
            mockContacts.forEach((contact) => {
                expect(screen.getByText(contact.name)).toBeInTheDocument();
            });
        });
    });

    it('sorts contacts by name descending', async () => {
        // Similar logic as the ascending test, but select "Name (Z-A)"
    });
});
