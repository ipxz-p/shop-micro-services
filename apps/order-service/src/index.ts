import Fastify from "fastify";
import { clerkPlugin } from "@clerk/fastify";

const fastify = Fastify();
fastify.register(clerkPlugin);

fastify.get("/", async (request, reply) => {
  return {
    message: "order World12345",
  };
});

const start = async () => {
  try {
    await fastify.listen({ port: 8001 });
    console.log("Order service is running on port 8001");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
