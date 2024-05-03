export const calculateTimeDifference = (lightEnd: string,) => {
  // Parse the light_end string into a Date object
  // Check if lightEnd is not available or in zeros format
  if (!lightEnd || lightEnd === "0000-00-00 00:00:00") {
    return "Not available";
  }

  // Parse the light_end string into a Date object
  const lastSeenTime = new Date(lightEnd);

  // Calculate the difference between the current time and the last seen time in milliseconds
  const difference = Date.now() - lastSeenTime.getTime();

  // Convert the difference from milliseconds to seconds, minutes, hours, or days
  const secondsAgo = Math.floor(difference / 1000);
  const minutesAgo = Math.floor(secondsAgo / 60);
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);

  // Determine the appropriate time unit to display
  if (secondsAgo < 60) {
    return `${secondsAgo} seconds ago`;
  } else if (minutesAgo < 60) {
    return `${minutesAgo} minutes ago`;
  } else if (hoursAgo < 24) {
    return `${hoursAgo} hours ago`;
  } else {
    return `${daysAgo} days ago`;
  }
}
