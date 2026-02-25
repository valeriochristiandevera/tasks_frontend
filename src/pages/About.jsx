import { Paper, Typography, Stack, Box, Chip } from "@mui/material";

function About() {
  const points = [
    "Backend: Express with NeDB datastore in server/data/tasks.db",
    "Frontend: React + MUI with API service layer and route-based pages",
    "Proxy: Vite forwards /api requests to localhost:5000 during development",
  ];

  return (
    <Paper sx={{ p: { xs: 3, md: 4 } }}>
      <Stack spacing={2.5}>
        <Chip
          label="Architecture"
          color="primary"
          variant="outlined"
          sx={{ width: "fit-content", fontWeight: 700 }}
        />
        <Typography variant="h4">How This Activity Is Built</Typography>
        <Typography color="text.secondary">
          This follows the ITPE4 NeDB full-stack pattern: a file-based NoSQL backend and a
          component-based frontend connected through a clean API layer.
        </Typography>
        <Box sx={{ display: "grid", gap: 1.5 }}>
          {points.map((point, index) => (
            <Box
              key={point}
              sx={{
                p: 2,
                borderRadius: 2,
                border: "1px solid rgba(15,118,110,0.18)",
                background: "rgba(255,255,255,0.7)",
                animation: `slideIn 420ms ease ${index * 90}ms both`,
                "@keyframes slideIn": {
                  from: { opacity: 0, transform: "translateX(-10px)" },
                  to: { opacity: 1, transform: "translateX(0)" },
                },
              }}
            >
              <Typography>{point}</Typography>
            </Box>
          ))}
        </Box>
      </Stack>
    </Paper>
  );
}

export default About;
