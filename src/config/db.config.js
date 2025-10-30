// Deprecated: replaced by Prisma client (src/prisma/client.js)
// Kept for compatibility in case some code still imports it; it will
// throw if used so you can find remaining references.

module.exports = new Proxy({}, {
  get() {
    throw new Error('db.config.js is deprecated. Use src/prisma/client.js (Prisma) instead.');
  }
});
