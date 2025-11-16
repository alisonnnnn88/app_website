const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// 靜態前端
app.use(express.static(path.join(__dirname, "frontend/build")));

// API 路由範例
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Railway Node.js backend!" });
});

// React SPA fallback
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
