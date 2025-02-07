import { Box, Typography } from "@mui/material";

export default function NotFound() {
    return (
        <Box component="main" px={{ xs: 1, md: 16.5 }} py={2} mt={4} mb={12} width={{ xs: "100%", md: "86%" }}>
            <Typography variant="h4" fontSize="56px" mt={0} mb={0} fontWeight="bold">
                404
            </Typography>
            <Typography variant="h5" fontSize="14px">
                The page you requested was not found
            </Typography>
        </Box>
    );
}
