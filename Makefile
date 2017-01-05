install:
	npm install
run:
	npm run babel-node -- ./bin/$(G)
lint:
	npm run eslint ./
publish:
	npm publish
