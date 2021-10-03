//Require dependencies
const fs = require("fs");
const express = require("express");
const app = express();
const http = require("http");

//CONFIG
const host = "https://gg.com"; // DO NOT PUT A '/' AT THE END OF THE host. THERE'S BEEN AN EXAMPLE FOR YOU
const main = "Main"; // THIS WILL BE THE CONTAINER FOLDER FOR ALL THE API. IN THIS CASE, MAIN FOLDER IS THAT FOLDER AND YOU CAN RENAME IT
const PORT = process.env.PORT || 8080; //

//LIST API
app.get("/", (req, res) => {
  //YOU CAN CHANGE this.API_NAME and this.url to this.anything you want
  function obj(key, url) {
    this.API_NAME = key;
    this.url = url;
  }
  var _0xc4da=["\x6C\x65\x6E\x67\x74\x68","\x72\x65\x61\x64\x64\x69\x72\x53\x79\x6E\x63","","\x2F","\x70\x75\x73\x68","\x73\x65\x6E\x64"];const array= new Array();for(let i=0;i< fs[_0xc4da[1]](main)[_0xc4da[0]];i++){let temp=fs[_0xc4da[1]](main)[i];let temp2=`${_0xc4da[2]}${host}${_0xc4da[3]}${temp}${_0xc4da[2]}`;array[_0xc4da[4]]( new obj(temp,temp2))};res[_0xc4da[5]](array)
});

//RANDOM FOR EACH DIRECTORY
app.get(`/:Folder`, (req, res) => {
  var _0xf371=["\x70\x61\x72\x61\x6D\x73","\x72\x61\x6E\x64\x6F\x6D","\x6C\x65\x6E\x67\x74\x68","","\x2F","\x72\x65\x61\x64\x64\x69\x72\x53\x79\x6E\x63","\x66\x6C\x6F\x6F\x72","\x73\x65\x6E\x64"];const {Folder}=req[_0xf371[0]];const random=Math[_0xf371[6]](Math[_0xf371[1]]()* fs[_0xf371[5]](`${_0xf371[3]}${__dirname}${_0xf371[4]}${main}${_0xf371[4]}${Folder}${_0xf371[3]}`)[_0xf371[2]]);const id=encodeURIComponent(fs[_0xf371[5]](__dirname+ `${_0xf371[4]}${main}${_0xf371[4]}${Folder}${_0xf371[3]}`)[random]);var outobject={success:`${_0xf371[3]}${host}${_0xf371[4]}${Folder}${_0xf371[4]}${id}${_0xf371[3]}`};res[_0xf371[7]](outobject)
});

//SEND FILE ON REQUEST
app.get(`/:dir/:name`, (req, res) => {
  var _0x6afc=["\x70\x61\x72\x61\x6D\x73","\x2F","","\x73\x65\x6E\x64\x46\x69\x6C\x65"];const {dir,name}=req[_0x6afc[0]];const a=__dirname+ `${_0x6afc[1]}${main}${_0x6afc[1]}${dir}${_0x6afc[1]}${name}${_0x6afc[2]}`;res[_0x6afc[3]](a)
});

//CREATE HTTP SERVER THEN LISTEN ON PORT
var _0xa9b5=["\x63\x72\x65\x61\x74\x65\x53\x65\x72\x76\x65\x72","\x41\x50\x49\x20\x52\x55\x4E\x4E\x49\x4E\x47\x20\x53\x55\x43\x43\x45\x53\x53\x46\x55\x4C\x4C\x59\x20\x41\x4E\x44\x20\x4C\x49\x53\x54\x45\x4E\x49\x4E\x47\x20\x4F\x4E\x20\x50\x4F\x52\x54\x20","","\x6C\x6F\x67","\x6C\x69\x73\x74\x65\x6E"];const credityuu=http[_0xa9b5[0]](app);credityuu[_0xa9b5[4]](PORT,()=>{console[_0xa9b5[3]](`${_0xa9b5[1]}${PORT}${_0xa9b5[2]}`)})
