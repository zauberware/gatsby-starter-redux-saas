---
slug: readme
title: "Readme.md"
date: "2017-08-10"
---
# gatsby-starter-redux-saas

The GatsbyJS Starter to build your next SaaS product on gatsby! See [demo](https://gatsby-redux.zauberware.com)

![zauberware technologies](https://github.com/zauberware/gatsby-starter-redux-saas/raw/master/static/website-preview.jpg)

## Quick start

Use the Gatsby CLI to create a new site, specifying the default starter:

```sh
gatsby new my-saas-product https://github.com/zauberware/gatsby-starter-redux-saas
cd my-saas-product
```

Clone `env_sample` file:

```sh
cp env_sample .env.development && cp env_sample .env.production
```

Install packages and run the server:

```sh
yarn && npm start
```


**Backend:** Make sure that the `.env.development` file is included in the root of your project with an GraphQL endpoint defined with `APOLLO_API_URL=https://...` We connected our demo backend as a sample. You can bring your own backend and when it works with JSON Web Token the changes will be trivial. You don't have a backend? Clone this repo [this](https://github.com/zauberware/rails-devise-graphql).


## What's included?

### 1. Redux
This starter uses [react-redux](https://github.com/reduxjs/react-redux) to hold business data and fire actions in the application. Read more abour [redux](https://redux.js.org/basics/usage-with-react) and [combinedReducers](https://redux.js.org/api/combinereducers).

### 2. Apollo Client
To communicate with the application server this starter uses [apollo-client](https://github.com/apollographql/apollo-client). Set the GraphQL endpoint with `APOLLO_API_URL` in `.env.development` and `.env.production`.

With GraphQL your website gains access to hundreds of [APIs](https://github.com/APIs-guru/graphql-apis) worldwide and there are plenty of [libraries and articles](https://github.com/chentsulin/awesome-graphql) for GraphQL.

### 3. Authentication:
Ready to go authentication with [JSON Web Tokens](https://jwt.io/introduction/). The starter saves the current user in the redux store. We have implemented a demo backend with RubyOnRails, but you can connect any other graphQL backend. If the backend  uses JWT the changes in the code will be trivial.

### 4. Optimized Images
No more large, unoptimized images which dramatically slow down your site. The starter uses [gatsby-image](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-image) for optimized image loading.

### 5. SEO friendly
 The starter uses [react-helmet](https://github.com/nfl/react-helmet) and [gatsby-plugin-sitemap](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sitemap) to make search engines happy.

### 6. Google Webmaster Tools
Define your google *webmaster key* to confirm the ownership in Google Webmaster Tools. Choose *Meta-Tag* when the Google asks you for the confirmation method. Set the key here in `gatsby-config.js`. The starter **does not** integrate Google Analytics so if you need it [install it by yourself](https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/).

### 7. Responsive UIs
This starter uses the base component library [magicsoup.io/stock](https://github.com/magicsoup-io/magicsoup-stock). magicsoup.io gives you are rapid start to create wonderful UIs with [styled-components](https://github.com/styled-components/styled-components) and [styled-system](https://github.com/jxnblk/styled-system).

### 8. Static content with JSON and Markdown
This starter is combining those benefits with GatsbyJS' automatic slug and page creation via [gatsby-transform-remark](https://www.styled-components.com/) or setting static page data with [gatsby-transform-json](https://www.styled-components.com/). 

### 9. Convert Markdown to StyledComponents
When you love `styled-components` and `styled-system` we have good news: Map your styled-components to markdown or other HTML output from a file system or any other external API. The starter uses `marksy` to map the generated HTML to custom defined `styled-components`. Not all are set, so do it by yourself under `src/templates/default-page.js`.

### 10. Web-Fonts
Every modern website or web app has a custom font. The starter uses [gatsby-plugin-web-font-loader](https://github.com/escaladesports/gatsby-plugin-web-font-loader) to load fonts from any server: Custom, Fontdeck, Fonts.com, Google, Typekit. Read more about the [webfontloader](https://github.com/typekit/webfontloader).

### 11. SSR
The starter is SSR ready. Make `npm run build` to create the production resources. Choose your favorite [deployment method](https://www.gatsbyjs.org/docs/deploying-and-hosting/) and prepare your app for production.

### 12. Testing
The starter includes everything you need to test your components with [jest](https://jestjs.io/docs/en/getting-started). Run `npm test` and see the run the first tests we have implemented.

### 13. Backend
If you need a demo backend than have a look at this basic [RubyOnRails boilerplate](https://github.com/zauberware/rails-devise-graphql). It implements authentication with  [devise](https://github.com/plataformatec/devise) + [graphql-ruby](https://graphql-ruby.org/getting_started).


## Author

__Script:__ <https://github.com/zauberware/gatsby-starter-redux-saas>  
__Author website:__ [https://www.zauberware.com](https://www.zauberware.com)    

![zauberware technologies](https://avatars3.githubusercontent.com/u/1753330?s=200&v=4)
