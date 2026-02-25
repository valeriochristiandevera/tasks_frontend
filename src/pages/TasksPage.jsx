import { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  Chip,
  CircularProgress,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Paper,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { createTask, deleteTask, getTasks, updateTask } from "../services/api";

function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [priority, setPriority] = useState("medium");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (event) => {
    event.preventDefault();
    if (!newTitle.trim()) return;

    try {
      const task = await createTask(newTitle, priority);
      setTasks((prev) => [task, ...prev]);
      setNewTitle("");
      setPriority("medium");
      setSnackbar({ open: true, message: "Task added", severity: "success" });
    } catch (err) {
      setSnackbar({ open: true, message: err.message, severity: "error" });
    }
  };

  const handleToggle = async (task) => {
    try {
      const updated = await updateTask(task._id, { completed: !task.completed });
      setTasks((prev) => prev.map((t) => (t._id === task._id ? updated : t)));
    } catch (err) {
      setSnackbar({ open: true, message: err.message, severity: "error" });
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      setTasks((prev) => prev.filter((task) => task._id !== id));
      setSnackbar({ open: true, message: "Task deleted", severity: "info" });
    } catch (err) {
      setSnackbar({ open: true, message: err.message, severity: "error" });
    }
  };

  const colorByPriority = (value) => {
    if (value === "high") return "error";
    if (value === "low") return "success";
    return "warning";
  };

  const completedCount = tasks.filter((task) => task.completed).length;
  const openCount = tasks.length - completedCount;

  return (
    <Paper sx={{ p: { xs: 2.5, md: 3.5 } }}>
      <Stack spacing={3}>
        <Stack spacing={1}>
          <Typography variant="h4">Task Manager</Typography>
          <Typography color="text.secondary">
            Create, update, and delete tasks. Data is stored in NeDB and stays after server restarts.
          </Typography>
        </Stack>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.2}>
          <Chip label={`Total: ${tasks.length}`} color="primary" variant="outlined" />
          <Chip label={`Open: ${openCount}`} color="warning" variant="outlined" />
          <Chip label={`Completed: ${completedCount}`} color="success" variant="outlined" />
        </Stack>

        <Box component="form" onSubmit={handleAdd}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
            <TextField
              label="Task title"
              value={newTitle}
              onChange={(event) => setNewTitle(event.target.value)}
              fullWidth
              placeholder="Enter a task title"
            />
            <TextField
              select
              label="Priority"
              value={priority}
              onChange={(event) => setPriority(event.target.value)}
              sx={{ minWidth: { sm: 150 } }}
            >
              <MenuItem value="low">Low</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="high">High</MenuItem>
            </TextField>
            <Button
              type="submit"
              variant="contained"
              startIcon={<AddIcon />}
              sx={{
                background: "linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)",
                minWidth: { sm: 140 },
              }}
            >
              Add Task
            </Button>
          </Stack>
        </Box>

        <Divider />

        {loading && (
          <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
            <CircularProgress />
          </Box>
        )}

        {!loading && error && <Alert severity="error">{error}</Alert>}

        {!loading && !error && tasks.length === 0 && (
          <Alert severity="info">No tasks yet. Add your first task.</Alert>
        )}

        {!loading && !error && tasks.length > 0 && (
          <List>
            {tasks.map((task, index) => (
              <ListItem
                key={task._id}
                sx={{
                  border: "1px solid rgba(15,118,110,0.17)",
                  borderRadius: 2,
                  mb: 1.1,
                  backgroundColor: "rgba(255,255,255,0.72)",
                  animation: `reveal 300ms ease ${index * 55}ms both`,
                  "@keyframes reveal": {
                    from: { opacity: 0, transform: "translateY(8px)" },
                    to: { opacity: 1, transform: "translateY(0)" },
                  },
                }}
                secondaryAction={
                  <IconButton edge="end" color="error" onClick={() => handleDelete(task._id)}>
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemIcon>
                  <Checkbox checked={Boolean(task.completed)} onChange={() => handleToggle(task)} />
                </ListItemIcon>
                <ListItemText
                  primary={task.title}
                  secondary={
                    <Stack direction="row" spacing={1} sx={{ mt: 0.5 }}>
                      <Chip
                        label={(task.priority || "medium").toUpperCase()}
                        size="small"
                        color={colorByPriority(task.priority)}
                      />
                      {task.completed && (
                        <Chip label="Done" size="small" color="success" variant="outlined" />
                      )}
                    </Stack>
                  }
                  sx={{
                    textDecoration: task.completed ? "line-through" : "none",
                    opacity: task.completed ? 0.7 : 1,
                  }}
                />
              </ListItem>
            ))}
          </List>
        )}
      </Stack>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={2500}
        onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
      >
        <Alert severity={snackbar.severity} variant="filled" sx={{ width: "100%" }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Paper>
  );
}

export default TasksPage;
