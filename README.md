# expo-env-cli
Environment aware expo-cli wrapper

## Installation
```bash
npm install -g expo-env-cli
# or inside a project
npm install --save-dev expo-env-cli
```

## Uses local expo account
Before executing local expo-cli, this tool executes noninteractive `./node_modules/expo login` using credentials from 'expo-env/credentials.json'.
It uses json keys username and password, for example `expo-env/credentials.json`:
```json
{
  "username": "expo-user123",
  "password": "expo-account-password"
}
```

## Forces the use of `/node_modules'` expo
expo-env fails to run if the local project doesn't have expo installed locally.
Listing the correct expo-cli dependency is important for the project stability.

## Expands expo start
expo-env's start takes additional argument `env`, for example:
```bash
expo-env build:android production --ios
```
The command does the following actions:
- logs into expo using credentials in `expo-env/credentials.json`
- copies expo-env/production.env to .env (if it exists)
- copies expo-env/production.env.json to env.json (if it exists)
- executes expo start --ios

## Expands expo build:android
expo-env's build:android takes additional argument `env`, for example:
```bash
expo-env build:android production
```
The command does the following actions:
- logs into expo using credentials in `expo-env/credentials.json`
- copies expo-env/production.env to .env (if it exists)
- copies expo-env/production.env.json to env.json (if it exists)
- executes `expo build:android --release-channel production`

## Expands expo build:ios
expo-env's build:ios takes additional argument `env`, for example:
```bash
expo-env build:ios production
```
The command does the following actions:
- logs into expo using credentials in `expo-env/credentials.json`
- copies expo-env/production.env to .env (if it exists)
- copies expo-env/production.env.json to env.json (if it exists)
- executes `expo build:ios --release-channel production`

## Expands expo publish
- logs into expo using credentials in `expo-env/credentials.json`
- copies app.json to app.tmp.json
- adds `-production` to app.tmp.json's name
- adds `-production` to app.tmp.json's slug
- executes `expo publish --config app.tmp.json`

## Command build:everything env-name
The commands builds Android apk, iOS IPA and then publishes to expo.  
Useful for cont. integration.

For example, command `expo-env build:everything staging`:
- logs into expo using credentials in `expo-env/credentials.json`
- executes `expo-env build:ios staging` 
- executes `expo-env build:android staging`
- executes `expo-env publish staging`
