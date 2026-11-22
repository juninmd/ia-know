# Build stage — site estático em VitePress
FROM node:22-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

COPY docs ./docs
RUN npm run docs:build

# Runtime stage — apenas os arquivos estáticos gerados
FROM nginx:alpine
COPY --from=builder /app/docs/.vitepress/dist /usr/share/nginx/html
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:80/ || exit 1
CMD ["nginx", "-g", "daemon off;"]

# executa app sem privilegio (DS-0002)
RUN addgroup -g 10001 app && adduser -u 10001 -G app -s /bin/sh -D app \
    # nginx precisa gravar cache/temp e o pid; sem isso o worker sem root morre no boot
    && mkdir -p /var/cache/nginx \
    && chown -R app:app /var/cache/nginx \
    && touch /var/run/nginx.pid && chown app:app /var/run/nginx.pid
USER app
