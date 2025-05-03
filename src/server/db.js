import pg from 'pg'

const { Pool } = pg;

const pool = new Pool({
    user: 'postgres',
    host: ['localhost', '0.0.0.0'],
    database: 'AutoVistaDB',
    password: 'postgres',
    port: 5433,
})

export default pool;