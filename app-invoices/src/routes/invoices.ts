import server from "../app.ts";
import { z } from "zod/v4";
import { channels } from "../broker/channels/index.ts";
import { db } from "../database/client.ts";
import { schema } from "../database/schema/index.ts";
import { randomUUID } from "node:crypto";
import { dispatchOrderCreated } from "../broker/messages/order-created.ts";

export const invoicesRoute = () => {
  // server.post(
  //   "/invoices",
  //   {
  //     schema: {
  //       body: z.object({
  //         amount: z.coerce.number(),
  //       }),
  //     },
  //   },
  //   async (request, reply) => {
  //     const { amount } = request.body;
  //     console.log("creating this amount ", amount);

  //   // 1 fase de teste, agora fará via contracts e broker/messages/order-created.ts
  //   //   channels.orders.sendToQueue("orders", Buffer.from(JSON.stringify({ amount })));

  //   // agora
  //   const orderId = randomUUID();
  //   dispatchOrderCreated({
  //       orderId,
  //       amount,
  //       customer: {
  //           id: "6b5b1a56-7e5e-43bb-9e0d-07e91f6b7e24",
  //       }
  //   });



  //     const customerIdMock = "6b5b1a56-7e5e-43bb-9e0d-07e91f6b7e24";

  //     try {
  //       await db.insert(schema.orders).values({
  //         id: randomUUID(),
  //         customerId: customerIdMock,
  //         amount,
  //       });
  //     } catch (error) {
  //       console.log("error ==> ", error);
  //     }
  //     return reply.status(201).send();
  //   }
  // );
};
// transmite a mensagem para o rabbitmq atraves do Buffer.
