import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface PageProps {
    count: number;
}

export default function PaginationRounded({ count }: PageProps) {
    return (
        <Stack spacing={2}>
            <Pagination count={count} variant="outlined" shape="rounded" />
        </Stack>
    );
}
