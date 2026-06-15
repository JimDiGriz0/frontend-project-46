install:
	npm ci

run:
	bin/gendiff.js __fixtures__/file1.json __fixtures__/file2.json

deps-install:
	npm ci

deps-update:
	npx ncu -u

test:
	npm test

test-coverage:
	npm run test:coverage

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

lint-json:
	npx eslint . --format json

.PHONY: test