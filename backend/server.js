const dotenv = require("dotenv");

dotenv.config();

console.log("SUPABASE_URL =", process.env.SUPABASE_URL);
console.log(
  "SUPABASE_SERVICE_KEY =",
  process.env.SUPABASE_SERVICE_KEY ? "FOUND" : "NOT FOUND"
);

const app = require("./app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});