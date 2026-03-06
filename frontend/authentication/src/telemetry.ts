import { ZoneContextManager } from '@opentelemetry/context-zone';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { WebTracerProvider } from '@opentelemetry/sdk-trace-web';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { BatchSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { resourceFromAttributes } from '@opentelemetry/resources';
import { SEMRESATTRS_SERVICE_NAME } from '@opentelemetry/semantic-conventions';
import { getWebAutoInstrumentations } from '@opentelemetry/auto-instrumentations-web';

const OTEL_ENDPOINT = 'http://localhost:4318/v1/traces';

export function initTelemetry() {
  const exporter = new OTLPTraceExporter({
    url: OTEL_ENDPOINT,
  });

  const provider = new WebTracerProvider({
    resource: resourceFromAttributes({
      [SEMRESATTRS_SERVICE_NAME]: 'authentication',
    }),
    spanProcessors: [new BatchSpanProcessor(exporter)],
  });

  provider.register({
    contextManager: new ZoneContextManager(),
  });

  registerInstrumentations({
    instrumentations: [
      getWebAutoInstrumentations(),
    ],
  });
}
