# Demo repo illustrating RequireJS issue

Note that you need to copy RequireJS to the root of the project in order to build it. Use '/requirejs/build/build.{bat/sh} app.build.js' to run the build. Note that you may have to use backslashes on win (thanks MS! :P).

If you examine the build you'll see that build/main.js contains some modules multiple times (not cool!). I guess this might have something to do with relative imports I'm using...

