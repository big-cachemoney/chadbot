import os
import psycopg2


def run_query(sql: str):
    """Execute a SQL query against the Aiven Postgres instance and return the result.

    - For SELECT (and other queries that return rows), returns a list of dicts
      mapping column names to values.
    - For INSERT/UPDATE/DELETE (no result set), returns the affected row count (int).

    This helper opens a short-lived connection using the AIVEN_CONNECTION_STRING
    environment variable, executes the query, fetches results if any, and closes
    the connection.
    """
    try:
        connection_string = os.environ["AIVEN_CONNECTION_STRING"]
    except KeyError:
        raise KeyError("AIVEN_CONNECTION_STRING environment variable not set")

    conn = psycopg2.connect(connection_string)
    try:
        with conn:
            with conn.cursor() as cur:
                cur.execute(sql)
                if cur.description:  # There is a result set
                    cols = [c[0] for c in cur.description]
                    rows = cur.fetchall()
                    return [dict(zip(cols, r)) for r in rows]
                else:
                    # No result set (e.g., INSERT/UPDATE/DELETE)
                    return cur.rowcount
    finally:
        conn.close()
