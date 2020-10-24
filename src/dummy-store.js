export default {
  children: [
    { id: 1, name: "Larry" },
    { id: 2, name: "Curly" },
    { id: 3, name: "Moe" },
  ],
  chores: [
    {
      id: 1,
      title: "Mop",
      child_id: 2,
      status: false,
      comments: "",
    },
    {
      id: 2,
      title: "Vacuum",
      child_id: 2,
      status: true,
      comments: "Good I guess",
    },
    {
      id: 3,
      title: "Dust",
      child_id: 2,
      status: true,
      comments: "",
    },
    {
      id: 4,
      title: "Feed the chickens",
      child_id: 1,
      status: true,
      comments: "Nice work",
    },
    {
      id: 5,
      title: "Trash",
      child_id: 1,
      status: false,
      comments: "",
    },
    {
      id: 6,
      title: "Mow the grass",
      child_id: 1,
      status: false,
      comments: "",
    },
    {
      id: 7,
      title: "Polish silver",
      child_id: 3,
      status: true,
      comments: "",
    },
    {
      id: 8,
      title: "Empty cat box",
      child_id: 3,
      status: false,
      comments: "",
    },
    {
      id: 9,
      title: "Paint the chicken coop",
      child_id: 3,
      status: true,
      comments: "",
    },
  ],
};