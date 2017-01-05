install:
	npm install
run:
	npm run babel-node -- ./src/bin/$(G)
lint:
	npm run eslint ./
publish:
	npm publish
