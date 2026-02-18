FROM ghcr.io/astral-sh/uv:python3.12-bookworm-slim

WORKDIR /app

# Point uv cache to a specific path
ENV UV_CACHE_DIR=/tmp/.uv_cache
ENV UV_COMPILE_BYTECODE=1 UV_LINK_MODE=copy
ENV PYTHONUNBUFFERED=1

# Copy dependency files
COPY pyproject.toml uv.lock ./

# During build, use a mount to keep the cache internal to the build process
RUN --mount=type=cache,target=/tmp/.uv_cache \
    uv sync --frozen --no-install-project

COPY . .

EXPOSE 8000

# Change the command to sync the environment on startup if it's missing from your host
CMD ["sh", "-c", "uv sync && uv run python manage.py runserver 0.0.0.0:8000"]