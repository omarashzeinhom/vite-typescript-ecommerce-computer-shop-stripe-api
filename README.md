# About

1. A Vite Shop written in typescript by Omar Ashraf Zeinhom as trainning for typescript Projects
2. GUI and everything was built from scratch
3. However this was a learning project so all credits go to [WebDevSimplified](https://github.com/WebDevSimplified) In terms of the page logic
4. Again this was just a learning project so i just adapted it a little bit

- Required
- 1. [nodejs version 14.18+, 16+](https://nodejs.org/en/)

## Created By

[Vite js Docs - Scaffolding Your First Vite Project](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)

```
yarn create vite
```

### Start By

- Install Packages ``` yarn install ```
- Start Server by ```yarn run dev```
- Go to ```http://127.0.0.1:5173/```

```
import Stripe from 'stripe';
const stripe = new Stripe(
  'sk_test_...', 
  {
    apiVersion: '2019-12-03',
    typescript: true,
  }
)
```

#### Packages installed 

- [react-router-dom](https://yarnpkg.com/package/react-router-dom)
  
- [mdb-react-ui-kit](https://mdbootstrap.com/docs/react/getting-started/installation/)
  
- [stripe js sdk](https://github.com/stripe/stripe-node#installation)

- Packages were added using 
  ```yarn add mdb-react-ui-kit react-router-dom stripe @fortawesome/fontawesome-free```

and add CSS FILES to 
`index.html`
``

#### References

1. [React TypeScript offical language docs](https://www.typescriptlang.org/docs/handbook/react.html)
2. [Stripe - Usage with TypeScript](https://github.com/stripe/stripe-node#usage-with-typescript)
3. [cjav_dev answer at  How to use stripe types in typescript Vikram Khemlani](https://stackoverflow.com/questions/59903956/how-to-use-stripe-types-in-typescript)
4. [Navbar - MDB Boostrap React](https://mdbootstrap.com/docs/react/navigation/navbar/)
5. [Date.now() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now?retiredLocale=ar)
6. [Colors - MDBBootstrap](https://mdbootstrap.com/docs/standard/content-styles/colors/)
7. [Text wrapping and overflow - MDBBootstrap](https://mdbootstrap.com/docs/react/utilities/text/)