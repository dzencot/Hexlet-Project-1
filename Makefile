install:
	npm install
run:
	npm run babel-node -- ./bin/$(G)
lint:
	npm run eslint ./bin/
publish:
	npm publish
