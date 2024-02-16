function displayTime() {

	let dt = new Date();
	let hr = (dt.getHours())%12;
	let mn = dt.getMinutes();
	let sc = dt.getSeconds();
	let tm = document.getElementById("tm");
	tm.innerHTML = (hr+":"+mn+":"+sc);
}
setInterval(displayTime, 1000);

 function displayDate() {
        // Create a new Date object to get the current date
        var currentDate = new Date();

        // Get the day, month, and year
        var day = currentDate.getDate();
        var month = currentDate.getMonth() + 1; // Month is zero-based, so we add 1
        var year = currentDate.getFullYear();

        // Construct the date string
        var dateString = day + "/" + month + "/" + year;

        // Set the date to the element with id="date"
        document.getElementById("date").textContent = dateString;
    }

    // Call the displayDate function when the page loads
    window.onload = displayDate;