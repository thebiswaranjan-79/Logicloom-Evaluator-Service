##  How to Setup Express Server Using Typescript 
 1. npm init -y 

 2. Install typeScript 
        =>npm install -g typescript 
        => npx tsc --init
 3. Install Express with types 
        => npm i -D @types/express

 4. Add these Scripts in package.json
        "scripts": {
            "build": "npx tsc",
            "watch": "npx tsc -w",
            "prestart": "npm run build",
            "start": "npx nodemon dist/index.js",
            "dev": "npx concurrently \"npm run watch\" \"npm start\""
        },
5. npm run dev