#!/usr/bin/env node

const dns = require("dns").promises;

// The `input` promise will resolve to data being piped into the program.
// If nothing is being piped, the promise is rejected.
const input = new Promise((resolve, reject) => {
    if (process.stdin.isTTY) reject("nothing being piped");

    let temp = "";
    process.stdin.resume();
    process.stdin.setEncoding("utf8");
    process.stdin.on("data", (chunk) => temp += chunk);
    process.stdin.on("end", () => resolve(temp));
});

// Attempts to resolve an IP address using the given root DNS server.
// Returns a boolean indicating whether or not the address was successfully resolved.
const lookup = async (domain, root) => {
    const resolver = new dns.Resolver();
    resolver.setServers([root]);
    try {
        await resolver.resolve4(domain);
    } catch (e) {
        return false;
    }
    return true;
};

// Data is processed after being read from stdin.
input.then(async (data) => {
    // Root DNS server must be given as first argument.
    const root = process.argv[2];
    if (!root) {
        console.log("no root server");
        return;
    }

    // Input data is split into an array of non-empty lines.
    const domains = data.split("\n").filter(Boolean);

    // Each line (representing a domain) is looked up using the root server.
    const results = await Promise.all(domains.map((name) => lookup(name, root)));

    // Ratio of resolved domains is printed.
    const resolved = results.filter(Boolean);
    const ratio = 100*resolved.length/results.length;
    console.log(`resolved ${ratio.toFixed(4)}% (of ${domains.length})`);
});

input.catch((...a) => {
    console.error(...a);
    process.exit(1);
});
