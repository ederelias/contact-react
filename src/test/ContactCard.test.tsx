import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import ContactCard from '../components/contact/ContactCard';
import { Contact } from '../types/types';

describe('ContactCard', () => {
    const mockContact: Contact = {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '123-456-7890',
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

    it('renders contact information correctly', () => {
        render(
            <MemoryRouter>
                <ContactCard contact={mockContact} />
            </MemoryRouter>
        );

        expect(screen.getByText(mockContact.name)).toBeInTheDocument();
        expect(screen.getByText(mockContact.email)).toBeInTheDocument();
        expect(screen.getByText(mockContact.phone)).toBeInTheDocument();
    });
});

