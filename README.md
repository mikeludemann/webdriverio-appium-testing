# WebdriverIO Testing

## Prerequisite
```
(sudo) npm install -g selenium-standalone
(sudo) npm install @wdio/cli
(sudo) npm install -g appium
(sudo) npm install -g appium-doctor
```

## Before starting any tests
```
selenium-standalone install
selenium-standalone start
```

## Create config file
```
./node_modules/.bin/wdio config
```

## Test execute

### Web testing
```
./node_modules/.bin/wdio wdio.conf.js
```

### Mobile Web testing
```
./node_modules/.bin/wdio wdio.appium.conf.js
```