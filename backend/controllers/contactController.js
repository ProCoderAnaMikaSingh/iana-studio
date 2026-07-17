const sendContact = (req, res) => {
  const { name, email, phone, businessType, message } = req.body;

  res.status(200).json({
    success: true,
    message: "Contact form received successfully!",
    data: {
      name,
      email,
      phone,
      businessType,
      message,
    },
  });
};

module.exports = {
  sendContact,
};