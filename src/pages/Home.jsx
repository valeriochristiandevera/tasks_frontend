import { Paper, Typography, Stack, Box, Chip } from "@mui/material";

function Home() {
  const cards = [
    {
      title: "Express API",
      text: "REST endpoints for task CRUD using structured validation and NeDB persistence.",
    },
    {
      title: "React + MUI",
      text: "Responsive UI with optimistic interactions and clean routing.",
    },
    {
      title: "NeDB Storage",
      text: "File-based JSON data that survives backend restarts with zero external DB setup.",
    },
  ];

  return (
    <Stack spacing={3}>
      <Paper
        sx={{
          p: { xs: 3, md: 5 },
          background: "linear-gradient(125deg, rgba(15,118,110,0.96), rgba(20,184,166,0.9))",
          color: "#fff",
          border: "none",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            width: 260,
            height: 260,
            borderRadius: "50%",
            top: -120,
            right: -60,
            background: "rgba(255,255,255,0.18)",
          }}
        />
        <Stack spacing={2.25} sx={{ position: "relative", zIndex: 1 }}>
          <Chip
            label="ITPE4 Activity"
            sx={{ bgcolor: "rgba(255,255,255,0.2)", color: "white", width: "fit-content" }}
          />
          <Typography variant="h3">NeDB Full-Stack Task Manager</Typography>
          <Typography sx={{ maxWidth: 720, color: "rgba(255,255,255,0.92)" }}>
            Frontend and backend are connected exactly like the guide: React + MUI on port 3000,
            Express + NeDB on port 5000, and Vite proxy routing through <code>/api</code>.
          </Typography>
        </Stack>
      </Paper>

      <Box
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
        }}
      >
        {cards.map((card, index) => (
          <Box key={card.title}>
            <Paper
              sx={{
                p: 3,
                height: "100%",
                animation: `fadeIn 420ms ease ${index * 90}ms both`,
                "@keyframes fadeIn": {
                  from: { opacity: 0, transform: "translateY(10px)" },
                  to: { opacity: 1, transform: "translateY(0)" },
                },
              }}
            >
              <Stack spacing={1}>
                <Typography variant="h6">{card.title}</Typography>
                <Typography color="text.secondary">{card.text}</Typography>
              </Stack>
            </Paper>
          </Box>
        ))}
      </Box>
    </Stack>
  );
}

export default Home;
