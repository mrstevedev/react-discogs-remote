import { useState } from "react";
import { Box } from "@mui/material";
import Purchases from "@/components/Dashboard/Purchases";
import DiscogsSpotlight from "@/components/Card/DiscogsSpotlight";
import Activity from "@/components/Dashboard/Activity";
import Nav from "@/components/Nav/Nav";

const purchaseData = [
    {
        orderId: "1268758-70940",
        seller: "CapturedRecordShop",
        lastActivity: "10 months ago",
        status: "Shipped"
    },
    {
        orderId: "1380443-1893",
        seller: "HipHopMarket",
        lastActivity: "11 months ago",
        status: "Shipped"
    },
    {
        orderId: "334158-34011",
        seller: "rambone",
        lastActivity: "12 months ago",
        status: "Shipped"
    },
    {
        orderId: "291278-25759",
        seller: "BarnyardOrbit",
        lastActivity: "12 months ago",
        status: "Shipped"
    },
    {
        orderId: "869180-7777",
        seller: "sumblo",
        lastActivity: "about 1 year ago",
        status: "Shipped"
    }
];

const activityData = [
    {
        title: "Gato Barbieri - The Legend Of Gato Barbieri",
        action: "added",
        status: "to wantlist",
        timeago: "1 hour ago",
        image: "https://i.discogs.com/0czMFOSt4jmNzj3PBViuvO6Fb-Cjil7psO-j3NUix0c/rs:fill/g:sm/q:40/h:100/w:100/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5Nzky/MzIxLTE2Mjg0NTAz/ODktNzY0OC5qcGVn.jpeg"
    },
    {
        title: "International Rap Syndicate* - Hit Me",
        action: "added",
        status: "to wantlist",
        timeago: "4 days ago",
        image: "https://i.discogs.com/i5xgMn39MVBLYv7O6-d3aFIeq8oLfpCGzbC037uegmo/rs:fill/g:sm/q:40/h:100/w:100/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIzMjIz/NTAtMTMwNTk3NjA3/Ni5qcGVn.jpeg"
    },
    {
        title: "Jack Dieval Quintet - Live At The Comedie Des Champs Elysees",
        action: "added",
        status: "to wantlist",
        timeago: "5 days ago",
        image: "https://i.discogs.com/8V-6Tg4DOnNiYu3r4gwmUM7RZuD9ffRLYIBwSIGmdQQ/rs:fill/g:sm/q:40/h:100/w:100/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYwNDI0/MjUtMTQxOTAyOTY4/NS0zMTY5LmpwZWc.jpeg"
    },
    {
        title: "Oscar Peterson - Oscar Peterson In Paris",
        action: "added",
        status: "to wantlist",
        timeago: "5 days ago",
        image: "https://i.discogs.com/Z2tGbvkqXxtDmowbCPNLjjJ7nbbK1fhXfRegHFwpjHs/rs:fill/g:sm/q:40/h:100/w:100/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY2OTA2/OTctMTYyMzUwNjU0/Ny0zMTExLmpwZWc.jpeg"
    },
    {
        title: "Oscar Peterson - Look Out!",
        action: "added",
        status: "to wantlist",
        timeago: "5 days ago",
        image: "https://i.discogs.com/dYSRtBV3GINpy8AllVE0XcAxn-d074xDEQxXWqnUE1g/rs:fill/g:sm/q:40/h:100/w:100/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTgxNTcy/NzgtMTUwNTc1MDg0/OC02MTQxLmpwZWc.jpeg"
    }
];

export default function Dashboard() {
    const [value, setValue] = useState("1");
    const [purchases] = useState(purchaseData);
    const [activity] = useState(activityData);

    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box display="flex" justifyContent="center" width="85%">
            <Box py={6} px={{ xs: 0, md: 6 }}>
                <Nav />
                <Purchases value={value} purchases={purchases} handleChange={handleChange} />
                <Activity activity={activity} />
            </Box>
            <Box py={6} px={{ xs: 0, md: 6 }} width={{ xs: "100%", md: "20%" }}>
                <DiscogsSpotlight />
            </Box>
        </Box>
    );
}
