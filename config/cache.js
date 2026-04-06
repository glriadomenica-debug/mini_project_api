const cacheNode = require("node-cache");
const cache = new cacheNode({
  stdTTL:60,
  checkperiod:120,
  useClones:false,
});

//method utama
// cache.set("key","value","ttl");
// cache.get("key");
// cache.del("key");
// cache.flushAll();
module.exports = cache;