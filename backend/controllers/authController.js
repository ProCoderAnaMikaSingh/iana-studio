const bcrypt = require("bcryptjs");

// Signup Controller
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    res.status(201).json({
      success: true,
      message: "User signup successful",
      user: {
        name,
        email,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

// Login Controller
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    res.status(200).json({
      success: true,
      message: "Login Successful",
      user: {
        email,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

// Export Controllers
module.exports = {
  signup,
  login,
};