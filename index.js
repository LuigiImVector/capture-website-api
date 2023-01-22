import http from 'http';
import url from 'url';
import validUrl from 'valid-url';
import { getImage } from './modules/controller.js';
import { logHttpRequest } from './modules/utils.js';

const port = 8000;

const server = http.createServer((req, res) => {
    const reqUrlParse = url.parse(req.url, true);
    const path = reqUrlParse.pathname;
    let urlQuery;
    if (validUrl.isWebUri(reqUrlParse.query.url)) {
        urlQuery = url.parse(req.url, true).query.url;
    }

    if (req.method == "GET") {
        switch (path) {
            case "/getImage":
                try {
                    getImage(urlQuery, res);
                } catch (error) {
                    console.log(error);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.write(String(error));
                    res.end();
                }
                break;
            default:
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.write("Wrong request, read the documentation");
                res.end();
        }
    } else {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.write("Method not supported, read the documentation");
        res.end();
    }

    logHttpRequest(req, res);
});

server.listen(port, () => {
    console.log(`Server running at port ${port}!`);
});
