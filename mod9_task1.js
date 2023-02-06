const xmlString = 
      `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;
/*
{
  list: [
    { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
    { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
  ]
}
*/

let parser = new DOMParser();

let xmlDOM = parser.parseFromString(xmlString, "text/xml");
let listNodes = xmlDOM.querySelectorAll("student");
let result = new Object();
let list = Array.from(listNodes);
let listJs = new Array();

for(let i=0; i<list.length; i++) {
let studentObj = new Object();
  studentObj.name = list[i].querySelector("first").textContent 
  + ' '+ list[i].querySelector("second").textContent; 
  studentObj.age = 1 * list[i].querySelector("age").textContent;
  studentObj.prof = list[i].querySelector("prof").textContent;
  studentObj.lang = list[i].querySelector("name").getAttribute("lang");
  
  listJs.push(studentObj);
  
}
result.listJs = listJs;
console.log(result);

