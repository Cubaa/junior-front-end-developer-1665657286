export const getDifferencesBetweenDates = (businessContextDate) => {
  const contextDate = new Date(
    `${businessContextDate.month} ${businessContextDate.day}, ${businessContextDate.year}`
  );
  const currentDate = new Date();
  const diffTime = currentDate.getTime() - contextDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return "Today";
  }

  return diffDays > 1 ? diffDays + " days ago" : diffDays + " day ago";
};
