

## Bookings-API
Simple API in Node.JS for hotel to store details of guests reservations. <br />
Database PostgreSQL and Bootstrap for styling <br />

## Guests
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `guest_name`      | `string` | **Required**|
| `guest_amount`      | `Number` | **Required**|
| `guest_message`      | `string` | **Required**|
| `guest_nights`      | `Number` | **Required**|
| `guest_arrival_date`      | `Date` | **Required**|
| `guest_price`      | `Number` | **Required**|

#### Get all guests bookings

```
  GET /book
```

#### POST booking

```
  POST /book
```

#### Get booking

```
  GET /book/:id
```

#### Update booking

```
  PUT /book/:id
```

#### Delete booking

```
  DELETE /book/:id
```

