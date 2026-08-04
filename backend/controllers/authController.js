const supabase = require("../config/supabase");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ================= REGISTER ADMIN =================

const registerAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const { data: existingAdmin } = await supabase
      .from("admins")
      .select("*")
      .eq("email", email)
      .maybeSingle();

    if (existingAdmin) {
      return res.status(400).json({
        success: false,
        message: "Admin already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const { data, error } = await supabase
      .from("admins")
      .insert([
        {
          email,
          password: hashedPassword,
        },
      ])
      .select();

    console.log("REGISTER DATA =>", data);
    console.log("REGISTER ERROR =>", error);

    if (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }

    return res.status(201).json({
      success: true,
      message: "Admin registered successfully",
      data,
    });
  } catch (err) {
    console.error("REGISTER ERROR =>", err);

    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// ================= LOGIN ADMIN =================

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("EMAIL RECEIVED =>", email);

    const { data: admin, error } = await supabase
      .from("admins")
      .select("*")
      .eq("email", email)
      .maybeSingle();

    console.log("ADMIN DATA =>", admin);
    console.log("SUPABASE ERROR =>", error);

    if (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }

    if (!admin) {
      return res.status(400).json({
        success: false,
        message: "Invalid Email",
      });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    console.log("PASSWORD MATCH =>", isMatch);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      {
        id: admin.id,
        email: admin.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    return res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
    });
  } catch (err) {
    console.error("LOGIN ERROR =>", err);

    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  registerAdmin,
  loginAdmin,
};