FROM oven/bun:latest

WORKDIR /app

# Copy package files
COPY package.json bun.lockb ./
COPY prisma ./prisma/

# Install dependencies
RUN bun install

# Copy the rest of the application
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Start the application in development mode
CMD ["bun", "run", "dev"]
