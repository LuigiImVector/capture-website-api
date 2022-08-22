# Capture website API

APIs list:
method | path | params | result
---- | ---- | ------ | ------
GET | `/getImage` | `?url=https://github.com/LuigiImVector/` | screenshot of that website (1920x1080)

> NOTE ❗ <br />
> Write the URL with `https://` or `http://`

### Deploy

1. Clone the repository
2. Install dependencies: `npm install`
3. Run: `npm run test`
4. Go to: `localhost:8000`...

#### Testing using cURL (and ngrok)

Install [ngrok](https://ngrok.com) and write:
```sh
ngrok http 8000
```

Save the url, for example:
```
Forwarding   https://8c9b-151-54-23-194.eu.ngrok.io -> http://localhost:8000
```

Install [cURL](https://curl.se) and write:
```sh
curl -o screenshot.png https://8c9b-151-54-23-194.eu.ngrok.io/getImage?url=https://socus.netlify.app/
```

### Support:
Open an issue, if you want to contribute open a PR.

### Related:
- Use this website to get custom screenshot: https://github.com/LuigiImVector/scrnsht/ (coming soon)

### Credits (libs used):
- https://github.com/sindresorhus/capture-website
- https://github.com/ogt/valid-url
- https://github.com/broofa/mime
