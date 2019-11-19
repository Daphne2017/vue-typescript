(function () {
    var x = [1, '23', true, [1, 2, 3]];
    console.log('属于any类型的x变量', x);
    var y = 123;
    y = 'abc';
    y = {
        name: 'yys',
        age: 25
    };
    console.log('属于any类型的y变量', y);
})();
