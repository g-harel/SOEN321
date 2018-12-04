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

## Results

```
+ --------------------------------------- + ------------------------------- +
|                 service                 |            categories           |
+ ----------------------+---------------- + ----- + -------- + ----- + ---- +
|          name         |     address     | adult | gambling | mixed | sect |
+ --------------------- + --------------- + ----- + -------- + ----- + ---- +
| Control (Google)      |     8.8.8.8     |  98.9 |    78.9  |  82.8 | 80.4 |
| Yandex.DNS Family     |    77.88.8.7    |  98.9 |    77.8  |  82.8 | 80.4 |
| Neustar Family Secure |  156.154.70.3   |  98.9 |    79.2  |  84.1 | 80.4 |
| OpenDNS FamilyShield  | 208.67.222.123  |  98.6 |    77.8  |  82.8 | 80.4 |
| AdGuard Family        | 176.103.130.132 |  43.1 |    41.2  |   5.5 | 79.7 |
| CleanBrowsing         | 185.228.168.168 |   1.1 |    77.1  |  68.9 | 79.0 |
+ --------------------- + --------------- + ----- + -------- + ----- + ---- +
```
