import dns from "node:dns/promises";

async function testDNS() {
  try {
    const resolver = new dns.Resolver();

    resolver.setServers(["8.8.8.8"]);

    const records = await resolver.resolveSrv(
      "_mongodb._tcp.inxorable.gi1hetq.mongodb.net"
    );

    console.log("Google DNS SRV Records:", records);

  } catch (error) {
    console.error("DNS Error:", error);
  }
}

testDNS();