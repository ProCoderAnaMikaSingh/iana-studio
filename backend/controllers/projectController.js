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
  {
    id: 4,
    title: "Hospital Website",
    category: "Healthcare",
  },
  {
    id: 5,
    title: "Gym Website",
    category: "Fitness",
  },
  {
    id: 6,
    title: "School Website",
    category: "Education",
  },
]
  });
};

module.exports = {
  getProjects,
};