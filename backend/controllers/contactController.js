const supabase = require("../config/supabase");

const sendContact = async (req, res) => {
  try {
    const { name, email, phone, businessType, message } = req.body;

    const { data, error } = await supabase
      .from("contacts")
      .insert([
        {
          name,
          email,
          phone,
          business_type: businessType,
          message,
        },
      ]);

    if (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Contact form submitted successfully!",
      data,
    });

  } catch (err) {
  console.error("CONTACT ERROR:", err);

  return res.status(500).json({
    success: false,
    message: err.message,
  });
}
};

module.exports = {
  sendContact,
};