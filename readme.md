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
27. 