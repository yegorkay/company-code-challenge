# company

This repository is the foundations for the marketing engineering ui exercise. It contains a simple application built with [next.js](https://nextjs.org/) (and thus react and react-dom), [styled-components](https://www.styled-components.com/), a custom config for babel (support for styled-components and svg imports) and eslint (linting with a custom set of rules). All the setup has been done and you have a similar environment you'll have working with us. We know that you may not know every single technology we're using so we encourage you to ask, be communicative and forthcoming to us, we're here to help :)

## Prerequisites

* `npm 6.13.4`
* `node 12.14.0`

## Development

Install the dependencies

```sh
$ npm install
```

Run the development app

```sh
$ npm run dev
```

## Production

Build the app for production

```sh
$ npm run build
```

Run the production app

```sh
$ npm run start
```

## Usage

If you're not super familiar with next.js or styled components, in the following paragraphs you will find resources to work with.

### Components

You can write react components wherever you want. We've created a `/components` folder but feel free to create them wherever you want, and architect the application as you wish.

### Styled-components

Styled components is one of the most used CSS-in-JS solutions nowadays. The idea is to create isolated components that scope out our styles. We recommend to [rely on props](https://www.styled-components.com/docs/basics#adapting-based-on-props) if you want create dynamic styling or to represent different states. If you have any doubts please ask us.

You can read more about it here: [styled-components docs](https://www.styled-components.com/docs)

### Routes

To create a route simply create a file inside the `/pages` folder. Your route will have the name that your file has without the `.js` extension.

You can read more about it here: [Routing in next.js](https://nextjs.org/docs/routing/introduction)
