export const generateIcon = (status) => {
  switch (status) {
    case "completed":
      return "/assets/checkmark.svg";
    case "active":
      return "/assets/Arrow.svg";
    case "blocked":
      return "/assets/Sidebar.svg";
    default:
      return "";
  }
};
