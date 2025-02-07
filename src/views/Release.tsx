import { Box } from "@mui/material";
import Image from "@/components/Release/Gallery/Image";
import { useLocation } from "react-router";
import { useEffect } from "react";
import { getRelease } from "@/services";

export default function Release() {
    const { state } = useLocation();
    const id = state?.id;

    const fetchReleaseAPI = async (id: string) => {
        const response = await getRelease(id);
        console.log(response);
    };

    useEffect(() => {
        if (id) fetchReleaseAPI(id);
    }, [id]);

    return (
        <Box component="main" px={16.5} py={2}>
            <Box display="flex" pt={2}>
                <Box width="70%">
                    <Image />
                </Box>
                <Box width="30%"></Box>
            </Box>
        </Box>
    );
}
