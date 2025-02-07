import { Box, Card, CardContent, CardHeader } from "@mui/material";
import { IoIosClose } from "react-icons/io";

export default function DiscogsSpotlight() {
  return (
    <Card
      elevation={1}
      variant="outlined"
      sx={{ width: "200%", height: "350px" }}
    >
      <Box display="flex" bgcolor="#F5F5F5" p={2}>
        <CardHeader
          title="Discogs Spotlight"
          sx={{ padding: 0 }}
          slotProps={{
            title: { sx: { fontSize: "16px", fontWeight: "bold" } },
          }}
        />
        <IoIosClose size={24} />
      </Box>
      <CardContent>test</CardContent>
    </Card>
  );
}
