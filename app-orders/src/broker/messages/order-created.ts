import { channels } from "../channels/index.ts";
import type { OrderCreatedMessage } from "../../../../contracts/order-created-message.ts"
// importar somente a tipagem type - gera erro de import

export function dispatchOrderCreated(data: OrderCreatedMessage) {
    channels.orders.sendToQueue("orders", Buffer.from(JSON.stringify({ data })));
}