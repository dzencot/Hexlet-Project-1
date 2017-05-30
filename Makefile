install:
	npm install
run:
	npm run babel-node -- ./src/bin/$(G)
lint:
	npm run eslint ./
publish:
	npm publish
build:
	rm -rf dist
	npm run build
