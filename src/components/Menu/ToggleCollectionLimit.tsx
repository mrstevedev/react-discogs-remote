import { Box, Button, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IoChevronDown } from "react-icons/io5";
import { ToggleCollectionLimitProps } from "@/types";

const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "right"
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "right"
        }}
        {...props}
    />
))(({ theme }) => ({
    "& .MuiPaper-root": {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 100,
        color: "rgb(55, 65, 81)",
        boxShadow:
            "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
        "& .MuiMenu-list": {
            padding: "4px 0"
        },
        "& .MuiMenuItem-root": {
            "& .MuiSvgIcon-root": {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5)
            },
            "&:active": {
                backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
            }
        },
        ...theme.applyStyles("dark", {
            color: theme.palette.grey[300]
        })
    }
}));

export default function ToggleCollectionLimit({ open, anchorEl, onClick, onClose, limit }: ToggleCollectionLimitProps) {
    return (
        <Box display="flex" alignItems="center" gap={1}>
            <Typography variant="body2">Show</Typography>
            <Button
                id="demo-customized-button"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="contained"
                color="inherit"
                disableElevation
                onClick={onClick}
                endIcon={<IoChevronDown />}
            >
                {limit}
            </Button>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    "aria-labelledby": "demo-customized-button"
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={onClose}
            >
                <MenuItem onClick={onClose} disableRipple>
                    25
                </MenuItem>
                <MenuItem onClick={onClose} disableRipple>
                    50
                </MenuItem>
                <MenuItem onClick={onClose} disableRipple>
                    100
                </MenuItem>

                <MenuItem onClick={onClose} disableRipple>
                    250
                </MenuItem>
            </StyledMenu>
        </Box>
    );
}
