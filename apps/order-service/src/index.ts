import Fastify from "fastify";

const fastify = Fastify();

fastify.get("/", async (request, reply) => {
    return {
        message: "order World",
    };
});

fastify.listen({ port: 8001 }, (err, address) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    fastify.log.info(`Order service is running on ${address}`);
});