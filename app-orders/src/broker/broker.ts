import amqp from "amqplib";

if(!process.env.BROKER_URL) {
    throw new Error("Broker URL not found");
}

export const broker = await amqp.connect(process.env.BROKER_URL);

 