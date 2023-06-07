
# Big Data ET Example

This project is going to be built alongside San Joaquin DUOC UC's Big Data course as an example to solve the final TE.


## Features

- Kafka producer pulls data from differente APIs
- Kafka consumer consumes the topic's data so it can be sent to a webserver for distribution and storaging. 
- Webserver built with node to be used as HTTP API and SOCKET IO server
- Mongo DB to store incoming data from the consumer to the SOCKET IO server
- Client built with React js to showcase live data from "kafka -> socket io" and also historical data from "webserver API (node) -> Mongo DB)

