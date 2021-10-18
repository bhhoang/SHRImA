"use strict";
 /*
 ================================================================= 
 ||                          CONFIG                             ||
 =================================================================
*/
const host = "https://gg.com"; // DO NOT PUT A '/' AT THE END OF THE host. THERE'S BEEN AN EXAMPLE FOR YOU
const main = "Siesta"; // THIS WILL BE THE CONTAINER FOLDER FOR ALL THE API. IN THIS CASE, MAIN FOLDER IS THAT FOLDER AND YOU CAN RENAME IT
const PORT = process.env.PORT || 8080; //

 /*
 ================================================================= 
 ||                    REQUIRE DEPENDENCIES                     ||
 =================================================================
*/
import fs from "fs-extra"
import express from "express"
const app = express();
import http from "http"
import chalk from "chalk"
import AutoGitUpdate from 'auto-git-update';
import readline from "readline";
import { dirname } from "path";
import { fileURLToPath } from 'url';
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
var isUpdated = false;
console.log()
let config = {
  repository: 'https://github.com/bhhoang/self-hosted-random-image-api',
  tempLocation: `${path.join(__dirname, '..' , 'Temporary')}`,
  branch: "main",
  exitOnComplete: false
}
function up() {
log("Check for update [Y/N]?");
rl.question("", (ans) => {
  switch (ans.toLowerCase()) {
    case "y":
    const updater = new AutoGitUpdate(config);
    updater.forceUpdate()
    setTimeout(() => {isUpdated = true},10000);
    rl.close()
    case "n":
      isUpdated = true;
      rl.close();
  }
});
}
up()
// Some consosle function
function warn(p) {
  console.log(chalk.red("[ WARNING ]") + " " + p);
}
function log(p) {
  console.log(chalk.green("[ CONSOLE ]") + " " + p);
}

rl.on("close", () => {


   /*
 ================================================================= 
 ||               CHECK FOLDER EXIST OR CREATE                  ||
 =================================================================
*/
if (isUpdated == true) {
let checker = new Promise((resolve, reject) => {
  if (!fs.existsSync(`${__dirname}/${main}`)) {
    console.warn(`Couldn't find folder ${main}, Creating one`);
    setTimeout(crt, 1000);
    async function crt() {
      try {
        fs.mkdirSync(`${__dirname}/${main}`);
      } catch (e) {
        warn(e);
      }
    }
    setTimeout(resolve, 1000);
  }
  if (fs.readdirSync(main).length == 0) {
    setTimeout(reject, 1000);
  }
});
checker
  .then()
  .then(() => {
    return skin();
  })
  .catch(() => {
    warn(
      "Folder existed but there's nothing in it, please add something to it"
    );
    setTimeout(skin, 1000);
  });
}
  /*
 ================================================================= 
                            LIST API
 =================================================================
*/
  app.get("/", (req, res) => {
    function obj(key, url) {
      this.API_NAME = key;
      this.url = url;
    }
    const array = new Array();
    for (let i = 0; i < fs.readdirSync(main).length; i++) {
      //create new array then append object
      let temp = fs.readdirSync(main)[i];
      let temp2 = `${host}/${temp}`;
      array.push(new obj(temp, temp2));
    }
    res.send(array);
  });
  /*
 ================================================================= 
                   RANDOM FOR EACH DIRECTORY
 =================================================================
*/
  app.get(`/:Folder`, (req, res) => {
    const { Folder } = req.params;
    const random = Math.floor(
      Math.random() * fs.readdirSync(`${__dirname}/${main}/${Folder}`).length
    );
    const id = encodeURIComponent(
      fs.readdirSync(__dirname + `/${main}/${Folder}`)[random]
    );
    var outobject = {
      success: `${host}/${Folder}/${id}`,
    };
    res.send(outobject);
  });

  /*
 ================================================================= 
                   SEND FILE ON REQUEST
 =================================================================
*/
  app.get(`/:dir/:name`, (req, res) => {
    const { dir, name } = req.params;
    const imagePath = __dirname + `/${main}/${dir}/${name}`;
    res.sendFile(imagePath);
  });

  function skin() {
    const credityuu = http.createServer(app);
    credityuu.listen(PORT, () => {
      log(`Api running successfully and listening on port ${PORT}!`);
    });
  }
});
