FROM ghcr.io/astral-sh/uv:python3.12-bookworm-slim

WORKDIR /app

# Optimize for fast builds and clean layers
ENV UV_COMPILE_BYTECODE=1 UV_LINK_MODE=copy
ENV PYTHONUNBUFFERED=1

# Copy only dependency files first to leverage Docker cache
COPY pyproject.toml uv.lock ./
RUN uv sync --frozen --no-install-project

# Copy the rest of the application
COPY . .

EXPOSE 8000

# Command to run Django. Note: 0.0.0.0 is mandatory for Docker access.
CMD ["uv", "run", "python", "manage.py", "runserver", "0.0.0.0:8000"]