import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js";

const app = express();
const router = express.Router();

config({ path: "./config.env" });

// CORS setup
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 📩 Contact form route
router.post("/send/mail", async (req, res) => {
  const { name, email, message } = req.body;

  // Validate fields
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please provide all details",
    });
  }

  try {
    // Pass only required values to sendEmail
    await sendEmail({ name, email, message });

    res.status(200).json({
      success: true,
      message: "Message Sent Successfully.",
    });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

// Use router
app.use(router);

// Start server
app.listen(process.env.PORT, () => {
  console.log(`✅ Server listening at port ${process.env.PORT}`);
});
