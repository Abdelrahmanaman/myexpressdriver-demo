# Build stage
FROM oven/bun:latest AS builder

WORKDIR /app

# Copy package files
COPY package.json bun.lockb ./
COPY prisma ./prisma/

# Install dependencies and generate Prisma client
RUN bun install

# Copy the rest of the application
COPY . .

# Build the Next.js application
RUN bun run build

# Production stage
FROM oven/bun:latest AS runner

WORKDIR /app

# Copy necessary files from builder
COPY --from=builder /app/package.json .
COPY --from=builder /app/bun.lockb .
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma

# Set production environment
ENV NODE_ENV=production

# Expose the port your app runs on
EXPOSE 3000

# Start the application
CMD ["bun", "run", "start"]
