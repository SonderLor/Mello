from sqlalchemy.ext.asyncio import AsyncEngine, create_async_engine
from sqlalchemy.ext.declarative import declarative_base
from app.core.config import settings
from app.db.models import Base
from alembic import context
import asyncio

DATABASE_URL = settings.DATABASE_URL

engine = create_async_engine(DATABASE_URL)


async def run_migrations_online():
    async with engine.connect() as connection:
        await connection.run_sync(do_migrations)


def do_migrations(connection):
    context.configure(connection=connection, target_metadata=Base.metadata)
    with context.begin_transaction():
        context.run_migrations()


asyncio.run(run_migrations_online())
