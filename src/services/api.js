const API_BASE = "/api";

async function apiRequest(endpoint, options = {}) {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!response.ok) {
    let message = "Something went wrong";
    try {
      const error = await response.json();
      message = error.error || message;
    } catch {
      // no-op: keep default message
    }
    throw new Error(message);
  }

  return response.json();
}

export const getTasks = () => apiRequest("/tasks");

export const createTask = (title, priority = "medium") =>
  apiRequest("/tasks", {
    method: "POST",
    body: JSON.stringify({ title, priority }),
  });

export const updateTask = (id, updates) =>
  apiRequest(`/tasks/${id}`, {
    method: "PUT",
    body: JSON.stringify(updates),
  });

export const deleteTask = (id) =>
  apiRequest(`/tasks/${id}`, { method: "DELETE" });
