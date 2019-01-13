# mdcreact101
A series of MDC React Sample and Demos for Experimenting with TypeScript
CRA projects are perfectly fine for SASS, just install node-sass, rename the css files to scss where you want to use SASS syntax, and add .env with SASS_PATH to node_modules.
- **npx create-react-app . --typescript**
- **npm install react@next react-dom@next prop-types** for React Hooks 16.8.0-alpha.0
- **npm install node-sass**
- Add **.env** with **SASS_PATH=./node_modules**

## Top App Bar
[top-app-bar](https://github.com/material-components/material-components-web-react/tree/master/packages/top-app-bar)
- **npm install @material/react-top-app-bar @material/react-material-icon**
- Rename App.css to **App.scss** and replace its content with
```
import '@material/react-top-app-bar/index.scss';
import '@material/react-material-icon/index.scss';
```
- **npm install @material/react-drawer @material/react-list @material/react-menu-surface**
