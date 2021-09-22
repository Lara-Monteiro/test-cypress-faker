var rimraf = require("rimraf");

rimraf.sync("reports/cucumber-json/*");
rimraf.sync("reports/html/*");
rimraf.sync("reports/screenshots/spec/*")