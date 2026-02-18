FROM ghcr.io/astral-sh/uv:python3.12-bookworm-slim

WORKDIR /app

ENV UV_CACHE_DIR=/tmp/.uv_cache
ENV UV_COMPILE_BYTECODE=1 UV_LINK_MODE=copy
ENV PYTHONUNBUFFERED=1

COPY pyproject.toml uv.lock ./
RUN uv sync --frozen --no-install-project

COPY . .

EXPOSE 8000

CMD ["sh", "-c", "uv sync && uv run python manage.py runserver 0.0.0.0:8000"]