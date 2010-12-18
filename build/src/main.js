define('utils/math',['require','exports','module'],function() {
    // just a dummy module
    return {Point: {}, Points: {}};
});
define('ui/../utils/math',['require','exports','module'],function() {
    // just a dummy module
    return {Point: {}, Points: {}};
});
define('ui/button',['../utils/math'], function(math) {
    // just a dummy module that depends on math
    return {Button: {}};
});
define('ui/input',['../utils/math'], function(math) {
    // just a dummy module that depends on math
    return {Input: {}};
});
define('application',['utils/math', 'ui/button', 'ui/input'],
        function(math, button, input) {
            // normally ui deps go to elsewhere.
            // just illustrating the point here
    return {
        run: function() {
            // get the app running now
            // ...
        }
    };
});
require(['application'],
        function(app) {
    app.run();
});
define("main", function(){});
