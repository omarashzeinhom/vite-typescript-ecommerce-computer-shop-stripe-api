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
  
- [chota 3kb cssframework](https://yarnpkg.com/package/chota)
  
- [stripe js sdk](https://github.com/stripe/stripe-node#installation)

- Packages were added using 
  ```yarn add chota react-router-dom stripe```

#### References

1. [React TypeScript offical language docs](https://www.typescriptlang.org/docs/handbook/react.html)
2. [Stripe - Usage with TypeScript](https://github.com/stripe/stripe-node#usage-with-typescript)
3. [cjav_dev answer at  How to use stripe types in typescript Vikram Khemlani](https://stackoverflow.com/questions/59903956/how-to-use-stripe-types-in-typescript)
4. [chota 3kb css framework](https://yarnpkg.com/package/chota)
