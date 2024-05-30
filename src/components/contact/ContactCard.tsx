import React from 'react';
import { Card, CardContent, Typography, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';




const StyledAvatar = styled(Avatar)({
    backgroundColor: '#991a42', // Example color, customize as needed
});

interface ContactCardProps {
    contact: {
        id: number;
        name: string;
        email: string;
        phone: string;
    };
}

    const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
        const navigate = useNavigate();

        const handleClick = () => {
            navigate(`/contacts/${contact.id}`);
        };

    return (
        <Card sx={{ minWidth: 275 }} onClick={handleClick}>
        <CardContent>
                <StyledAvatar>{contact.name.charAt(0)}</StyledAvatar>
                <Typography variant="h5" component="div">
                    {contact.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {contact.email}
                </Typography>
                <Typography variant="body2">{contact.phone}</Typography>
            </CardContent>
        </Card>
    );
};

export default ContactCard;
