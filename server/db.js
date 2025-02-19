import pg from "pg";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const { Pool } = pg;

// Ensure the connection string is stored securely
const pool = new Pool({
  connectionString: process.env.SUPABASE_DB_URL, // Move the connection string to .env
  ssl: {
    rejectUnauthorized: false, // Required for Supabase
  },
});

// Query function with error handling
export const query = async (text, params) => {
  try {
    const res = await pool.query(text, params);
    return res.rows; // Return only the rows for convenience
  } catch (err) {
    console.error("Database query error:", err.message);
    throw new Error("Database query failed");
  }
};

// Handle pool connection errors
pool.on("error", (err) => {
  console.error("Unexpected error on idle client:", err);
  process.exit(-1);
});
