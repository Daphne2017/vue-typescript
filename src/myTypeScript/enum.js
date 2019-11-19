var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var c1 = Color.Green;
console.log('打印的c值', c);
console.log('打印的c1值', c1);
var c2 = Color[2];
console.log('打印的c2值', c2);
var c3 = Color[Color.Green];
console.log('打印的c3值', c3);
var myColor = 0 /* Black */;
console.log('myColor', myColor);

// https://www.jianshu.com/p/42241a597a50 
