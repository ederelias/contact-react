import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Divider, Box, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom'; // If you're using routing

const drawerWidth = 240; // Set your desired width here

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const Sidebar: React.FC = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <Box>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer}
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>

            <Drawer
                anchor="left"
                open={open}
                onClose={toggleDrawer}
                sx={{
                    width: drawerWidth, // Apply the width to the Drawer component
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}>
                <DrawerHeader>
                    <IconButton onClick={toggleDrawer}>
                        <MenuIcon /> {/* Use the same icon for closing */}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItem button={true} key="contacts" onClick={() => navigate('/')}>
                    <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    );
};

export default Sidebar;
