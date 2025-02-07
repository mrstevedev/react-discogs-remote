import { Box } from "@mui/material";
import { Link } from "react-router";
import { Fragment } from "react/jsx-runtime";

export default function Image() {
    return (
        <Fragment>
            <Box>
                <img
                    src="https://i.discogs.com/UsHplaQkhxapg5vVa0Q1N6Jqm4ufOCDzyRU_3nb3gZw/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMyMzUx/OTM3LTE3MzIxOTM2/MjctOTkzMy5qcGVn.jpeg"
                    alt="The Nobodies"
                    style={{ borderRadius: "8px" }}
                    width="150"
                    height="150"
                />
            </Box>
            <Link to="#">More Images</Link>
        </Fragment>
    );
}
