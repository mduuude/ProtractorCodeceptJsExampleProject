# Protractor/CodeceptJS Example Project
Test booking.com site functionality using Protractor and CodeceptJS in style "from user's perspective" for demonstration purposes 

## Prerequisites
* **node.js >= 4.2.6**;
* **NPM >= 4.2.0**

## Installation
1. Install dependencies: 
```
npm install
```

```
npm install -g protractor@^5.0.0
```
2. Install `selenium-standalone server`:
```
npm install selenium-standalone@latest -g 
```
```
selenium-standalone install
```

## Run 

### Integration tests
Run npm scripts:

1. start `selenium-standalone server`:
```
npm run server
```
2. in new bash instance start `codeceptjs` test run:
```
npm run e2e
```
## Structure
* /fragments - described page fragments according to page-object pattern and "reusable components" concept
* /helpers - wrappers around used libraries (particularly, **Protractor**)
* /pages - described page according to page-object pattern
* /tests - test scenarios, written in "from user's perspective" style
* /utils - some code snippets used for various purposes through the project
* steps_file.js - custom steps for **"I"** interface to extend test suite  

