FROM oven/bun:latest AS builder


WORKDIR /app


# Copy package files
COPY package.json bun.lockb ./


# Install dependencies
RUN bun install

# Copy the rest of the application
COPY . .


# Generate Prisma Client
RUN bunx prisma generate

# Build the Next.js application
RUN bun run build


Docker configuration files

# Start with a builder stage
FROM oven/bun:latest AS builder

WORKDIR /app

# Copy package files
COPY package.json bun.lockb ./

# Install dependencies
RUN bun install

# Copy the rest of the application
COPY . .

# Generate Prisma Client
RUN bunx prisma generate

# Build the Next.js application
RUN bun run build

# Start with a fresh image for production
FROM oven/bun:latest AS runner

WORKDIR /app

# Copy only necessary files from builder
COPY --from=builder /app/package.json .
COPY --from=builder /app/bun.lockb .
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.env.production ./.env.production


# Install only production dependencies
ENV NODE_ENV=production


# Expose the port your app runs on
EXPOSE 3000


CMD ["bun", "run", "start"]
