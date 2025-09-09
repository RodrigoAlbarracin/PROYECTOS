<<<<<<< Updated upstream
SELECT flight_id, flight_number, status
FROM flights
WHERE status = 'On Time';

SELECT * FROM bookings
WHERE total_amount > 1000000;

SELECT * FROM aircraft_data;

SELECT flight_id
FROM flights
WHERE aircraft_code = '733';

SELECT * FROM tickets
WHERE passenger_name LIKE 'Irina%';
=======
SELECT flight_id, flight_number, status
FROM flights
WHERE status = 'On Time';

SELECT * FROM bookings
WHERE total_amount > 1000000;

SELECT * FROM aircraft_data;

SELECT flight_id
FROM flights
WHERE aircraft_code = '733';

SELECT * FROM tickets
WHERE passenger_name LIKE 'Irina%';

>>>>>>> Stashed changes
