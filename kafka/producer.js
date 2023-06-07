const fs = require('fs');
const apiKey = "ba129fee0ada25b2aeb8ec8f6250964c"
const axios = require('axios');

const Kafka = require("node-rdkafka");
const { readConfigFile } = require('./helper');
const producer = new Kafka.Producer(readConfigFile("creds.txt"));
producer.connect();
producer.on("ready", async () => {
    console.log("ready")
    //Somwhere before sending messages to the topic, you must call any API (3)
    //and then send the responses from those API down the topic
    //note: all the data could be sent through the same topic or you can create separate topics
    producer.produce("my-topic", -1, Buffer.from("value"), Buffer.from("key"));
});