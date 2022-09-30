const updateBooking = (id) => {
  fetch(`http://localhost:3000/book/${id}`, {
    method: "PUT",
  });
  console.log("Current booking id: ", id);
};
const deleteBooking = (id) => {
  fetch(`http://localhost:3000/book/${id}`, {
    method: "DELETE",
  });
  console.log("Current booking id: ", id);
};
