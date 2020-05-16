# Figma2CSS-Web

## Starting the server:

> npm i -g https://github.com/LeoLFerraz/Figma2CSS-Web.git

> figma2css

### Tech Details

- Nuxt/Express framework
- Universal app (SSR)
- Axios for Figma API handling

### Main product requirements:

- Global install, start app from anywhere
- Use users' own Figma API credentials
- App lists Figma Layouts, users select which one will be handled
- App reads layouts and extracts CSS from node elements to a specified file
- App renders an image of the current layout
- Watch-mode - meaning a change in the layout triggers changes in the generated CSS and image


### Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
