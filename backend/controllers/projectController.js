const getProjects = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Projects fetched successfully",
    projects: [
      {
        id: 1,
        title: "Restaurant Website",
        category: "Business",
      },
      {
        id: 2,
        title: "Portfolio Website",
        category: "Personal",
      },
      {
        id: 3,
        title: "E-Commerce Website",
        category: "Shop",
      },
    ],
  });
};

module.exports = {
  getProjects,
};