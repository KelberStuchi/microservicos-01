import  "@opentelemetry/auto-instrumentations-node/register";

import fastify from 'fastify'
import fastifyCors from '@fastify/cors'
import { jsonSchemaTransform, serializerCompiler, validatorCompiler, type ZodTypeProvider } from 'fastify-type-provider-zod';
import fastifySwagger from '@fastify/swagger';
import fastifyApiReference from '@scalar/fastify-api-reference';
import fastifySwaggerUi from '@fastify/swagger-ui';
import { z } from 'zod/v4';
import { ordersRoute } from './routes/orders.ts';


// server
const server = fastify().withTypeProvider<ZodTypeProvider>();

// CORS
server.register(fastifyCors, {
    origin: "*",
})


// VALIDATORS
server.setValidatorCompiler(validatorCompiler);
server.setSerializerCompiler(serializerCompiler);

// DOCS em developement
if(process.env.NODE_ENV === "development") {
    server.register(fastifySwagger, {
    openapi: {
      openapi: '3.0.0',
      info: {
        title: 'Test swagger',
        description: 'Testing the Fastify swagger API',
        version: '0.1.0'
      },
    },
    transform: jsonSchemaTransform
});

server.register(fastifySwaggerUi, {
    routePrefix: "/docs/swagger",
})

server.register(fastifyApiReference, {
    routePrefix: "/docs/scalar",
    configuration: {
      theme: "laserwave",
    },
  });

}



// ROUTES
server.get('/health', {
    handler: () => {
        return { health: "ok" }
    },
  
})


server.register(ordersRoute)






export default server
