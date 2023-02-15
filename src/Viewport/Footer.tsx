import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const array = [
    { title: "Contact us", link: "/contact" },
]

export const Footer = () => {
    const date = new Date().getFullYear();

    return (
        <Stack component="footer" sx={{ py: 6, mt: 15,  bgcolor: 'primary.main' }} alignItems="center" justifyContent="center" spacing={2}>
            <Box component="footer" sx={{ display: 'flex', justifyContent: 'center' }}>
                {array.map((item, i) =>
                    <Button key={i} sx={{ my: 2, mx: 0.5, color: 'primary.contrastText' }}>
                        {item.title}
                    </Button>
                )}
            </Box >
            <Stack alignItems="center" spacing={2}>
                <Typography align="center" color="primary.contrastText" variant="body2">
                    {`copyright ©  ${date} ${import.meta.env.VITE_APP_NAME}.`}
                </Typography >
                {/* <Typography align="center" color="primary.contrastText" variant="body2">
                    All rights reserved.
                </Typography> */}
            </Stack>
        </Stack >
    )
}

export default Footer;