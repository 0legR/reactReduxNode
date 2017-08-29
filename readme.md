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
14.