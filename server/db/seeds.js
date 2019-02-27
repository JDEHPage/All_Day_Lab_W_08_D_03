use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "John",
    surname: "Test",
    email: "JohnTest@gmail.com",
    checked_in: "true"
  },
  {
    name: "Mary",
    surname: "Something",
    email: "MarySomething@gmail.com",
    checked_in: "false"
  },
  {
    name: "Splag",
    surname: "Splaginson",
    email: "1Splang98@yahoo.com",
    checked_in: "false"
  }
]);
