const supabase = require("../config/supabase");

// ==========================
// Send Contact
// ==========================
const sendContact = async (req, res) => {
  console.log("========== CONTACT API ==========");
  console.log("BODY =>", req.body);

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
      ])
      .select();

    if (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Contact submitted successfully",
      data,
    });

  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// ==========================
// Get All Contacts
// ==========================
const getAllContacts = async (req, res) => {
  try {

    const { data, error } = await supabase
      .from("contacts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }

    // ==========================
    // Dashboard Stats
    // ==========================

    const today = new Date().toISOString().split("T")[0];

    const totalContacts = data.length;

    const todayContacts = data.filter((item) =>
      item.created_at.startsWith(today)
    ).length;

    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    const monthContacts = data.filter((item) => {
      const date = new Date(item.created_at);

      return (
        date.getMonth() === currentMonth &&
        date.getFullYear() === currentYear
      );
    }).length;

    return res.status(200).json({
      success: true,
      contacts: data,

      stats: {
        totalContacts,
        todayContacts,
        monthContacts,
      },
    });

  } catch (err) {

    return res.status(500).json({
      success: false,
      message: err.message,
    });

  }
};

// ==========================
// Delete Contact
// ==========================
const deleteContact = async (req, res) => {
  try {

    const { id } = req.params;

    const { error } = await supabase
      .from("contacts")
      .delete()
      .eq("id", id);

    if (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Contact Deleted Successfully",
    });

  } catch (err) {

    return res.status(500).json({
      success: false,
      message: err.message,
    });

  }
};

module.exports = {
  sendContact,
  getAllContacts,
  deleteContact,
};