const loadBookings = () => {
  fetch("http://localhost:3000/guests")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      for (let book of data) {
        console.log(book);
        const tmpl = `
            <div class="col-4">
              <div class="card-body">
                <h4 class="card-title">${book.id}. ${book.guest_name}</h4>
                <hr />
                <div>Guests: ${book.guest_amount}</div>
                <div>Nights: ${book.guest_nights}</div>
                <div>Price: ${book.guest_price}$</div>
                <hr />
                <div>Date: ${book.guest_arrival_date}</div>
                <div>Message: ${book.guest_message}</div>
                <hr />
              </div>
            </div>
          `;
        document.getElementById("bookings").innerHTML += tmpl;
      }
    });
};
loadBookings();
