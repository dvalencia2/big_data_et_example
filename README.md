
# Big Data ET Example

This project is going to be built alongside San Joaquin DUOC UC's Big Data course as an example to solve the final TE.


## Features

- Kafka producer pulls data from differente APIs
- Kafka consumer consumes the topic's data so it can be sent to a webserver for distribution and storaging. 
- Webserver built with node to be used as HTTP API and SOCKET IO server
- Mongo DB to store incoming data from the consumer to the SOCKET IO server
- Client built with React js to showcase live data from "kafka -> socket io" and also historical data from "webserver API (node) -> Mongo DB)




## FAQ

#### Why was this project built without any ENV variable or best practice in mind?

In general the project aims to serve to purpose of building the architechture rather than applying best SE practices, however, overtime better practices will be added, and PR are welcome.

#### What services do I need to subscribe to to be able to run this on my local machine?

- Clonfluent for kafka cloud implementation, 30 days free (or use local kafka installation) https://www.confluent.io/
- Mongo db cloud Atlas for free cloud mongo db storage https://cloud.mongodb.com/


