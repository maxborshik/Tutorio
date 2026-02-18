FROM node:22-slim

WORKDIR /app

# Copy package files (the frontend equivalents of pyproject.toml)
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend code
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]