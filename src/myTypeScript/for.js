
(function(){
  // var arr = [1,2,3,4,5];node3

/*   for(var i=0; i<arr.length;i++){
    console.log(i)
    if(i== 1) break; 可以使用break
  } */
/*   for (var i = 0; i < arr.length; i++) {
    console.log(i)
    if (i == 1) return;
  } */
/*   for (var i = 0; i < arr.length; i++) {
    console.log(i)
    if (i == 1) continue;
    console.log(i)
  } */
/*   arr.forEach((index,item) => {
    console.log(item)
    if(index == 2) break;  //无法使用break
   
 }); */
 var obj = {
   name:'yys',
   age:25,
   money:'',
   height: 165,
   sex:"女"

 }
/*   for (const key in obj) {
    console.log(obj[key])
    if(!obj[key]) break;

 } */
/*   for (const [index,value] of arr.entries()) {
   console.log(index)
   console.log(value)
 } */
// for (const value of arr) {

//   console.log('默认',value)
//   if(value == 4) break;
// } 
 var arr = new Set(['a', 'b', 'c'])
  console.log(arr.entries())
  for (let v of arr.keys()) {
    console.log(v)
  }
  var arr1 = ['a', 'b', 'c']
  console.log(arr1.entries())
  for (let v of arr1.keys()) {
    console.log(v)
  }  
// ['a', 'a'] ['b', 'b'] ['c', 'c']
  let set = new Set([1, 2, 3]);
  set = new Set([...set].map(x => x * 2));
  // 返回Set结构：{2, 4, 6}
  console.log('set结构',set)
  // let set = new Set([1, 2, 3, 4, 5]);
  // set = new Set([...set].filter(x => (x % 2) == 0));
})()

