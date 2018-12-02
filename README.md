# SOEN321

## Running

```
cat [FILE] | base64 -d | ./index.js [ROOT]
```

```
$ cat ./domains/gambling.b64 | base64 -d | ./index.js 185.228.168.168
resolved 77.7778% (of 279)
```

#### Test Files

```
domains
├─ adult.b64
├─ gambling.b64
├─ mixed.b64
└─ sect.b64
```

#### Root Servers

```
Google                8.8.8.8
CloudFlare            1.1.1.1
======================================
CleanBrowsing         185.228.168.168
OpenDNS FamilyShield  208.67.222.123
Norton ConnectSafe    199.85.126.30
Yandex.DNS Family     77.88.8.7
Comodo SecureDNS      8.26.56.26
Dyn Internet Guide    216.146.35.35
```
