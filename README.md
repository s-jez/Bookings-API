

## Bookings-API
Simple API for hotel / apartment to store details of reservations.

#### Get all bookings

```
  GET /book
```
#### Get booking by id

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

#### POST booking

```
  POST /book
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `reservation`      | `string` | **Required**|
| `name`      | `string` | **Required**|
| `arrival`      | `Date` | **Required**|
| `price`      | `Number` | **Required**|

