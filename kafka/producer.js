const fs = require('fs');
const apiKey = "ba129fee0ada25b2aeb8ec8f6250964c"
const axios = require('axios');

const Kafka = require("node-rdkafka");
const { readConfigFile } = require('./helper');
const producer = new Kafka.Producer(readConfigFile("creds.txt"));
producer.connect();
producer.on("ready", async () => {
    console.log("ready")
    producer.produce("my-topic", -1, Buffer.from("value"), Buffer.from("key"));
});