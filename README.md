## Development Environment
- Node.js: `>=12.0.0`

## Install dependencies
`yarn`

## Start Server

Server started at http://localhost:1234 . Parcel is used for bundler.
`yarn start`

## homework

1. 配置Cypress，并实现以下内容：
a）执行命令 npm run cypress:open，启动Cypress Test Runner
b）npm start启动项目后，执行命令 npm run cypress:run，成功跑过项目中的Cypress测试
c）不使用npm start启动项目，执行命令 npm run cypress，实现自动启动项目，并成功跑过项目中的Cypress测试

2. 配置Jest，并实现以下内容：
a）执行命令 npm run test，成功跑过项目中的单元测试
b）使用jest-coverage-ratchet库，并添加prepush，实现执行命令 git push时，自动提升测试覆盖率

3. 配置Eslint，并实现以下内容：
a）推荐extends airbnb, plugin:react/recommended, plugin:jest/recommended, plugin:cypress/recommended等
b）执行命令npm run lint，检查代码中的eslint问题
c）使用eslint自动修复 或 手动修复的方式，修复代码中所有eslint相关问题
d）可根据实际情况，修改相关rules

4. 配置Prettier，添加pre-commit hook，实现提交代码前自动格式化
