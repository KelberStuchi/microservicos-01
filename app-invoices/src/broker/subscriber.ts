import { orders } from "./channels/orders.ts";


orders.consume("orders", async (message) => {
    if(!message) return;
    
    console.log("message ==> ", message?.content.toString());
    orders.ack(message);
    
}, {
    noAck: false,
});



// noAck => acknowledge => reconhecer que a mensagem foi processada, entao o Diego quer evitar que se nao receber nesse async
// ele quer ter o controle do sucesso ou nao
