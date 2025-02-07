import { Box, List, ListItem } from "@mui/material";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export default function Nav() {
    const { t } = useTranslation();
    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <List component="nav" sx={{ display: "flex", fontSize: "14px" }}>
                    <ListItem sx={{ width: "initial" }}>
                        <Link to="/my">{t("Dashboard")}</Link>
                    </ListItem>
                    <ListItem sx={{ width: "initial" }}>
                        <Link to="/collection">{t("Collection")}</Link>
                    </ListItem>
                    <ListItem sx={{ width: "initial" }}>
                        <Link to="/wantlist">{t("Wantlist")}</Link>
                    </ListItem>
                    <ListItem sx={{ width: "initial" }}>
                        <Link to="/lists">{t("Lists")}</Link>
                    </ListItem>
                    <ListItem sx={{ width: "initial" }}>
                        <Link to="/submissions">{t("Submissions")}</Link>
                    </ListItem>
                    <ListItem sx={{ width: "initial" }}>
                        <Link to="/exports">{t("Export")}</Link>
                    </ListItem>
                </List>
            </Box>
        </>
    );
}
