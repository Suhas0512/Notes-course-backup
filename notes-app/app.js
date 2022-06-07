const fs = require("fs");
fs.writeFileSync("notes.txt", "My name is Suhas.");
fs.appendFileSync("notes.txt", "I am 28 years old and live in bangalore");
