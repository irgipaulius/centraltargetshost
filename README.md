# centraltargetshost
super simple API that serves a GET port, that returns the contents of a local JSON file.


## installation

```bash
git clone https://github.com/irgipaulius/centraltargetshost.git
cd centraltargetshost
npm install
npm start
```

## usage

```bash
nano targetlist.json
```

## for frontend

```
GET localhost:3400/targets

Content-Type: application/json; charset=utf-8

-- response --

["example.com", "example.ru", "example.gr"]
```