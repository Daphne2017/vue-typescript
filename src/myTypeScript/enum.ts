
(function(){
  enum Color { Red, Green, Blue }
  let c: Color = Color.Green
  let c1: number = Color.Green
  console.log('打印的c值', c)
  console.log('打印的c1值', c1)

  let c2: string = Color[2]
  console.log('打印的c2值', c2)
  let c3: string = Color[Color.Green];
  console.log('打印的c3值', c3)

  const enum MyColor { Black, White }
  let myColor: MyColor = MyColor.Black;
  console.log('myColor', myColor)
//枚举类型的原理
})()


//  https://www.jianshu.com/p/42241a597a50 