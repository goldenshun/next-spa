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
```
import withNextSpa from 'next-spa';
import { Router, Link } from '../routes'; // The next-routes file.

// Assuming you defined route: ('user', '/user/:id')
const Index = () => (
  <Link route="/user/123"><a>User 123</a></Link>
);

export default withNextSpa(Router)(Index);
```

### Configuration
More than likely, you want to [statically export](https://nextjs.org/docs/#static-html-export) your app. In a single page app, you only need to export the index. You can configure this yourself or you can use the built-in config:
```
// next.config.js
const withNextSpa = require('next-spa/config');

module.exports = withNextSpa();
```