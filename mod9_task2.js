const jsonStr = 
 `{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`

let data = JSON.parse(jsonStr);
let lst = [];

let result = new Object()

for ( let i=0; i<2; i++){
 /* let tmpObj = new Object ();
   tmpObj.age= 1* data.list[i].age
   tmpObj.name= data.list[i].name
   tmpObj.prof= data.list[i].prof
   // это как в уроке было
   */

  let tmpObj = data.list[i] ; //а тут сразу вернется объект нужной структуры
  tmpObj.age= 1* data.list[i].age; // надо только тип поля поменять

  lst.push(tmpObj);  
}
result.list=lst;
console.log(result);
                     

