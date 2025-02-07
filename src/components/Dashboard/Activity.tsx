import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { IoIosClose } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { displayActivityStatus } from "@/utils";

export type ActivityProps = {
  activity: Activity[];
};

export type Activity = {
  title: string;
  action: string;
  status: string;
  timeago: string;
  image: string;
};

export default function Activity({ activity }: ActivityProps) {
  const { t } = useTranslation();
  return (
    <Box sx={{ width: "100%" }}>
      <Table size="small" aria-label="activity table">
        <TableHead>
          <TableRow style={{ backgroundColor: "#f2f2f2" }}>
            <TableCell colSpan={2} style={{ textAlign: "left", padding: 10 }}>
              <Typography fontSize={14} sx={{ fontWeight: "bold" }}>
                {t("Activity")}
              </Typography>
            </TableCell>
            <TableCell style={{ textAlign: "right", padding: 7 }}>
              <IoIosClose size={22} />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {activity.map((row) => (
            <TableRow
              key={row.title}
              sx={{
                "&:nth-of-type(even)": { backgroundColor: "#f2f2f2" },
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell colSpan={1} style={{ textAlign: "left", padding: 4 }}>
                <img src={row.image} alt={row.title} width={28} height={28} />
              </TableCell>
              <TableCell
                style={{ textAlign: "left", padding: 4, width: "100%" }}
              >
                {displayActivityStatus(row)}
              </TableCell>
              <TableCell style={{ textAlign: "left", padding: 4 }}></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
