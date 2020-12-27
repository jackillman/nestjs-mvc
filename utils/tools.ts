console.log("tools ts")
import * as shell from "shelljs";
shell.cp( "-R", "src/public", "dist/public" );
shell.cp( "-R", "src/views", "dist/views" );
shell.cp( "-R", "src/DATA/static", "dist/DATA/static" );