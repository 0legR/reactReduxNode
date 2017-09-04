1. 	npm init -y (create default settings package.json)
2. git init
3. npm i --save-dev babel-cli
4. npm i --save express
5. create new command for run server in package.json => "scripts": {
	"server": "babel-node server/index.js",}
6. configure babel -> in root folder of project (where package.json) create file .babelrc
7. add to .babelrc => {"presets": ['es2015']}
8. npm i --save-dev babel-preset-es2015
9. after all this 'npm run server' must run server
10. create index.html in root folder
11. for restart server when update browser page => npm i --save-dev nodemon
12. in package.json => "scripts": {
	"server": "nodemon --watch server --exec babel-node -- server/index.js",}
13. create in root folder .gitignore and add =>
												.DS_Store
												node_modules
	for do not write to git folder node_modules
14. git status
15. git add .
16. git commit -m 'initial commit'
17. remove from index.html hello world and add div with id="app"
18. in root folder create client folder within index.js
19. npm i --save react react-dom
20. into index.html add <script src="bundle.js"></script>
	This need for webpack. Webpack bundle all client stuff to bundle.js
21. import webpack stuff to server/index.js
22. create webpack.config.dev.js and configure it
23. npm i --save-dev webpack webpack-dev-middleware
24. npm i --save-dev babel-loader
25. add to .bablerc => "presets": ["es2015", "react"]
26. npm i --save-dev babel-preset-react
27. for hot update DOM add webpackHotNiddleware to server/index.js
28. npm i --save-dev react-hot-loader webpack-hot-middleware
29. npm i --save react-router-dom
30. npm i --save lodash  => this's for map lodash (not used)
31. npm i --save axios
32. npm i --save redux react-redux redux-thunk
33. npm i --save body-parser  => middleware for router node
34. npm i --save validator  => for validate into node side
35. npm i --save classnames => for work with addition classNames for instance has-error
36. npm i --save shortid
37. npm i --save-dev style-loader css-loader file-loader url-loader jquery  => for bootstrap local
