import React, { useState } from "react";

import MenuIcon from '@mui/icons-material/Menu';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from "@mui/material/Toolbar";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import logo from '@/assets/m_symbol.svg';

const menuItems = [
    { name: 'Home', link: '/home' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' }
];

export const Header = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();


    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar color="transparent" position="static" elevation={0}>
            <Toolbar >
                <Box sx={{ flexGrow: 1 }}>
                    <Link onClick={() => navigate('/')} component="button" sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} underline="none" color="inherit">
                        <Box component="img" src={logo} alt="logo" sx={{ height: 25 }} />
                    </Link>
                </Box>
                <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                    {menuItems && menuItems.map((item, index) =>
                        <Button key={index} sx={{ mx: 1 }} color="inherit" onClick={() => navigate(item.link)}>
                            {item.name}
                        </Button>
                    )}
                </Box>
                {menuItems && menuItems.length > 0 &&
                    <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
                        <IconButton onClick={handleClick} color="inherit">
                            <MenuIcon />
                        </IconButton>
                        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                            {menuItems.map((item, index) =>
                                <MenuItem key={index} onClick={() => { navigate(item.link), handleClose() }}>
                                    {item.name}
                                </MenuItem>
                            )}
                        </Menu>
                    </Box>
                }
                <Button color="error" variant="outlined" sx={{ display: { xs: 'none', sm: 'flex' } }} onClick={() => navigate('/registration')}>Get Started</Button>
            </Toolbar>
        </AppBar>
    )
}
export default Header;
