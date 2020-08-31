# Figma Integration

Note: This project was created just for educational purposes.

## Setup

### Install dependencies

You need to have installed:
* Yarn > 1.19, https://classic.yarnpkg.com/en/docs/install
* Ruby > 2.6 and bundler, https://bundler.io/
* Node > 12.14, https://nodejs.org/es/download/

```
bundle
yarn --cwd client install
```

### Set environment variables

```
cp .env-sample .env
```

Create a Figma account in https://www.figma.com/, and then setup your Figma API ID from your settings (make sure to copy when created before closing settings).
And then complete `FIGMA_API_ID` with the correct value.

If you want to change your `FIGMA_FILE_ID`, you will need to clone the https://www.figma.com/file/O2BmBEZbGjcpD3pHD2JMmG/kit-UI---Tesis file.
Customize as you want and then copy the new https://www.figma.com/file/<FIGMA_FILE_ID> from the url and setup in the `.env` file.

## Run app

For the first time you will need to setup your environment with:

```
bundle exec rake postgres
bundle exec rake database
```

And then finally you can start the app with:

```
bundle exec rake start
```

Navigate to http://localhost:3000/

## Run tests

### Client

```
yarn --cwd client test --watchAll=false --passWithNoTests
```

### API

```
bundle exec rake
```
