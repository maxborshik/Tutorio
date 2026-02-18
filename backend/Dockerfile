FROM ghcr.io/astral-sh/uv:python3.12-bookworm-slim

WORKDIR /app

# Point the cache to a location we can control via volumes
ENV UV_CACHE_DIR=/home/uv_cache
ENV UV_COMPILE_BYTECODE=1 UV_LINK_MODE=copy
ENV PYTHONUNBUFFERED=1

# Copy dependency files
COPY pyproject.toml uv.lock ./

# Install dependencies into the image (runs as root)
RUN uv sync --frozen --no-install-project

COPY . .

EXPOSE 8000

# The startup command: This will use the volume-mapped cache
CMD ["sh", "-c", "uv sync && uv run python manage.py runserver 0.0.0.0:8000"]