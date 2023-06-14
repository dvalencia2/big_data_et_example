const Kafka = require("node-rdkafka");
const { readConfigFile } = require("./helper");
const config = readConfigFile("creds.txt");
config["group.id"] = "node-group";


var io = require("socket.io-client");

const socket = io("ws://localhost:3000");




const consumer = new Kafka.KafkaConsumer(config, {"auto.offset.reset": "earliest" });
consumer.connect();
consumer.on("ready", () => {
    consumer.subscribe(["my-topic"]);
    consumer.consume();

}).on("data", (message) => {
    const data = {
        key: message.key.toString(),
        value: message.value.toString(),
    }
    console.log("Consumed message", JSON.stringify(data));
    // send a message to the socket server
    socket.emit("consumerDataEvent",JSON.stringify(data));
});