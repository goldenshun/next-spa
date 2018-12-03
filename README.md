# next-spa

Enables single page applications for [Next.js](https://nextjs.org).

## Installation
`npm i next-spa`

## Usage

To enable spa mode you will need to:
- Define routes
- Wrap your index.js page in the `next-spa` HOC
- Configure your server to always serve the index page

### next-routes
`next-spa` depends on routes defined with [next-routes](https://github.com/fridays/next-routes). Follow instructions there to create a `routes.js` file.

### withNextSpa
Wrap in your `index.js` page with the `next-spa` HOC.
```
import withNextSpa from 'next-spa';
import { Router, Link } from '../routes'; // The next-routes file.

// Assuming you defined route: ('user', '/user/:id')
const Index = () => (
  <Link route="/user/123"><a>User 123</a></Link>
);

export default withNextSpa(Router)(Index);
```

### dev-server
For local development, you need to configure your server to always serve the index.
```
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

app.prepare()
  .then(() => {
    createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      const { query } = parsedUrl;
      app.render(req, res, '/', query); // Every request is served with the index.
    })
      .listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
      });
  });

```

### Configuration
More than likely, you want to [statically export](https://nextjs.org/docs/#static-html-export) your app. In a single page app, you only need to export the index. You can configure this yourself or you can use the built-in config:
```
// next.config.js
const withNextSpa = require('next-spa/config');

module.exports = withNextSpa();
```

### Production
There are many ways to route all traffic to your index page in production. If you are using [now](https://zeit.co/now), you can add this block to your `now.json` file:

```
"static": {
  "public": "public",
  "rewrites": [
    { "source": "/**", "destination": "/index.html" }
  ]
}
```
This unfortunately only works in Now V1. If you know how to do this in V2, create an issue and I can update the demo.