(function(){
  let x:any[] = [1,'23',true,[1,2,3]]
  console.log('属于any类型的x变量',x)
  let y:any=123
  y='abc'
  y={
    name:'yys',
    age:25
  }
  console.log('属于any类型的y变量',y)
  console.log('this',this)
})()
