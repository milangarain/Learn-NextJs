export function getFormattedDate(strDate) {
	const date = new Date(strDate);
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	  ];
	
	  const day = date.getDate(); // Get the day (1-31)
	  const month = months[date.getMonth()]; // Get the month name
	  const year = date.getFullYear(); // Get the full year (e.g., 2025)
	
	  const formattedDate = `${month} ${day}, ${year}`;
	  return formattedDate;
}