
// // 객체 리터럴 방식으로 객체 생성
// const person = {
//   name : 'Viktor',
//   age : 30,
//   greeting: function() {
//     console.log(`Hello, my name is ${this.name}`)
//   }
// }
// // 객체의 메서드 호출
// person.greeting() // Hello, my name is Viktor


// const member = {
//   name : 'Viktor',
//   age : 22,
//   sId : 2022311491
// }

// const member2 = {
//   name : 'Tony',
//   age : 20,
//   sId : 2022311492
// }

// function Member(name, age, sId) {
//   this.name = name;
//   this.age = age;
//   this.sId = sId;
// }

// const member3 = new Member('issac', 23, 2022654321)


// const book = ['Learning JavaScript', 'Learning Node.js']
// const magazines = ['Vogue', 'Science']
// // 기존
// const bookShop = {
//   books : book,
//   magazines : magazines,
// }
// console.log(bookShop)
// /*
// {
//   books : ['Learning JavaScript', 'Learning Node.js'],
//   magazines : ['Vogue', 'Science'],
// }*/

// // 축약
// const bookShop2 = {
//   books,
//   magazines,
// }
// console.log(bookShop2)
// /*
// {
//   books : ['Learning JavaScript', 'Learning Node.js'],
//   magazines : ['Vogue', 'Science'],
// }*/

// // 기존
// const obj = {
//   greeting: function () {
//     console.log('Hi!')
//   }
// }

// obj.greeting() // Hi!

// // 생략
// const obj2 = {
//   greeting() {
//     console.log('Hi!')
//   }
// }

// obj2.greeting() // Hi!

// const key = 'country'
// const value = ['한국', '미국', '일본', '중국']

// const myObj = {
//   [key]: value,
// }

// console.log(myObj) // {country: ['한국', '미국', '일본', '중국']}
// console.log(myObj.country) // ['한국', '미국, '일본', '중국']

// const userInformation = {
//   name: 'mandu',
//   userId: 'manduStudent1133',
//   email: 'mandu@mandu.com'
// }

// const { name } = userInformation
// // 아래와 같은 형태로도 가능
// const { userId, email } = userInformation

// const obj = {b: 2, c: 3, d: 4}
// const newObj = {a: 1, ...obj, e: 5}

// console.log(newObj) // {a: 1, b: 2, c: 3, d: 4, e: 5}.

const jsObject = {
  coffee: 'Americano',
  iceCream: 'Cookie and cream',
}

// // Object to Json
// const objToJson = JSON.stringify(jsObject)

// console.log(objToJson) // {coffee: 'Americano', iceCream: 'Cookie and cream'}
// console.log(typeof objToJson) // string

// //Json  to Object
// const jsonToObj = JSON.parse(objToJson)

// console.log(jsonToObj) // {coffee: 'Americano', iceCream: 'Cookie and cream'}
// console.log(typeof jsonToObj) // object

// console.log(document.querySelector('#title'))
// // <h1 id="title">DOM 조작</h1>

// console.log(document.querySelectorAll('.text'))
// // NodeList(2) [p.text, p.text]

// console.log(document.querySelector('.text'))
// // <p class="text">querySelector</p>

// console.log(document.querySelectorAll('body > ul > li'))
// // NodeList(2) [li, li]

// //h1 요소(element)를 만들고
// const title = document.createElement('h1')

// //텍스트를 추가하고
// title.innerText = 'DOM 조작'

// // 선택자로 div 태그를 가져와서
// const div = document.querySelector('div')

// // div 태그에 자식 요소로 추가
// div.appendChild(title)

// // div의 h1 요소 삭제
// div.removeChild(title)



// a.addEventListener('click', function () {
//   console.log("hw")
// })

// const obj = new Promise((resolve, reject) => {
//   resolve("성공")
// })

// obj.then(result => {
//   console.log(result)
// }).catch(error => {
//   console.log(error)
// }).finally(() => {
//   console.log("종료")
// })

// async function getData(){
//     const obj = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
//     console.log(obj.data)
// }

// getData()

// // a tag 생성 및 컨텐츠 추가
// const aTag = document.createElement('a')
// aTag.innerText = '구글'

// // a 태그의 href 속성 추가
// aTag.setAttribute('href', 'https://www.google.com')
// console.log(aTag.getAttribute('herf'))

// // div 태그의 자식 태그로 a 태그 추가
// const div = document.querySelector('div')
// div.append(Child(aTag))

// // h1 tag 선택 및 클래스 목록 조회
// const h1 = document.querySelector('h1')
// console.log(h1.classList)

// // 클래스가 존재한다면 제거하고 false를 반환,
// // 존재하지 않으면 클래스를 추가하고 true를 반환
// h1.classList.toggle('blue')
// console.log(h1.classList)

const arr = [1, 2, 3];
arr.push(4); // 가능
console.log(arr); // [1, 2, 3, 4]

const constArr = [1, 2, 3];
console.log(constArr); // [1, 2, 3, 4]
constArr = [...constArr, 4]; // 불가능 재할당이구나
console.log('123')
console.log(constArr); // [1, 2, 3, 4]