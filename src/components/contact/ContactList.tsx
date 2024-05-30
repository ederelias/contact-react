import React, { useState, useEffect } from 'react';
import {
    Grid,
    TextField,
    InputAdornment,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    SelectChangeEvent, Box
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ContactCard from './ContactCard';
import {Contact} from "../../types/types";
import {fetchContacts} from "../../data/api";

const ContactList: React.FC = () => {
    const handleSortChange = (event: SelectChangeEvent) => {
        const [field, order] = (event.target.value as string).split('-');
        setSortBy({ field: field as keyof Contact, order: order as 'asc' | 'desc' });
    };
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
    const [filter, setFilter] = useState('');
    const [sortBy, setSortBy] = useState<{ field: keyof Contact, order: 'asc' | 'desc' }>({ field: 'name', order: 'asc' });

    useEffect(() => {
        const fetchContactsData = async () => {
            try {
                const response = await fetchContacts();
                setContacts(response.data);
                setFilteredContacts(response.data);
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
        };
        fetchContactsData();
    }, []);

    useEffect(() => {
        const newFilteredContacts = contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );

        const sortedContacts = [...newFilteredContacts].sort((a, b) => {
            const aValue = a[sortBy.field];
            const bValue = b[sortBy.field];
            if (aValue < bValue) return sortBy.order === 'asc' ? -1 : 1;
            if (aValue > bValue) return sortBy.order === 'asc' ? 1 : -1;
            return 0;
        });

        setFilteredContacts(sortedContacts);
    }, [filter, contacts, sortBy]);


    return (
        <>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
            <TextField
                label="Search Contacts"
                variant="outlined"
                placeholder="Search by name"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                sx={{ flexGrow: 1, marginRight: 2 }}
            />
            <FormControl sx={{ minWidth: 120 }}>
                <InputLabel id="sort-label">Sort By</InputLabel>
                <Select
                    labelId="sort-label"
                    id="sort-select"
                    value={`${sortBy.field}-${sortBy.order}`}
                    label="Sort By"
                    onChange={handleSortChange}
                >
                    <MenuItem value="name-asc">Name (A-Z)</MenuItem>
                    <MenuItem value="name-desc">Name (Z-A)</MenuItem>
                    <MenuItem value="email-asc">Email (A-Z)</MenuItem>
                    <MenuItem value="email-desc">Email (Z-A)</MenuItem>
                </Select>
            </FormControl>
        </Box>


            <Grid container spacing={2}>
                {filteredContacts.map(contact => (
                    <Grid item xs={12} sm={6} md={4} key={contact.id}>
                        <ContactCard contact={contact} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default ContactList;
