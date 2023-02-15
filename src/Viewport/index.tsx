import React, { useEffect } from 'react';

import Box from '@mui/material/Box';

import Footer from './Footer';
import Header from './Header';

interface ViewportProps {
    children: React.ReactNode;
}

const Viewport = (props: ViewportProps) => {
    const { children } = props;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                {children}
            </Box>
            <Footer />
        </>
    )
}

export default Viewport