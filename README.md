# SOEN321

Effectiveness analysis of DNS services with parental control features.

## Running

<sub>Tested using `node >= v10`</sub>

#### Linux

```
cat [FILE] | base64 -d | ./index.js [ROOT]
```

```
$ cat ./domains/gambling.b64 | base64 -d | ./index.js 185.228.168.168
resolved 77.7778% (of 279)
```

#### MacOS

```
cat FILE | base64 -D | ./index.js [ROOT]
```

#### Windows

```
type [FILE] | base64 -d | node ./index.js [ROOT]
```

## Test Files

```
domains
├─ adult.b64
├─ gambling.b64
├─ mixed.b64
└─ sect.b64
```

<sub>Domains lists are random subsets of data from [this blacklist](http://dsi.ut-capitole.fr/blacklists/index_en.php).</sub>

Test files can be read in plaintext using the previous section's running instructions, but without piping the decoded base64 output into the testing script.

```diff
- cat [FILE] | base64 -d | ./index.js [ROOT]
+ cat [FILE] | base64 -d
```

## Results

```
+ --------------------------------------- + ------------------------------- +
|                 service                 |         percent resolved        |
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
