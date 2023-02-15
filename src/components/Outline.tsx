import * as React from "react";

import Container from "@mui/material/Container";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export const Outline = () => {
    return (
        <Container>
            <Stack spacing={2}>
                <Skeleton variant="rounded" height="5rem" />
                <Skeleton variant="rounded" height="20rem" />
                <Skeleton variant="rounded" height="5rem" />
            </Stack>
        </Container>
    )
}

export default Outline;