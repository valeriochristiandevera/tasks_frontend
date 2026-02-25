import { AppBar, Toolbar, Typography, Button, Stack } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/tasks", label: "Tasks" },
];

function Navbar() {
  const location = useLocation();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "rgba(255,255,255,0.78)",
        backdropFilter: "blur(10px)",
        color: "text.primary",
        borderBottom: "1px solid rgba(15,118,110,0.2)",
      }}
    >
      <Toolbar sx={{ minHeight: { xs: 64, md: 72 } }}>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 800 }}>
          NeDB Task Studio
        </Typography>
        <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", justifyContent: "flex-end" }}>
          {links.map((link) => (
            <Button
              key={link.to}
              color={location.pathname === link.to ? "primary" : "inherit"}
              component={RouterLink}
              to={link.to}
              variant={location.pathname === link.to ? "contained" : "text"}
              sx={{
                borderColor: "rgba(15,118,110,0.35)",
                px: 2,
                background:
                  location.pathname === link.to
                    ? "linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)"
                    : "transparent",
                color: location.pathname === link.to ? "#ffffff" : "text.primary",
              }}
            >
              {link.label}
            </Button>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
