export const convertTo12Hr = function (time) {
  let [hour, min] = time.split(":");
  if (hour !== "-") hour = +hour;
  const suffix = hour >= 12 ? "PM" : "AM";
  if (hour > 12) hour -= 12;
  if (hour === 0) hour = 12;
  return `${hour}:${min} ${suffix}`;
};
