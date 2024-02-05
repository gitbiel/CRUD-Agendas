import fastify, { FastifyInstance } from "fastify";
import { userRoutes } from "./routes/user.routes";
const app: FastifyInstance = fastify();


app.register(userRoutes, {
   prefix: '/users'
})

app.listen({ port: 3000 }, () => {
  console.log("Server is runing on port 3000");
});
