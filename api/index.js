const { getMongoClient } = require('./mongoConnection');
const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors);
const http = require('http');
const server = http.createServer(app);

//shouldn't be seen this week yet.
/*
const io = require("socket.io")(server, {
    cors: {
      origin: "*"
    }
  });
*/
/*
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('consumerDataEvent', async (msg) => {
    console.log('new event', msg);
    const dbClient = await getMongoClient();
    const bigDataDb = dbClient.db("bigdata")
    const data =  await bigDataDb.collection("apidata").insertOne(JSON.parse(msg));
  });
});
*/


server.listen(3000, async () => {
  const dbClient = await getMongoClient();
  const bigDataDb = dbClient.db("bigdata")
  const data =  await bigDataDb.collection("apidata").find();
  console.log(await data.toArray())
  console.log('listening on *:3000');
});