(function () {
    var Site = /** @class */ (function () {
        function Site() {
        }
        Site.prototype.name = function () {
            console.log('打印这个name值吧');
        };
        return Site;
    }());
    var obj = new Site();
    obj.name();
})();
