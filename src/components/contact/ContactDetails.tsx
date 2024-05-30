import React, { useState, useEffect } from 'react';
import { Typography, Box, Button, List, ListItem, ListItemText, Divider } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchContacts } from '../../data/api'; // Adjust path if needed
import { Contact } from '../../types/types';
import {styled} from "@mui/material/styles"; // Adjust path if needed

const StyledButton = styled(Button)({
    backgroundColor: 'transparent',
    border: '2px solid #991a42',
    color: "#000",// Example border color
    '&:hover': {
        border: '1px solid #99311a',
        backgroundColor: '#f0f0f0', // Example hover background color
    },
});

const ContactDetails: React.FC = () => {
    const [contact, setContact] = useState<Contact | null>(null);
    const { contactId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchContact = async () => {
            try {
                const response = await fetchContacts();
                const contactData = response.data.find(
                    (c: { id: number; }) => c.id === parseInt(contactId || '', 10)
                );
                setContact(contactData);
            } catch (error) {
                console.error('Error fetching contact:', error);
            }
        };

        if (contactId) {
            fetchContact();
        }
    }, [contactId]);

    if (!contact) {
        return <Typography>Contact not found or loading...</Typography>;
    }

    return (
        <Box>
            <Typography variant="h4">{contact.name}</Typography>
            <Typography variant="subtitle1" color="text.secondary">@{contact.username}</Typography>

            <List>
                <ListItem>
                    <ListItemText primary="Email" secondary={contact.email} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Phone" secondary={contact.phone} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Website" secondary={contact.website} />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary="Address" secondary={`${contact.address.street}, ${contact.address.suite}, ${contact.address.city}, ${contact.address.zipcode}`} />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary="Company" secondary={contact.company.name} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Catch Phrase" secondary={contact.company.catchPhrase} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="BS" secondary={contact.company.bs} />
                </ListItem>
            </List>


            <StyledButton
                variant="outlined"  // Add the outlined variant for a border
                onClick={() => navigate(-1)}
            >
                Back to Contacts
            </StyledButton>
        </Box>
    );
};

export default ContactDetails;
