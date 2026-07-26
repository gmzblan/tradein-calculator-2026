# PuntoCell Trade-In Calculator

Calculadora de valuación de iPhone para parte de pago desarrollada para PuntoCell Valencia.

## Descripción

Esta aplicación permite a los clientes calcular el valor estimado de su iPhone usado como parte de pago. El sistema evalúa múltiples factores incluyendo modelo, capacidad, estado de batería, ciclos de carga, condición física y si incluye la caja original.

## Características

- Soporte para iPhone series 12, 13, 14, 15, 16 y 17
- Evaluación del estado de batería con indicador visual
- Contador de ciclos de batería para series 15, 16 y 17
- Evaluación de condición física (Grado A, B, C)
- Bonificación por inclusión de caja original
- Generación automática de mensaje para WhatsApp
- Interfaz intuitiva inspirada en el diseño de Apple

## Tecnologías

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Shadcn UI Components

## Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Iniciar servidor de producción
npm start
```

## Precios

La tabla de precios de `app/page.tsx` proviene de la lista LISTA_TRADE_IN_ACT.
Cada modelo y capacidad tiene cuatro valores: precio de Grado A y de Grado B,
cada uno con su variante para batería por encima o por debajo del umbral
definido en `BATTERY_HEALTH_THRESHOLD`. Solo se ofrecen en la interfaz las
capacidades que tienen precio en la lista.

## Créditos

Desarrollado por [Lever](https://thislever.com) para PuntoCell Valencia.

## Nota Legal

Esta no es una página oficial de Apple Inc. Los valores mostrados son estimados y están sujetos a revisión técnica física del dispositivo.

© 2026 PuntoCell. Todos los derechos reservados.
