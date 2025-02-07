import { Fragment, useState } from "react";
import { Link } from "react-router";
import CollectionNav from "@/components/Nav/Nav";
import { formatReleaseSlug, getLocalStorage, truncate } from "@/utils";
import { CgVinyl } from "react-icons/cg";
import useFetchCollection from "@/hooks/useFetchCollection";
import { Box, Grid2 as Grid, Pagination, Typography } from "@mui/material";
import ToggleCollectionLimit from "@/components/Menu/ToggleCollectionLimit";

export default function Collection() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [limit, setLimit] = useState<string>(getLocalStorage("limit") || "25");
    const open = Boolean(anchorEl);

    // const { loading, data: collection } = useFetchCollection({ limit });

    const handleOpenLimitMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseLimitMenu = (event: React.MouseEvent<HTMLElement>) => {
        const newLimit = event.currentTarget.textContent;

        if (!newLimit) {
            setAnchorEl(null);
            return;
        }

        setLimit(newLimit);
        setAnchorEl(null);
    };

    // if (loading) return <div />;

    return (
        <Fragment>
            <Box component="main" py={2} mt={4} mb={12} px={{ xs: 1, md: 16.5 }} width={{ xs: "100%", md: "83%" }}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <CollectionNav />
                    <ToggleCollectionLimit
                        open={open}
                        limit={limit}
                        anchorEl={anchorEl}
                        onClick={handleOpenLimitMenu}
                        onClose={handleCloseLimitMenu}
                    />
                </Box>

                <Grid container spacing={2} mt={2} mb={2} sx={{ gridRowGap: "6rem" }}>
                    {collection?.map((item) => {
                        return (
                            <Grid key={item.id} size={{ xs: 6, sm: 6, md: 3.5, lg: 2.5, xl: 1.5 }}>
                                <Link
                                    to={`/release/${item.id}-${formatReleaseSlug(item.artist)}-${formatReleaseSlug(item.title)}`}
                                    state={{
                                        id: item.id,
                                        artist: item.artist,
                                        title: item.title
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={item.thumbnail}
                                        alt={item.title}
                                        width="100%"
                                        height="100%"
                                        borderRadius="8px"
                                        sx={{
                                            transition: "all 0.01s ease-in-out",
                                            objectFit: "cover",
                                            "&:hover": { opacity: 0.9 },
                                            "&:active": { opacity: 0.7 }
                                        }}
                                    ></Box>
                                </Link>
                                <Link
                                    to={`/release/${formatReleaseSlug(item.title)}`}
                                    state={{
                                        id: item.id,
                                        artist: item.artist,
                                        title: item.title
                                    }}
                                >
                                    <Typography fontSize={13}>{truncate(item.title)}</Typography>
                                </Link>
                                <Typography fontSize={12}>{truncate(item.artist)}</Typography>
                                <Typography fontSize={11}>
                                    {item.year} {item.country}
                                </Typography>
                                <Typography fontSize={11} display="flex" alignItems="center">
                                    <CgVinyl size={22} />
                                    {truncate(item.media)}
                                </Typography>
                            </Grid>
                        );
                    })}
                </Grid>
                <Pagination sx={{ padding: "8rem 0 0 0" }} count={10} />
            </Box>
        </Fragment>
    );
}

const collection = [
    {
        id: 1,
        title: "Absolut!",
        artist: "Trio Con Tromba",
        year: "1988",
        country: "Sweden",
        media: "Vinyl - LP, Album",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/1ipj7ZTAIYW3piZKUHOaX-2MZOlMsMCRjxjiheHggZU/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM5NzUw/MDgtMTM1MTA5MzEy/Mi0xNzczLmpwZWc.jpeg"
    },
    {
        id: 2,
        title: "Wynton Marsalis",
        artist: "Wynton Marsalis",
        year: "1982",
        country: "US",
        media: "Vinyl - LP, Album",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/wqkZBADzTgwoDywT1pkdG9gqhWo-4r-KQgp1nHcNHBk/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM5NjMz/My0xNjg4MjcwMjgx/LTkzMjYuanBlZw.jpeg"
    },
    {
        id: 3,
        title: "Now Culture",
        artist: "The Nobodies",
        year: "2024",
        country: "US",
        media: "Vinyl - LP, Album",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/cBj4KyCTfJ3Az5aWxyPWSHB91-YaGaq7CkaHp0CM1vM/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMyMzUx/OTM3LTE3MzIxOTM2/MjctOTkzMy5qcGVn.jpeg"
    },
    {
        id: 4,
        title: "Unreleased 90's Demo EP",
        artist: "Mental Dimension",
        year: "2024",
        country: "UK",
        media: "Vinyl - 12 EP, Limited Edition",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/IvxzhZ25G-uYi-cGLD85NToWtjZFLnavgBotuSxTrCk/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMyNDY2/NjkwLTE3MzMyNjk3/NzQtNzI5My5wbmc.jpeg"
    },
    {
        id: 5,
        title: "Full Moon",
        artist: "Brandy",
        year: "2002",
        country: "US",
        media: "Vinyl - LP, Album",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/VvpSHKUppcPFDKgit9dImJAwyBaqAqXnRT6qC7zvMTw/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxNDQ1/NjEtMTU3NTQxMzMx/MC00Mzg4LmpwZWc.jpeg"
    },
    {
        id: 6,
        title: "Keep It Real",
        artist: "Jamaceia",
        year: "1995",
        country: "US",
        media: 'Vinyl - 12", Promo',
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/yFZ1vFpZonVBkxMDJM5yL5MZwdq3oXDzpvJu2ojKoyE/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1NzM3/MTQtMTIyOTQ1MDMy/Ni5qcGVn.jpeg"
    },
    {
        id: 7,
        title: "I Like It!",
        artist: "Miss Cherokee",
        year: "1999",
        country: "UK",
        media: 'Vinyl - 12" 45 RPM, Single',
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/I0Kv9VP6BQSH4HE9yQmqSuakVNHgnyHqbwTeiDFRLJw/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ4MjY2/MzAtMTQ3Nzg0Njkz/MS02OTgyLmpwZWc.jpeg"
    },
    {
        id: 8,
        title: "You Kill Me/ Bad Boy",
        artist: "Miss Cherokee",
        year: "1999",
        country: "UK",
        media: 'Vinyl - 12" Promo',
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/dAZlOdMWSfLiLluUqs6Wp_xkJMcgTJ3apioOO7qpS0I/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY4MTk1/MDQtMTQ3NjAyMzk1/MC01NTI2LmpwZWc.jpeg"
    },
    {
        id: 9,
        title: "Work To Do",
        artist: "Vaanessa Williams",
        year: "1992",
        country: "US",
        media: 'Vinyl - 12", 33 1/3 RPM, Stereo',
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/DCZ8yelCqvuKEpP5l8XTeFiO19fdvilORVMgfmd_IEs/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI1NTk5/MDQtMTI5MDQ0OTM1/OS5qcGVn.jpeg"
    },
    {
        id: 10,
        title: "Out Here Like This",
        artist: "The Leaders",
        year: "1988",
        country: "Italy",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/GAhXArYU_geCWp6KeFxnOrApTUEVYiJwWC7Yvgr56OE/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM2Nzc4/MzktMTUxNjc1NDU1/Ny0yOTY5LmpwZWc.jpeg"
    },
    {
        id: 11,
        title: "Circles",
        artist: "Steven Huffsteter Quintet",
        year: "1982",
        country: "Japan",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/dGk9b0WQm6_uDEFgSQQasC4mPskW2b4cxVd6tcvRf58/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzMDI3/NjE4LTE1NTc1NzE5/MDItNjE3OC5qcGVn.jpeg"
    },
    {
        id: 12,
        title: "Inside Out",
        artist: "Bob Summer Quintet",
        year: "1984",
        country: "US",
        media: "Vinyl - LP, Stereo",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/rSXcDlpkKb2wXMAyQ4pHQuyr4C4TS-B7KtDLmwZRH8c/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM5NDc4/OTQtMTY1ODc2MjM1/OS01NzA4LmpwZWc.jpeg"
    },
    {
        id: 13,
        title: "Always On The Move",
        artist: "Shirley Jones",
        year: "1986",
        country: "US",
        media: "Vinyl - LP, Album",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/XKJB1KEpPEG1TiOI1Z6n98-l1dMY4T5NUq5grXg6RNw/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTcxNzMw/MS0xNDM2Mjk0NDM0/LTI0NjAuanBlZw.jpeg"
    },
    {
        id: 14,
        title: "Me Myself and I",
        artist: "Cheryl Pepsi Riley",
        year: "1988",
        country: "US",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/PRRD1Gt6AVoqRc_j2XNsb95PGixZFw1JN96ql4n1Q-Q/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3NzUy/OTgtMTYxNDQ4Mzkx/My0yNTUwLmpwZWc.jpeg"
    },
    {
        id: 15,
        title: "Mýa",
        artist: "Mýa",
        year: "1998",
        country: "US",
        media: "Vinyl - LP, Album",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/lUG90OJBdYQtgI6CZZe2Wwee-xQTpU52c0DZzZJ2PZo/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4MzYx/MTUtMTUzNzM0MzUz/NS02OTU4LmpwZWc.jpeg"
    },
    {
        id: 16,
        title: "Roses",
        artist: "Haywoode",
        year: "1985",
        country: "UK",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/g_pCxoHnoKStRkTvfslOpqZ6mbRe0J43eCIUVeekdo4/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyNjEw/NTEtMTIxODk4Mzc2/My5qcGVn.jpeg"
    },
    {
        id: 17,
        title: "Second Chance",
        artist: "Tyler Collins",
        year: "1982",
        country: "Japan",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/fYGTTAIRyHd1CzFKR-4mAEABV1eWHt46383oa_LJtaE/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI5NTQ2/NS0xMzQxMjY3MzQx/LTExNDAuanBlZw.jpeg"
    },
    {
        id: 18,
        title: "Girls Nite Out",
        artist: "Tyler Collins",
        year: "1989",
        country: "US",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/-HwBYuhiUgrhrbfXhreUkvq3qhmemFkNqNTZONfhloA/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExOTU1/MzMtMTI2OTczNTgy/MS5qcGVn.jpeg"
    },
    {
        id: 19,
        title: "Just Make Me The One",
        artist: "Tyler Collins",
        year: "1992",
        country: "US",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/IMiwT5Xs8GeL5GIVCeZgXm9484BrmgQ_v8qX5mB1LBE/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTcwMjc1/OC0xMzE3NzQyMzUy/LmpwZWc.jpeg"
    },
    {
        id: 20,
        title: "Whatcha Gonna Do",
        artist: "Tyler Collins",
        year: "1989",
        country: "US",
        media: 'Vinyl - 12", 33 1/3 RPM, Stereo',
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/jknDFFTDY6C9av89I8dI8OBeQ45qaOpJ_pVoU9Krqzo/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNDI2/MDAtMTI2OTczNjMz/NC5qcGVn.jpeg"
    },
    {
        id: 21,
        title: "Thinking About You",
        artist: "Whitney Houston",
        year: "1985",
        country: "Japan",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/4Lsz0DCfferqj3ODuOKlaIfBTk2vU_xMOmkg1-tCyXs/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg0MDE0/NzctMTQ2MDg5OTgy/Ny04NzM5LmpwZWc.jpeg"
    },
    {
        id: 22,
        title: "Heard Ranier Ferguson",
        artist: "Heard Ranier Ferguson",
        year: "1982",
        country: "US",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/J6eBX-rMypVp1e_pf7rCE8rGCGyhnoKVH9ZK4yVIBEM/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM0NTQy/MjQtMTQ2MzkwOTg5/Mi05MzYyLmpwZWc.jpeg"
    },
    {
        id: 23,
        title: "I've Found Someone Of My Own",
        artist: "The Free Movement",
        year: "1972",
        country: "US",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/Q0mtBD6bAD89Wwt9yS8v2eVHdg3LvmS7DKR2VonbfCo/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyMzIw/MTMtMTQ3MjMwNjg1/MC0zMTg4LmpwZWc.jpeg"
    },
    {
        id: 24,
        title: "Street Priest",
        artist: "Ronald Shannon Jackson",
        year: "1981",
        country: "Germany",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/1hks09DVlrMANwoSgDV_Z_2qI1hJq_sjBYwILmm4bzg/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwODQ3/NTQtMTE5MDkyNzQ1/OC5qcGVn.jpeg"
    },
    {
        id: 25,
        title: "No Wave",
        artist: "Music Revelation Ensemble",
        year: "1980",
        country: "Germany",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/w9v_ERKA9OiyjF0XOKuHm1bxkkME7_nVO18z7XdHTF4/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUxOTM0/Ni0xNDQwMTU4NjYx/LTM5NTMuanBlZw.jpeg"
    },
    {
        id: 26,
        title: "Live At Moers Festival",
        artist: "Sunny Murray Trio",
        year: "1979",
        country: "Germany",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/OcYDMJ2UbI4i9NVRpdjCR6cNaHKaNLwjTMbInOQ0Abo/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2NzMw/MDktMTUxNjIyMjQ4/Ny0zOTQ5LmpwZWc.jpeg"
    },
    {
        id: 27,
        title: "Dedications (II)",
        artist: "Toshiko Akiyoshi Trio",
        year: "1982",
        country: "Japan",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/K8FDAqE4nuWQ0OUok6WXMp2clySZrMyGk53jv7GWgbw/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0NDg0/NTc0LTE1NzU0NzQ5/ODgtNjEwMC5qcGVn.jpeg"
    },
    {
        id: 28,
        title: "Another Place",
        artist: "Fred Anderson Quartet",
        year: "1978",
        country: "Germany",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/trkplvnJ1f50w17SceH5Okhzhfji_Xuu1A9WkjMG5oc/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyNzY5/ODAtMTUxNjY3Mzk2/Ny05MjM2LmpwZWc.jpeg"
    },
    {
        id: 29,
        title: "Waitin' / Foundation",
        artist: "Steven Huffsteter Quintet",
        year: "1996",
        country: "US",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/pDIapdFF3dbpr3u0naOPPJReIXQE9cCRq2sjgfLSWOQ/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTcyNzAy/OS0xMTUyNDUwODE1/LmpwZWc.jpeg"
    },
    {
        id: 30,
        title: "No Way Out",
        artist: "Raucous aka Sabotage",
        year: "1996",
        country: "US",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/6W-TlcfPjS2uDzd7RbT5pMCg3UvUYkqLQZDeS6oHxws/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTgwMTcx/OC0xMTYwMjIyOTI0/LmpwZWc.jpeg"
    },
    {
        id: 31,
        title: "De VARAJAZZ All Stars",
        artist: "De VARAJAZZ All Stars",
        year: "1982",
        country: "Japan",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/-zUfBHe2jgNmvjAuFt9zdZxcwDbALDO7aMEUA1SiKIg/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTcxMDI1/MjktMTU2OTU3NzY1/OS02Mzg5LmpwZWc.jpeg"
    },
    {
        id: 32,
        title: "Blues and Ballads",
        artist: "Brad Mehldau Trio",
        year: "2016",
        country: "Europe",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/ySy4DDA7VYiD1PA-ZoP97YiypXztAzUA4mpr-kTwrxI/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg2MTAx/NzAtMTY1MjIwMzk1/OS01MTM5LmpwZWc.jpeg"
    },
    {
        id: 33,
        title: "To My Son",
        artist: "Walt Dickerson Trio",
        year: "1980",
        country: "Denmark",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/sbBp4tha9rNcUjDFROxa4J2q0lyDotHXommNfrQqrEQ/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMyNjU0/ODctMTMyMzAxOTQ0/MC5qcGVn.jpeg"
    },
    {
        id: 34,
        title: "Beautiful Africa",
        artist: "Beaver Harris 360",
        year: "1979",
        country: "Italy",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/tGrjkcvYmhOcSTrs6HSwoBk383aWIhIOzH3LUe0hO68/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQzMjUy/NjctMTM2MTc5MjQ1/Mi0yMDAzLmpwZWc.jpeg"
    },
    {
        id: 35,
        title: "Mirage",
        artist: "The Awakening",
        year: "2021",
        country: "US",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/0UzivxndIfG3XEDcN6w4a60GDa9vhHCtE3vw5gBlP88/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5NTc2/MDU0LTE2NTA0NjAz/NjEtODA0Mi5qcGVn.jpeg"
    },
    {
        id: 36,
        title: "Hear, Sense And Feel",
        artist: "The Awakening",
        year: "2020",
        country: "US",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/MtK75GTbxZprHh-uK84vZXUlKzvDTd86m4c6_Zh3fFA/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1ODM0/NjY5LTE2NTA0NTky/NDctNjUxOS5qcGVn.jpeg"
    },
    {
        id: 37,
        title: "The Sixth Sense",
        artist: "The Don Pullen Quintet",
        year: "2020",
        country: "US",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/oY5p97ZSBWWe7EIsIMuyDsukUSmIgeRSYDcIlXt_fms/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIwODg3/NjYtMTQ3NTg4MTE3/OC01NjI4LmpwZWc.jpeg"
    },
    {
        id: 38,
        title: "Hand To Hand",
        artist: "George Adams",
        year: "1980",
        country: "US",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/y3H085hJH2Fx2-JBQGEL24Es2wCOhtMqkXSGmrhf94c/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyNTI5/ODYtMTY4MDE3OTY5/NC03Nzc1LmpwZWc.jpeg"
    },
    {
        id: 39,
        title: "An Even Break (Never Give A Sucker)",
        artist: "Sunny Marray",
        year: "1979",
        country: "UK",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/tN7kXpu5YSF4Ye3hZWy-2XH_7SmTo3GuDtZJvzUJVow/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTczNTA4/NC0xNjIxMDgyODIx/LTE3ODUuanBlZw.jpeg"
    },
    {
        id: 40,
        title: "Next Step",
        artist: "Glen Horiuchi",
        year: "1988",
        country: "US",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/NVpghSsGj2Frccd3xrye8oScovfXreVs3Y2dSLmBZOA/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM3NDk0/MjItMTM5MzA1NDc3/NS0zMjM2LmpwZWc.jpeg"
    },
    {
        id: 41,
        title: "In Europe",
        artist: "Jack Walrath Quintet",
        year: "1983",
        country: "Denmark",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/76d-pxrfJ1mBFUpLDiJVl2PXEEWkO98TgS4ffFQ5t-w/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQyNzYy/ODItMTQ3NjQzNjk0/NC02MDY4LmpwZWc.jpeg"
    },
    {
        id: 42,
        title: "Schlaf Schlemmer, Schlaf Magritte",
        artist: "Franz Koglmann Pipetett",
        year: "1985",
        country: "Austria",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/IZ0d6ye2mvoH09lbJ3lsIBgV10wCz1XaHkgv6ZZM4zo/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0Njcw/NjQtMTQwNDMyMDQ2/NS05OTgyLmpwZWc.jpeg"
    },
    {
        id: 43,
        title: "New York Lines",
        artist: "Mwendo Dawa",
        year: "1982",
        country: "Sweden",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/CWfjR-afZQz2vBMA-c9--HMPixFacyOuWukxbkE4MLw/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI5NjYy/ODctMTU2ODY2MjA0/OC03OTA5LmpwZWc.jpeg"
    },
    {
        id: 44,
        title: "The Many Facets Of David Newman",
        artist: "David Newman",
        year: "1969",
        country: "US",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/Wnwv-iasSnAAYurfaPZZLCi1dVIpFg2WCxGUBK-3o6A/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI2MDgy/MjctMTI5Mjk1MDc1/Mi5qcGVn.jpeg"
    },
    {
        id: 45,
        title: "Blacknuss",
        artist: "Rashaan Roland Kirk",
        year: "1972",
        country: "US",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/CrOf5lzGcRICJom2jnmPqW6j8X2vkX3_4oEHCJx_fzo/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYyODMx/OC0xMjI4ODYxNjMw/LmpwZWc.jpeg"
    },
    {
        id: 46,
        title: "Live In Zurich",
        artist: "World Saxophone Quartet",
        year: "1972",
        country: "US",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/bgqLX7DjAmFI3IleBte7uOM7SmnP4rq4n_4-13uZk88/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNTU1/NTIwLTE0OTk5ODQw/OTEtNTkxNi5qcGVn.jpeg"
    },
    {
        id: 47,
        title: "Piano",
        artist: "Herald Svensson",
        year: "1984",
        country: "Sweden",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/TBLTnWo3CP3cEMPEmXFPBSJA359rdC3vWxoLXm4OBXc/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTkzNDU5/MTEtMTQ4Mjc0OTE2/OC0zMDM3Lm1wbw.jpeg"
    },
    {
        id: 48,
        title: "Live At The Bijou",
        artist: "Grover Washington Jr.",
        year: "1977",
        country: "US",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/FduRb81Ez9Fr15TQhk_MrjTXDjNeVLasVHX1iwMub2I/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYyMTQy/Ni0xMjMxNDQ2OTcx/LmpwZWc.jpeg"
    },
    {
        id: 49,
        title: "Alto Madness",
        artist: "Richie Cole",
        year: "1978",
        country: "US",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/2cYI8B7C7P2_HjWb-Cqvdaphsc2zWELCS9yyDHUyXNY/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI4ODU4/ODctMTQxNTI5NzA3/MS04MDE0LmpwZWc.jpeg"
    },
    {
        id: 50,
        title: "I Giganti Del Jazz Vol. 32",
        artist: "Lonnie Smith",
        year: "1981",
        country: "Italy",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/33o0jT51AjkiffEbWwtpDOi6sdf7SlkvsjEvgSvkhUI/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0Nzgx/ODItMTUxNDM4MjY2/My0xNzc1LmpwZWc.jpeg"
    },
    {
        id: 51,
        title: "Tanya's Waltz",
        artist: "Pam Purvis",
        year: "1983",
        country: "US",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/0g5Vp6p2heEGxlIccOKls4_Ebr4HaGDPT5a49qaW-wY/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY4MDA4/OTQtMTQ1NTg0ODkx/My02MDA4LmpwZWc.jpeg"
    },
    {
        id: 52,
        title: "Fanfare For The Warriors",
        artist: "The Art Ensemble Of Chicago",
        year: "1982",
        country: "US",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/KJPwVOuDJYX59b3cWniF7UeAnTMIUV9pLfaQbfWMkqM/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIzNDA1/NTAtMTI3ODE1MTA5/My5qcGVn.jpeg"
    },
    {
        id: 53,
        title: "Students Studies",
        artist: "Cecil Taylor",
        year: "1973",
        country: "Japan",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/EkwRDziQagOCKS0dq2Ay7cWSgW2VSQdoUGDCueOlLA0/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNTg2/MjUtMTMxMjkyOTUx/NS5qcGVn.jpeg"
    },
    {
        id: 54,
        title: "Bouyancy (1976-78)",
        artist: "Tone Jansa Quartet",
        year: "2001",
        country: "UK",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/q-SGC8x1AJWbSAZE47vOrz7UGg6ZzlQUBuIeDRE4KVQ/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ1MTk0/NDctMTM2ODM2OTQ0/MS01NjU0LmpwZWc.jpeg"
    },
    {
        id: 55,
        title: "Something Borrowed, Something Blue",
        artist: "Tommy Flanagan",
        year: "2001",
        country: "UK",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/TgoblgbYBfSGDlS4HpIBmb2Peg4zXZ8z5cDdfp4u6gs/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIzOTY3/MjktMTM0NzU2MzAx/Ni04MDE2LmpwZWc.jpeg"
    },
    {
        id: 56,
        title: "Solo",
        artist: "Cecil Taylor",
        year: "2001",
        country: "UK",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/S6vYQiAq8E8p1WWxco1t7VcUYRloj3lMKKxleDPFDVY/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyMDIx/ODgtMTY2MjAzODUw/Ni00NzU0LmpwZWc.jpeg"
    },
    {
        id: 57,
        title: "Hannibal In Antibes",
        artist: 'Marvin "Hannibal" Peterson / George Adams / Diedre Murray / Steve Neil / Makaya Ntshoko',
        year: "1978",
        country: "US",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/sg1mWJoxu6gjBUPORS6qzte4OT9I6HiCmuluIDHlPCg/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI2MTc3/NzUtMTQ2ODY1MjQy/Ni0zMjE3LmpwZWc.jpeg"
    },
    {
        id: 58,
        title: "Answering",
        artist: "Rebop",
        year: "1989",
        country: "Germany",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/vrSGMkKtUO84ATW-qvCm3WLPHspGNvxhg1PNtUf-TaY/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMxNjAx/MzItMTMxODUwNjk4/OC5qcGVn.jpeg"
    },
    {
        id: 59,
        title: "Juvia",
        artist: "Diederik Wissels",
        year: "1984",
        country: "Netherlands",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/VOq9jjKmaofKDi4XiGUYdEaGTUZR7mzFG5nql-UzCaw/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI2Mzg4/NjEtMTI5NDQ4NjE4/OS5qcGVn.jpeg"
    },
    {
        id: 60,
        title: "In The Tradition",
        artist: "Bob Mover",
        year: "1981",
        country: "US",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/mx2aD5qLASFaK4R_f4DTW1V1NkC47DLJRT2D9N6Zgfo/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU0MjU4/NjItMTUyMzQ1NTY5/MS03NjU1LmpwZWc.jpeg"
    },
    {
        id: 61,
        title: "The Trio 1",
        artist: "Cedar Walton",
        year: "1986",
        country: "Netherlands",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/Qzg8oy2DBPrl5S_YIZfYZ1QpEQabv-Jml8gEuM0wnMQ/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ0OTMx/ODktMTU1MTcwMjYw/OC00NjU4LmpwZWc.jpeg"
    },
    {
        id: 62,
        title: "Notorious Tourist From The East",
        artist: "Toshiko Akiyoshi",
        year: "1980",
        country: "US",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/4gquEbR6rc_Z1naJu4_rbtoyTEv-wc3qaKE3H_Ov4NI/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ1OTc3/ODAtMTU3ODg4NDU1/Ni03OTExLmpwZWc.jpeg"
    },
    {
        id: 63,
        title: "What Happened",
        artist: "Rosset Meyer Geiger",
        year: "2010",
        country: "Switzerland",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/NLOBqk-A_RWkqL14aFSAs90TGJTlKj7MbODZcI4vlgw/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMwNjE2/NDgtMTY3NTI0MzAw/Mi0xMDA5LmpwZWc.jpeg"
    },
    {
        id: 64,
        title: "Tenor Gladness",
        artist: "Lew Tebackin",
        year: "1979",
        country: "US",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/vcKQksFG9kA40WmmT1SprA3M2S0WYueOWbCDtLESMM8/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQzNTE0/MjAtMTQzMzI1MTA4/OC03NjIyLmpwZWc.jpeg"
    },
    {
        id: 65,
        title: "How Long This Time? Live 1970",
        artist: "The Keith Tippett Group",
        year: "2023",
        country: "UK",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/6IijkLfcK3LWhyJSdp4e3BHGUr376FE68VVDd93NVsU/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI1OTE3/Nzg3LTE2NzQ5ODE0/MzItMjk2MC5qcGVn.jpeg"
    },
    {
        id: 66,
        title: "Tommy Koverhult & Jan Wallgren Quintet",
        artist: "Tommy Koverhult",
        year: "1975",
        country: "Sweden",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/Vne7MgHUZap7F9gEHojPBs6XA70z6kwLQTrvnxKaKz4/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM0MTE3/MTAtMTM5MzUxMTcy/MC0xMTg0LmpwZWc.jpeg"
    },
    {
        id: 67,
        title: "September Night",
        artist: "Tomasz Stanko Quartet",
        year: "2024",
        country: "Europe",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/X2tiMfTRCKBKc3CMh4H1UIZbupBLjBk0GX2kKMR2560/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMxMTMy/ODQ0LTE3MjExNjUy/OTItODIwMS5qcGVn.jpeg"
    },
    {
        id: 68,
        title: "Firm Roots",
        artist: "Clifford Jordan And The Magic Triangle",
        year: "1975",
        country: "Denmark",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/5a9rkyUmD2X64mF_5Df2oSgOVZixNoZwXn80ym8QrPQ/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM3Nzgx/NzUtMTYxMDIwMzQ1/OC01MzYzLmpwZWc.jpeg"
    },
    {
        id: 69,
        title: "Live At Nefertiti",
        artist: "Tommy Koverhult Quintet",
        year: "1985",
        country: "Sweden",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/257xTHNc1b8-7KDjY-8ZUE_r9DTjZ5Gyfg9omkcNhbE/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY3ODU4/ODktMTUwMjgxNzA1/My00NzExLm1wbw.jpeg"
    },
    {
        id: 70,
        title: "Knalledonia",
        artist: "Per Henrik Wallin Tentet",
        year: "1984",
        country: "Sweden",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/RTtMzBVGqRDqG_P2zTMu72548tFiG9vygGMl-4SF4Fs/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNDUx/NjQ3LTE1MTY1NjEx/MzQtNTQxMS5qcGVn.jpeg"
    },
    {
        id: 71,
        title: "Renaissance",
        artist: "Branford Marsalis",
        year: "1987",
        country: "US",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/q5FdTBpa32PN0P45dYDZOv_JPYAxhd6juwySFBovdGw/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1NTI1/OTctMTUxODQ2MTUw/NS0xNzkxLmpwZWc.jpeg"
    },
    {
        id: 72,
        title: "Solo Piano",
        artist: "Don Pullen",
        year: "1975",
        country: "Canada",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/J7DKuK8Qddl6fousvw28C-ZC_UWLGTpl2VQK79hbAy4/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyNTMy/NDctMTU5MDI0Njg0/Ni05MDI2LmpwZWc.jpeg"
    },
    {
        id: 73,
        title: "Tete!",
        artist: "The Tete Montoliu Trio",
        year: "1975",
        country: "Denmark",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/rHXAymAm7_JUn_FFGpKJda-tGFPpwxDjXjBvBBnuLjQ/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ0MTM4/NjctMTQwMTEyMzcx/MC01ODE1LmpwZWc.jpeg"
    },
    {
        id: 74,
        title: "Still life And Old Dreams",
        artist: "George Roesseler",
        year: "1985",
        country: "US",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/BGlOuATiHZgAo5HZHJywrMGJY7GL34guq49kmg3Il20/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM4Mzk1/NzItMTY2MTEzMzc1/OC02ODg4LmpwZWc.jpeg"
    },
    {
        id: 75,
        title: "Danse",
        artist: "Colin vallon Trio",
        year: "2017",
        country: "Germany",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/E5KfrUVj9gqrjtPPQW0AV66w8ksyTmWcn7OxbK6iJXU/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk2OTk5/NzUtMTQ4NDk5NTYy/NC02MDE0LmpwZWc.jpeg"
    },
    {
        id: 76,
        title: "Fatum",
        artist: "Martin Ehlers Trio",
        year: "2017",
        country: "Germany",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/3uu3W2Qj_6DknweVCm8GuB0qjuvZ4hCVqEiQQ1EIo6I/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY3Nzc1/MjgtMTU5MDc0NTE1/Ny04NTY4LmpwZWc.jpeg"
    },
    {
        id: 77,
        title: "Mal, Dance, And Soul",
        artist: "Mal Waldron Trio",
        year: "1988",
        country: "Germany",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/QHKo4Z3LuQho5g3zd_yp82iyPui866wkzo6HXsam3fo/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM0NDc4/OTktMTUzOTcxOTk4/NC0zNzg3LmpwZWc.jpeg"
    },
    {
        id: 78,
        title: "Spihumonesty",
        artist: "Muhal Richard Abrams",
        year: "1980",
        country: "Italy",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/DxJ2O721uO9yehE-XgV9ZV6S5OcP6lX4u1YaEIDadek/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4NTQ5/NDctMTMxODE5MjUw/NC5qcGVn.jpeg"
    },
    {
        id: 79,
        title: "Windsong",
        artist: "Sathima Bea Benjamin",
        year: "1986",
        country: "US",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/CZz0rJHu-iEkGRlL356TU7wy-iSSKXkUgZsKMF_rhC4/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTk3/NTEtMTUyOTUwNjI0/MS00NzE1LmpwZWc.jpeg"
    },
    {
        id: 80,
        title: "Windsong",
        artist: "Sathima Bea Benjamin",
        year: "1986",
        country: "US",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/QdIVsm4FQ-YTkpo5to3bSjm-aR9hXS7JmL1NG0hysHc/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc0NTUz/MDAtMTQ0MTgyNDA5/Ni04NTg1LmpwZWc.jpeg"
    },
    {
        id: 81,
        title: "Da BlabberMouf LP",
        artist: "Blabbermouf",
        year: "2015",
        country: "Germany",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/FuDbaLMmXEFTG9TwWjH_sDLBuXCwoTYHqLJSz1MVV9g/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY5ODA0/NjUtMTQzMjY3Njcy/NS05NDQzLmpwZWc.jpeg"
    },
    {
        id: 82,
        title: "Witchi-Tai-To",
        artist: "Jan Garbarek",
        year: "2015",
        country: "Germany",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/ZVu0s-Ojwnd-342ILvpnwLwBNlN0A6thQkQj60Ne_0E/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM3NDYy/OC0xMzA1ODIzNTEy/LmpwZWc.jpeg"
    },
    {
        id: 83,
        title: "Depth Of Field",
        artist: "Robin Shier Quintet",
        year: "1989",
        country: "Canada",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/eiNvDkRZIFRnaI-Ud3MfCyjJMGJnXB3be53SnaGsPGs/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExMTUx/MjA5LTE1MTA4NDM3/NDktMzE2MS5qcGVn.jpeg"
    },
    {
        id: 84,
        title: "Wayfarer",
        artist: "Jan Garbarek Group",
        year: "1983",
        country: "Germany",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/u8diY9KE3rUbw_MrHqsFIkVbUm1YPEsfW7SYcV4CGDE/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwOTkz/NDQtMTU5NDUzNzQ4/MC0xNjg5LmpwZWc.jpeg"
    },
    {
        id: 85,
        title: "A Tribute To Mal Waldron",
        artist: "Yosuke Yamashita Trio",
        year: "1980",
        country: "Germany",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/dYcUVquYAlWX8X2dkN_qB2Yd6rgjZVgXnLYfHZhhqLk/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM5NTky/NTEtMTU5NDUzNzA4/OS04MDAzLmpwZWc.jpeg"
    },
    {
        id: 86,
        title: "Beyond The Forest Of Mirkwood",
        artist: "Ken Werner",
        year: "1980",
        country: "Germany",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/JMMlOiJagYENOb1HSMobwtB-HNIhuAbeLsIjH9WTCyk/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMxNjY5/MzQtMTMxODc4NTY2/OC5qcGVn.jpeg"
    },
    {
        id: 87,
        title: "Back To The City",
        artist: "The Art Farmer/Benny Golson Jazztet Featuring",
        year: "1986",
        country: "US",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/M67DhNhnAoFN5Iul1N4Parh9lpn6SQJl_NC1ADMBps4/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUyMTYx/NDQtMTM4NzczNzAx/NC0xMTUxLmpwZWc.jpeg"
    },
    {
        id: 88,
        title: "Blackwavefunk",
        artist: "Moniquea",
        year: "2017",
        country: "US",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/XAUITw7wEOsGQBSATkvpNc7VXFnUaG6wgM0Sj-V-RLI/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMTI1/NDUxLTE0OTIwNjk0/ODktNzMwMC5qcGVn.jpeg"
    },
    {
        id: 89,
        title: "On Repeat",
        artist: "Moniquea",
        year: "2022",
        country: "Europe",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/ui4leeepOGMojjAKrcOGdndxfwXmX-CQ709wBYJNA9c/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIzMjEw/NTc2LTE2NTI0Mzk5/NDctOTQzNi5wbmc.jpeg"
    },
    {
        id: 90,
        title: "Los Robles & Washington",
        artist: "Moniquea",
        year: "2020",
        country: "US",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/F8BFyJOblFk3la-zGQy416mjf9lTQPWlLS_nfDoouBY/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0OTI3/NDgwLTE1ODQyMjQ0/MTgtODkwMy5qcGVn.jpeg"
    },
    {
        id: 91,
        title: "Open Stream",
        artist: "Fred Raulston",
        year: "1979",
        country: "US",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/Z85ycOlB2d3iHfjjZHmFk_3jSvF6rSJdHa1jShBHzGE/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU1NzYz/ODktMTM5NzAwMjY3/NC00ODQ3LmpwZWc.jpeg"
    },
    {
        id: 92,
        title: "Nidhamu (Live In Egypt Vol. II)",
        artist: "Sun Ra And His Astro-Intergalactic-Infinity-Arkestra",
        year: "2020",
        country: "UK",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/eWuBXf2ur_xAPonjiXmL0vr7DRno8_bt-g6Ge-tydJs/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2MTYw/NDcwLTE2MDQ0Nzc5/ODMtNTU2Ny5qcGVn.jpeg"
    },
    {
        id: 93,
        title: "New Realm Compilation",
        artist: "Blank Fasiz",
        year: "2020",
        country: "Belgium",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/u9OKR3EYMuQBiCcvLbnYRq5_QUQAhb_5CNu_qn2Ewf8/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1NTYw/NDMxLTE1OTg2NDgw/ODktODAyNC5qcGVn.jpeg"
    },
    {
        id: 94,
        title: "Sessions EP",
        artist: "Combined Operation",
        year: "2019",
        country: "Belgium",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/9fIbDM7DUkStIl5sHl3ob5ye8Yg4qBBkL7uUAr_WW3o/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0MTQw/MTIxLTE1NzU4MzY1/MzgtNTQyOS5qcGVn.jpeg"
    },
    {
        id: 95,
        title: "Another Time",
        artist: "Alan Broadbent Trio",
        year: "1987",
        country: "US",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/O4gBGaxjfBEsE_b690XCpI_39wsyPXxt-8oO4ErjOys/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMTgx/MjY1LTE0OTI5NzE2/MjgtMzEwNy5qcGVn.jpeg"
    },
    {
        id: 96,
        title: "Mécanique Mentale - Piano Solo",
        artist: "Yves Hasselmann",
        year: "1980",
        country: "France",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/YDfBkqObAhjAwAUitkMv7EgjG6l-93ovBuomg5ADM1Y/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMzNzk1/MzMtMTcxOTIxNjAy/OS00MjQ3LmpwZWc.jpeg"
    },
    {
        id: 97,
        title: 'Plays "It Feels So Good"',
        artist: "Mélanie Jazz Sextet",
        year: "1975",
        country: "France",
        media: "Vinyl - LP",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/ACrUg3aDWk3On_OhwtCEelqjltCsq3Cr9MHq7u2sB8Y/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3OTI4/MDAtMTI0MzY5NDQx/MS5qcGVn.jpeg"
    },
    {
        id: 98,
        title: "No Way Out",
        artist: "Docta Bec",
        year: "2014",
        country: "Belgium",
        media: "Vinyl - LP, Compilation",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/bnIuChi84PyFiE7Nd44ac0tgEVbj3HJ4ilnaE4CHeiY/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYyNzY2/MDEtMTQzNTM4Njk1/NC0xODc1LmpwZWc.jpeg"
    },
    {
        id: 99,
        title: "Blunted Beats Vol.3",
        artist: "Foka",
        year: "2013",
        country: "UK",
        media: 'Vinyl - 7", 45 RPM',
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/PRdCcmekm145nN874lKDIMYnRXD0dBYcromHQoRgmsE/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUwMzU3/MjUtMTM4MjczODE1/Ny0yNDkyLmpwZWc.jpeg"
    },
    {
        id: 100,
        title: "Str8 Off The DAT",
        artist: "Adagio!",
        year: "2024",
        country: "Europe",
        media: "Vinyl - LP, Compilation",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/Qu7RYM-KraOMAfJLkkBNE3fji9_HFrgmOvXZ0hpbYZU/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMwNjM1/MTU4LTE3MTUyNzk0/NDQtMjY5Mi5qcGVn.jpeg"
    },
    {
        id: 101,
        title: "The Double O",
        artist: "Dooley O & !",
        year: "2023",
        country: "UK",
        media: "Vinyl - LP, Compilation",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/41GssuGFLe74PzZdKO_Jc94KI3uDNPGhdxKj9ORATaA/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI1NzAz/MDQxLTE2NzMxNzc5/NjItMjM4MC5qcGVn.jpeg"
    },
    {
        id: 102,
        title: "Better Late Than Never",
        artist: 'Cool "Cal-S.K.I." The Street Kid Intellect',
        year: "2024",
        country: "UK",
        media: "Vinyl - LP, Compilation",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/41GssuGFLe74PzZdKO_Jc94KI3uDNPGhdxKj9ORATaA/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI1NzAz/MDQxLTE2NzMxNzc5/NjItMjM4MC5qcGVn.jpeg"
    },
    {
        id: 103,
        title: "Underground Hip-Hop Power Move Demo Vol 2",
        artist: "Thunder Jam Alliance",
        year: "2024",
        country: "UK",
        media: "Vinyl - LP, Compilation",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/cVdDLlba59Hulz0eUdHIzjpZqG5H99wdr2pnGV3IE7c/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMwODg4/MjgyLTE3MTc2ODY3/NjEtNTY2NC5qcGVn.jpeg"
    },
    {
        id: 104,
        title: "Underground Hip-Hop Power Move Demo Vol 1",
        artist: "Thunder Jam Alliance",
        year: "2024",
        country: "UK",
        media: "Vinyl - LP, Compilation",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/FQTh3SeS2RgxgG4ACu6UB8Sds80Pr-kpnKA-caxNNFk/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMwMjIy/NzE2LTE3MTE1NTIw/MTUtMTYzNS5qcGVn.jpeg"
    },
    {
        id: 105,
        title: "The 1994-1996 Unreleased Demos EP",
        artist: "Musa Allah",
        year: "2024",
        country: "UK",
        media: "Vinyl - LP, Compilation",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/hgok_sWDCi-Ht7wD41uv0jgbdEu9mvwLBAP8FpCe4Io/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMwMjIy/NDE5LTE3MTE1NTE2/NzEtNDUzNS5qcGVn.jpeg"
    },
    {
        id: 106,
        title: "The Shu-Box Demos '93-'97 EP",
        artist: "Rich Blak",
        year: "2023",
        country: "UK",
        media: "Vinyl - LP, Compilation",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/rHaPS3YCUlxJz26unbmP5cJy4onW6qfrYc43byNIoNA/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTUw/MzY1LTE2ODgyNDAy/NjktNzE4Ny5qcGVn.jpeg"
    },
    {
        id: 107,
        title: "Flip Da Script - The 90's Demos EP",
        artist: "Rich Blak",
        year: "2023",
        country: "UK",
        media: "Vinyl - LP, Compilation",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/ctPJMR4SzuR0voMMg7kck9RroC-SfdY424KJUTv4lfg/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NTUw/NjY4LTE3MjM2NjQ2/MzktMjgwMy5qcGVn.jpeg"
    },
    {
        id: 108,
        title: "Funky Divas",
        artist: "En Vogue",
        year: "2023",
        country: "Europe",
        media: "Vinyl - LP, Compilation",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/Jr8462MkOouged40RI8rp3pXZFBqyCTciyNgOq7EP0M/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI2MjA5/OTMxLTE2NzcyNTA4/NzQtMjg1MC5qcGVn.jpeg"
    },
    {
        id: 109,
        title: "Dreamin' / Geronimo",
        artist: "Gianni Oddi",
        year: "2023",
        country: "Italy",
        media: "Vinyl - LP, Compilation",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/lpCEi9k4YbFEqaIPLzgcCd2tySFOSY49cYQh5HmqVH0/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI1OTEw/NDA3LTE2NzQ4OTc1/NjQtMjI1NC5qcGVn.jpeg"
    },
    {
        id: 110,
        title: "The 5th Power",
        artist: "Lester Bowie",
        year: "1978",
        country: "Italy",
        media: "Vinyl - LP, Compilation",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/qnlr4ZZDn0-gnApiKrj3qTMweLZXSGDxjIvCJV8pAuU/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExMjM1/MDMtMTMxODE4ODg2/Ny5qcGVn.jpeg"
    },
    {
        id: 111,
        title: "I Feel It / Beez Like That (Sometimes) / Funkorama (Remix)",
        artist: "L.O.D. (4)",
        year: "1996",
        country: "US",
        media: "Vinyl - LP, Compilation",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/-BFcN4n3rlwTAW86nD-ru7XV3_WNuEZvcC46lbLldYw/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMxMzQz/OS0xNjY3NzU1NjE0/LTE2MDguanBlZw.jpeg"
    },
    {
        id: 112,
        title: "Casualties Of War",
        artist: "Eric B. & Rakim",
        year: "1992",
        country: "US",
        media: "Vinyl - LP, Compilation",
        icon: CgVinyl,
        thumbnail:
            "https://i.discogs.com/54OSpBVXvnG2VMHHz_uF-VOv0JTQamDF6DgLL1tkQhA/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTcxNjEx/My0xMjk0NDMyMzU0/LmpwZWc.jpeg"
    }
];
