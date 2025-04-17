.PHONY: help build-local up down logs ps test test-coverage lint-check lint-fix format-check format-fix
.DEFAULT_GOAL := help

build-local: ## Build docker image to local development
	docker compose build --no-cache

up: ## Do docker compose up
	docker compose up

down: ## Do docker compose down
	docker compose down

logs: ## Tail docker compose logs
	docker compose logs -f

ps: ## Check container status
	docker compose ps

test: ## Execute test
	cd client && docker compose run todo-app npm run test

test-coverage: ## Execute test coverage
	cd client && docker compose run todo-app npm run test:coverage

lint-check: ## Execute lint check
	cd client && docker compose run todo-app npm run lint:check

lint-fix: ## Execute lint fix
	cd client && docker compose run todo-app npm run lint:fix

format-check: ## Execute format check
	cd client && docker compose run todo-app npm run format:check

format-fix: ## Execute format fix
	cd client && docker compose run todo-app npm run format:fix

help: ## Show options
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'