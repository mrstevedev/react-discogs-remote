import { IoIosClose } from "react-icons/io";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

import Box from "@mui/material/Box";
import Table from "@mui/material/Table";

import { TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { TabProps } from "@/types";

export default function Purchases({ purchases }: TabProps) {
    const { t } = useTranslation();

    return (
        <Box width="100%" mb="15px">
            <Table size="small" aria-label="purchase table">
                <TableHead>
                    <TableRow style={{ backgroundColor: "#f2f2f2" }}>
                        <TableCell colSpan={2} style={{ textAlign: "left", padding: 10 }}>
                            <Typography fontSize={14} sx={{ fontWeight: "bold" }}>
                                {t("Purchases")}
                            </Typography>
                        </TableCell>
                        <TableCell style={{ textAlign: "right", padding: 10 }}>
                            <IoIosClose size={22} />
                        </TableCell>
                    </TableRow>
                </TableHead>
            </Table>
            <Table size="small" aria-label="purchase table">
                <TableHead>
                    <TableRow style={{ backgroundColor: "#f2f2f2" }}>
                        <TableCell style={{ textAlign: "left", padding: 7 }}>{t("OrderID")}</TableCell>
                        <TableCell style={{ textAlign: "left", padding: 7 }}>{t("Seller")}</TableCell>
                        <TableCell style={{ textAlign: "left", padding: 7 }}>{t("Last Activity")}</TableCell>
                        <TableCell style={{ textAlign: "left", padding: 7 }}>{t("Status")}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody style={{ fontSize: 13 }}>
                    {purchases.map((purchase) => (
                        <TableRow key={purchase.orderId}>
                            <TableCell style={{ textAlign: "left" }}>{purchase.orderId}</TableCell>
                            <TableCell style={{ textAlign: "left" }}>{purchase.seller}</TableCell>
                            <TableCell style={{ textAlign: "left" }}>{purchase.lastActivity}</TableCell>
                            <TableCell style={{ textAlign: "left" }}>{purchase.status}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell colSpan={4} style={{ textAlign: "right" }}>
                            <Link to="/sell/purchases">{t("View")}</Link>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Box>
    );
}
