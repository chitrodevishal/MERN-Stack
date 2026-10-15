import dns from "node:dns";
import dnsPromises from "node:dns/promises";

// Display configured DNS servers
console.log("DNS Servers:", dns.getServers());

// Test SRV resolution
async function testDNS() {
  try {
    const records = await dnsPromises.resolveSrv(
      "_mongodb._tcp.inxorable.gi1hetq.mongodb.net"
    );

    console.log("SRV Records:", records);
  } catch (error) {
    console.error("DNS Error:", error.code);
  }
}

testDNS();