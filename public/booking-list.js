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
                <h5 class="card-title mb-2">${book.guestNum} guests.</h5>
                <h6 class="card-subtitle mb-5">Price for apartment: ${book.price}</h6>

                <div>Nights: ${book.nights}</div>
                <div>ArrivalDate: ${book.arrivalDate}</div>
                <div>Message for owner: ${book.message}</div>

                <hr />

                <button type="button" class="btn btn-danger">Delete</button>
                <button types="button" class="btn btn-primary" data-toggle="modal"
                    data-target="#editBookModal" onClick="setEditModal(${book.id})">
                    Edit
                </button>

              </div>
            </div>
          `;
        document.getElementById("bookings").innerHTML += tmpl;
      }
    });
};
loadBookings();
