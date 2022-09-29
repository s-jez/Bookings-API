const loadBookings = () => {
  fetch("http://localhost:3000/guests")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      for (let book of data) {
        console.log(book);
        const bookDate = new Date(book.guest_arrival_date).toLocaleDateString(
          "en-US"
        );
        const tmpl = `
            <div class="col-4">
              <div class="card-body">
                <h4 class="card-title">${book.id}. ${book.guest_name}</h4>
                <hr />
                <div>Guests: ${book.guest_amount}</div>
                <div>Nights: ${book.guest_nights}</div>
                <div>Price: ${book.guest_price}$</div>
                <hr />
                <div>Date: ${bookDate}</div>
                <div>Message: ${book.guest_message}</div>
                <hr />
              </div>
              <div class="card-buttons">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Update</button>
                <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal2">Delete</button>
              </div>
            </div>
          `;
        document.getElementById("bookings").innerHTML += tmpl;
      }
    });
};
const updateBooking = (id) => {
  fetch(`http://localhost:3000/book/${id}`, {
    method: "PUT",
  });
};
const deleteBooking = (id) => {
  fetch(`http://localhost:3000/book/${id}`, {
    method: "DELETE",
  });
};

loadBookings();
