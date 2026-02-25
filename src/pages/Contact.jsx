import { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Alert,
  Chip,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim() || !form.email.includes("@")) {
      next.email = "Valid email required";
    }
    if (!form.message.trim()) next.message = "Message is required";
    return next;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    console.log("Form submitted:", form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Alert severity="success" sx={{ mt: 2, maxWidth: 720, mx: "auto" }}>
        Thank you! Your message has been sent.
      </Alert>
    );
  }

  return (
    <Paper sx={{ p: { xs: 3, md: 4 }, maxWidth: 820, mx: "auto" }}>
      <Box sx={{ display: "grid", gap: 3, gridTemplateColumns: { xs: "1fr", md: "1.1fr 1fr" } }}>
        <Stack spacing={1.5}>
          <Chip
            label="Contact"
            color="secondary"
            variant="outlined"
            sx={{ width: "fit-content", fontWeight: 700 }}
          />
          <Typography variant="h4">Send a Message</Typography>
          <Typography color="text.secondary">
            This page includes client-side validation from the guide. You can extend it to save
            messages in another backend route later.
          </Typography>
        </Stack>

        <form onSubmit={handleSubmit}>
          <Stack spacing={2.25}>
            <TextField
              name="name"
              label="Full Name"
              fullWidth
              value={form.name}
              onChange={handleChange}
              error={Boolean(errors.name)}
              helperText={errors.name || ""}
            />
            <TextField
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              value={form.email}
              onChange={handleChange}
              error={Boolean(errors.email)}
              helperText={errors.email || ""}
            />
            <TextField
              name="message"
              label="Message"
              multiline
              rows={4}
              fullWidth
              value={form.message}
              onChange={handleChange}
              error={Boolean(errors.message)}
              helperText={errors.message || ""}
            />
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              Send Message
            </Button>
          </Stack>
        </form>
      </Box>
    </Paper>
  );
}

export default Contact;
