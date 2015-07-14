Install Dependencies:
`npm install`

Launch Development Server: 
`npm run debug`

Start Electron:
`electron .`


Build For Production:
`npm run build`

Note you must modify /electron/main.js to point to 'prod.html' so it looks for static asset files instead of your webpack dev server.  TODO: Make this process automatic


