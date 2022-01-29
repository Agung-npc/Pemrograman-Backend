(function(){"use strict";var e=require("crypto"),n=require("base64url"),i=require("fs"),r=Date.now(),t=n(e.randomBytes(64));i.appendFile("./config/app.js","\n//UNIX="+r+"\n//APP_KEY="+t,function(e){if(e)throw e}),i.appendFile(".env","\n#UNIX="+r+"\n#APP_KEY="+t,function(e){if(e)throw e;process.exit(0)})}).call(this);

//UNIX=1643371410681
//APP_KEY=4cSU77OnsgNWdsoEccrSmt4LjFFl4yI-38qUS8Mzh996BhA2UcQhiyOVvXqkxRTxrs3QlXl_AySX8jnBsgcuZg