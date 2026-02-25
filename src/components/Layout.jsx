import { Container, Box, Typography } from "@mui/material";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <Box sx={{ minHeight: "100vh", position: "relative", overflowX: "clip" }}>
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: -120,
          left: -120,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(20,184,166,0.26), rgba(20,184,166,0))",
          filter: "blur(6px)",
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          bottom: -180,
          right: -80,
          width: 360,
          height: 360,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(251,146,60,0.24), rgba(251,146,60,0))",
          filter: "blur(8px)",
        }}
      />
      <Navbar />
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 3, md: 5 },
          minHeight: "80vh",
          position: "relative",
          animation: "fadeUp 420ms ease-out",
          "@keyframes fadeUp": {
            from: { opacity: 0, transform: "translateY(10px)" },
            to: { opacity: 1, transform: "translateY(0)" },
          },
        }}
      >
        {children}
      </Container>
      <Box
        component="footer"
        sx={{
          py: 2.5,
          textAlign: "center",
          color: "text.secondary",
          borderTop: "1px solid rgba(15,118,110,0.15)",
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.7), rgba(255,255,255,0.92), rgba(255,255,255,0.7))",
          backdropFilter: "blur(8px)",
          position: "relative",
        }}
      >
        <Typography variant="body2">ITPE4 NeDB Full-Stack Activity</Typography>
      </Box>
    </Box>
  );
}

export default Layout;
