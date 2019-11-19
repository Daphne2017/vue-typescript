(function () {
    /*
    变量作用域
    变量作用域指定了变量定义的位置。
    
    程序中变量的可用性由变量作用域决定。
    
    TypeScript 有以下几种作用域：
    
    全局作用域 − 全局变量定义在程序结构的外部，它可以在你代码的任何位置使用。
    
    类作用域 − 这个变量也可以称为 字段。类变量声明在一个类里头，但在类的方法外面。 该变量可以通过类的对象来访问。类变量也可以是静态的，静态的变量可以通过类名直接访问。
    
    局部作用域 − 局部变量，局部变量只能在声明它的一个代码块（如：方法）中使用。
    
    以下实例说明了三种作用域的使用：
     */
    var global_num = 12; // 全局变量
    var Numbers = /** @class */ (function () {
        function Numbers() {
            this.num_val = 13; // 实例变量
        }
        Numbers.prototype.storeNum = function () {
            var local_num = 14; // 局部变量
            return local_num;
        };
        Numbers.sval = 10; // 静态变量
        return Numbers;
    }());
    console.log("全局变量为: " + global_num);
    console.log(Numbers.sval); // 静态变量
    var obj = new Numbers();
    console.log("实例变量: " + obj.num_val);
    console.log("局部变量的值: " + obj.storeNum());
    // Site对象
    var Site = /** @class */ (function () {
        function Site() {
        }
        Site.prototype.name = function () {
            console.log('打印这个name值吧');
        };
        return Site;
    }());
    var obj1 = new Site();
    obj1.name();
})();
