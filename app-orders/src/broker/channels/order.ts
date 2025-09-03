import { broker } from "../broker.ts";


export const orders = await broker.createChannel();

await orders.assertQueue("orders");


// rabbitMQ tem 2 formas de segregas as mensagens:
// 1. assertQueue
// 2. assertExchange

