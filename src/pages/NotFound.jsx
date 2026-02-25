import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function NotFound() {
  return (
    <Paper sx={{ p: { xs: 3, md: 5 }, textAlign: "center", maxWidth: 700, mx: "auto" }}>
      <Stack spacing={1.5} alignItems="center">
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "4rem", md: "6rem" },
            background: "linear-gradient(135deg, #0f766e, #fb923c)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          404
        </Typography>
        <Typography variant="h5">Page Not Found</Typography>
        <Typography color="text.secondary">
          The page you requested does not exist in this activity project.
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Button component={RouterLink} to="/" variant="contained">
            Go Home
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
}

export default NotFound;
