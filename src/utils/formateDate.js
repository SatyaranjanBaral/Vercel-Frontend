// utils/formateDate.js
export const formateDate = (dateStr) => {
  // Convert to ISO format if needed
  const d = new Date(dateStr);
  if (isNaN(d)) return dateStr; // fallback to original string if invalid

  return d.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};
