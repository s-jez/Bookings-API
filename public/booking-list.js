const loadBookings = () => {
  fetch("http://localhost:3000/book")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      for (let book of data) {
        const tmpl = `
            <div class="col-4">
              <div class="card-body">
                <h4 class="card-title">${book.guest}</h4>
                <hr />
                <div>Guests: ${book.guestNum}</div>
                <div>Nights: ${book.nights}</div>
                <div>Price: ${book.price}$</div>
                <hr />
                <div>Date: ${book.arrivalDate}</div>
                <div>Message: ${book.message}</div>
                <hr />
              </div>
            </div>
          `;
        document.getElementById("bookings").innerHTML += tmpl;
      }
    });
};
loadBookings();
