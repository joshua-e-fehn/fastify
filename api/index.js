import Fastify from "fastify";
import WebSocket from "ws";
import dotenv from "dotenv";
import fastifyFormBody from "@fastify/formbody";
import fastifyWs from "@fastify/websocket";

const app = Fastify({
  logger: true,
});

app.get("/", async (request, reply) => {
  reply.send({ message: "Twilio Media Stream Server is running!" });
});

export default async function handler(req, reply) {
  await app.ready();
  app.server.emit("request", req, reply);
}
