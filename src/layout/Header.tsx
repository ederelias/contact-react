import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)({
    backgroundColor: '#991a42',
    color: '#fff',
});

const Header: React.FC = () => {
    return (
        <StyledAppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div"  sx={{ flexGrow: 1 }}>
                    My Contacts
                </Typography>
                {/* You can add other elements here, like a search bar or buttons */}
            </Toolbar>
        </StyledAppBar>
    );
};

export default Header;
