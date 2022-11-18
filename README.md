

## Docs

[How to Write Google Apps Script Code Locally in VS Code and Deploy It With clasp](https://medium.com/geekculture/how-to-write-google-apps-script-code-locally-in-vs-code-and-deploy-it-with-clasp-9a4273e2d018)

```js
// Put this at the top of file to get autoconmplete
import 'google-apps-script';

```


## Instructions

1. Get script ID from Google sheet app script view Ggear icon > "IDs" > Copy button)
1. Update the `scriptId` in the .clasp.json file.
2. Do a `clasp push` to push local code to remote app script project

## Clasp commands

```bash
# Log into the google account
clasp login

# Pull down files to a local repo
clasp clone

# Push one time to remote project
clasp push
# Push and watch for changes
clasp push -w

# Pull down remote changes
clasp pull

```

## Project IDs

```
Scratch (personal)                                 1cRSCZEpWObhMmPJZPh-TnNgHhHYw2vQmPQG_h3a9OegEfAIDr4E97Cdd
Engineering model                                  1aRFuOopt02qBeyhz9P68vVkrt_46moXFvMzk_lglo-pv75rkdfkoVzPM
Heroku Inventory                                   1eK0CFHHBfaljCeGRsMn41bKraKoTc2sFaK5_l-1ecn5rWtgb6oJ3LK4d
Infrastructure, Heroku, AWS and networking summary 1JvQHU02d6b7yiEHJKxccOpHilZSi6i8xiLscfqplH9O0pWgzhz-Z3xQd
AWS migration model_2022-06-01                     168SGZDYf49mlvgSknYxFciDYM21a6mz3kz8W_jvYNcR1w9PLXbvlPg_h
```