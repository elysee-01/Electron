// Package principale
const electron = require("electron");
// Programme principale
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let win;

console.log(process.platform);

function run() {
  // fenettre principale
  win = new BrowserWindow({
    width: 252,
    height: 425,
    backgroundColor: "#eeeeff",
    resizable: false,
    center: true,
    darkTheme: true,
    // frame: false,
    // parent: parentFrame,
    // modal: true,
  });

  win.loadFile("index.html");

  // Fermeture de la fenettre
  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", run);
