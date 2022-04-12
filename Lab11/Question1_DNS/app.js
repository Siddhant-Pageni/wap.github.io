const dns = require('dns');

let url = "www.miu.edu"

// dns.resolve gives array of ipaddresses whereas dns.lookup gives only first ipaddress
dns.lookup(url, (err,address,family) => {
    if(err == null){
        console.log(`The IPv${family} Address of ${url} is ${address}.`);
    }
});