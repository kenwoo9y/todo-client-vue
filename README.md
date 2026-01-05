# todo-client-vue

This is a ToDo Web Client built with Vue.js, offering a seamless and intuitive user experience.

## Tech Stack
![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Vuetify](https://img.shields.io/badge/Vuetify-1867C0?style=for-the-badge&logo=vuetify&logoColor=AEDDFF)
![Axios](https://img.shields.io/badge/Axios-5A29E4.svg?style=for-the-badge&logo=Axios&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Vitest](https://img.shields.io/badge/-Vitest-252529?style=for-the-badge&logo=vitest&logoColor=FCC72B)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-%23F7B93E.svg?style=for-the-badge&logo=prettier&logoColor=black)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

### Programming Languages
- [JavaScript](https://developer.mozilla.org/en/docs/Web/JavaScript) - Primary development language

### Frontend
- [Vue.js](https://vuejs.org/) v3.4.21 - Progressive JavaScript framework
- [Vuetify](https://vuetifyjs.com/) v3.6.3 - Material Design component framework
- [Vue Router](https://router.vuejs.org/) v4.3.0 - Official routing library for Vue.js
- [Pinia](https://pinia.vuejs.org/) v2.1.7 - State management library for Vue.js
- [Axios](https://axios-http.com/) v1.7.2 - Promise based HTTP client

### Development Environment
- [Node.js](https://nodejs.org/) v22 - JavaScript runtime environment
- [npm](https://www.npmjs.com/) v10.2.4 - Node.js package manager
- [Vite](https://vitejs.dev/) v5.2.8 - Next generation frontend build tool
- [Docker](https://www.docker.com/) with Compose v3.9 - Containerization platform for building and managing applications

### Testing & Quality Assurance
- [Vitest](https://vitest.dev/) v3.0.9 - Vite-native unit testing framework
- [ESLint](https://eslint.org/) v9.17.0 - JavaScript code quality and style checker
- [Prettier](https://prettier.io/) v3.2.5 - Code formatter

### CI/CD
- GitHub Actions - Continuous Integration and Deployment

## Setup
### Initial Setup
1. Clone this repository:
    ```
    $ git clone https://github.com/kenwoo9y/todo-client-vue.git
    $ cd todo-client-vue
    ```

2. Build the required Docker images:
    ```
    $ make build-local
    ```

3. Start the containers:
    ```
    $ make up
    ```

## Usage
### Container Management
- Check container status:
    ```
    $ make ps
    ```
- View container logs:
    ```
    $ make logs
    ```
- Stop containers:
    ```
    $ make down
    ```

## Development
### Running Tests
- Run tests:
    ```
    $ make test
    ```
- Run tests with coverage:
    ```
    $ make test-coverage
    ```

### Code Quality Checks
- Lint check:
    ```
    $ make lint-check
    ```
- Apply lint fixes:
    ```
    $ make lint-fix
    ```
- Check code formatting:
    ```
    $ make format-check
    ```
- Apply code formatting:
    ```
    $ make format-fix
    ```

---
## セットアップ
### 初期セットアップ
1. リポジトリをクローン:
    ```
    $ git clone https://github.com/kenwoo9y/todo-client-vue.git
    $ cd todo-client-vue
    ```

2. 必要なDockerイメージをビルド:
    ```
    $ make build-local
    ```

3. コンテナを起動:
    ```
    $ make up
    ```

## 使用方法
### コンテナ管理
- コンテナのステータスを確認:
    ```
    $ make ps
    ```
- コンテナのログを表示:
    ```
    $ make logs
    ```
- コンテナを停止:
    ```
    $ make down
    ```

## 開発
### テストの実行
- テストを実行:
    ```
    $ make test
    ```
- カバレッジ付きでテストを実行:
    ```
    $ make test-coverage
    ```

### コード品質チェック
- リンターチェック:
    ```
    $ make lint-check
    ```
- リンターの修正を適用:
    ```
    $ make lint-fix
    ```
- コードフォーマットをチェック:
    ```
    $ make format-check
    ```
- コードフォーマットを適用:
    ```
    $ make format-fix
    ```