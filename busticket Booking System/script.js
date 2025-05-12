document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const from = document.getElementById("from").value.trim();
  const to = document.getElementById("to").value.trim();
  const date = document.getElementById("date").value;
  const seats = document.getElementById("seats").value;

  if (!from || !to || !date || !seats) {
    alert("Please fill in all fields.");
    return;
  }

  const summaryHTML = `
    <h3>✅ Booking Confirmed!</h3>
    <p><strong>From:</strong> ${from}</p>
    <p><strong>To:</strong> ${to}</p>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Tickets:</strong> ${seats}</p>
    <p>🚌 Have a safe and pleasant journey!</p>
  `;

  document.getElementById("summary").innerHTML = summaryHTML;
});
