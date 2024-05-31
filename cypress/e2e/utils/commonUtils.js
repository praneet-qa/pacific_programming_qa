export function getCurrentDate() {
  const options = { month: "long", day: "2-digit", year: "numeric" };
  const date = new Date();
  return date.toLocaleDateString("en-US", options);
}
