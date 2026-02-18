FROM ghcr.io/astral-sh/uv:python3.12-bookworm-slim

# Create a non-root user inside the image that matches your host UID
ARG USER_ID=1000
ARG GROUP_ID=1000
RUN groupadd -g ${GROUP_ID} uvgroup && \
    useradd -u ${USER_ID} -g uvgroup -m uvuser

WORKDIR /app

# Set permissions for the app and cache folders immediately
RUN chown uvuser:uvgroup /app
ENV UV_CACHE_DIR=/home/uvuser/.cache/uv
RUN mkdir -p /home/uvuser/.cache/uv && chown -R uvuser:uvgroup /home/uvuser/.cache

# Switch to the non-root user BEFORE running any uv commands
USER uvuser

COPY --chown=uvuser:uvgroup pyproject.toml uv.lock ./
RUN uv sync --frozen --no-install-project

COPY --chown=uvuser:uvgroup . .

EXPOSE 8000
CMD ["sh", "-c", "uv sync && uv run python manage.py runserver 0.0.0.0:8000"]