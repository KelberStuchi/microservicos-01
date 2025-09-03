import server from "./app.ts"

server.listen({ port: 3334, host: "0.0.0.0" }, () => {
    console.log("[INVOICES] =>  🚀 Server running on http://localhost:3334")
})