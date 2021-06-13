import http from 'http';
import uuid from 'uuid';
const hostname = '127.0.0.1';
const port = 3000;

let idToOrder = {};

function createNewOrder(req, res, body) {
    let order = JSON.parse(body)
    let id = uuid.v1();
    idToOrder[id] = order

    // here we actually call our strategy code

    res.statusCode = 200;
    res.end()
}

function listAllOrders(req, res, body) {
    let result = []
    for (let k in idToOrder) {
        let v = idToOrder[k]
        v.filled = 0; // TODO: replace with actual fill logic
        v.id = k;
        result.push(v)
    }
    res.json({"data": result})
    res.statusCode = 200;
    res.end()
}

const server = http.createServer((req, res) => {
    let body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        // at this point, `body` has the entire request body stored in it as a string
        console.log("New request with URL:" + req.url);
        if (req.url.includes("createNewOrder")) {
            createNewOrder(req, res, body)
        } else if (req.url.includes("listAllOrders")) {
            listAllOrders(req, res, body)
        } else if (req.url.includes("favicon.ico")) {
            res.statusCode = 200;
        } else {
            res.statusCode = 404;
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
