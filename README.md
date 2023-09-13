# Node Testing Examples
NodeJs And TypeScript Unit Tests

## Topics
- Asserts
- Unit Test

## Technologies
- [TypeScript](https://www.typescriptlang.org/)
- [Assertion Functions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions)
- [Type Assertions](https://www.typescriptlang.org/docs/handbook/2/everyday-types)
- [Jest](https://jestjs.io/)

## How to run
Install dependences
```
npm install
```

Run main
```
npm start
```

Run test
```
npm test
```

## How was it set up?
Setup `typescript` project: 

```
setup-ts-project.sh
```

Setup `Jest`:

```
setup-ts-jest.sh
```

Create `babel` file:

```
babel.config.js
```

Setup `scripts` options in `package.json` file:
```
"scripts": {
    "start": "npx ts-node main.ts",
    "test": "jest"
  }
```

## Other links
- [TypeScript Style Guide: Conventions and code style](https://google.github.io/styleguide/tsguide.html)