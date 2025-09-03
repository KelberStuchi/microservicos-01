import { trace } from "@opentelemetry/api";


if(!process.env.OTEL_SERVICE_NAME) {
    throw new Error("OTEL_SERVICE_NAME not found");
}

export const tracer = trace.getTracer(process.env.OTEL_SERVICE_NAME);