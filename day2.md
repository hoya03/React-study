## 🎈 state 변경함수 특징
변경하기전에 기존 state와 신규 state를 비교하는데 이것이 만약 같다면 변경해주지 않는다. 
#### 🎇 기존state == 신규state 같다면 변경 안해준다. 🎇
[...글제목]
... 점3개 문법은 <strong>spread operator 문법</strong>이다.
array나 object 자료형 왼쪽에 붙일수있다. [...글제목]
#### 괄호를 벗길때 사용할수있다.
...[1,2,3]
1,2,3 이렇게 괄호를 벗길수있다.
#### array나 object자료형을 복사할때 사용한다.
let 동물 = [사자,호랑이,원숭이]
let 동물2 = [...동물];
console.log(동물 === 동물2) // false
괄호 안에 사용하면 괄호를 벗긴다음 새로운 array로 생성해주어 화살표가 다른 완전 독립적인 array 복사본을 생성해줄 수 있다.

#### [array/object 특징]


let copy = 글제목; 
copy[0] = '여자셔츠 추천'; <= 이렇게 변경을 해준다 하여도 copy는 기존 state와 달라지지 않았다고 생각을한다.
자바스크립트는 arr 안에 데이터를 RAM 안에 오브젝트를 저장해둔다
console.log(copy == 글제목); 결과값 = true

sort 글정렬해주기


## 🎈 많은 div를 줄이는 방법
```
 <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
  </div>
```
function을 활용하여 함수로 코드를 작성할수있다. 

#### 기본모델
function 원하는함수명(){
  return(
    만들고싶은 코드 양식
    return ( ) 안에 두개의 html 태그 나란히 적으면  안된다.
    return ( ) 내부는 하나의 태그로 시작해서 하나의 태그로 끝나야합니다. 
    <!-- <div>
    </div> -->
    or
    <>
    </>  의미없는 div대신 <></>도 사용가능
  )
}
```
function Modal(){
  return(
<div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
  </div>
  )
}
```
#### 변형 모델
const Modal = () =>{
  return(
    <>
    </>
  )
}

const를 사용하면 오류가 생겼을때 알아차리기가 쉽다.

원하는 두가지로 함수 사용을 할수있다.
<Modal></Modal>
</Modal>

### 🎇 어떤걸 컴포턴트로 만들면 좋은가? 🎇
1. 반복적인 html 축약할때
2. 큰 페이지들
3. 자주변경되는 것들
4. 다른 팀원과 혐업할때 웹페이지를 컴퍼넌트 단위로 나눠 작업을 분배하기도한다.


### 🎇 컴포넌트의 단점 🎇
1. state 가져다쓸 때 문제를 생긴다.


## 🎈 동적인 UI만드는 방법
1. html css로 미리 디자인 완성
2. UI 현재 상태를 state로 저장
3. state에 따라 UI가 어떻게 보일지 작성


#### 2. UI 현재 상태를 state로 저장
let [modal, setModal] = useState(0);
🎇 영어로 작성시 state 변경함수는 set을 앞에 붙여주는게 관습이다 🎇


## 동적인 UI를 JSX에서 만드는법

#### 조건문인 경우 보통 if/else 문법을 사용하지만 JSX안에는 if else 문법을 바로 사용할수없다. 그렇기 때문에 삼향연산자를 사용해야한다.
{1==1 ? 참일때 : 거짓일때} <=기본 예제
{modal == 1 ? </Modal> : null}
0일때는 닫혀있고 1일때는 모달창이 보이게끔 해준다.

```
<button onClick={ ()=>{ setModal(1) } }> {글제목[0]} </button>
  { 
      modal == true ? <Modal></Modal> : null
  } 
```
  버튼을 클릭하면 모달창1로변경해주여 모달창이 표시될수있도록 해주었다.

클릭시 자동으로 켜졌다 꺼졌다 하는법
<!-- <button onClick={ ()=>{ setModal(!modal) } }> {글제목[0]} </button> -->
!modal을 사용하여
느낌표 우측자료를 반대로 바꾸어준다.
그리하여 0/1 0/1을 클릭할때마다 활성화시켜준다.


## 🎈 map을 활용하여 반복문을 축약하는법 🎈

모든 array 뒤에는 .map()을 붙일수있다. 맵 함수를 사용할때는 콜백함수를 사용해야한다. 소괄호() 안에 들어가는 모든것을 콜백함수라 말한다.
[1,2,3].map(function(){

})

#### mpa함수의 기능
1. array 자료 갯수만큼 함수안의 코드를 실해준다.

[1,2,3].map(function(){
  console.log(1) // 결과값 3번 출력됬다고 나온다. 1,2,3 3개이기 때문이다.
})

2. 함수의 파라미터는(a) array안에 있던 자료다 

[1,2,3].map(function(a){
  console.log(a) // 결과값 1 2 3
})

3. return을 사용하며 array에 자료를 담아준다. 

[1,2,3].map(function(a){
  return '123123'
})
(3) ['123123', '123123', '123123']

### 🎈 중괄호{} 안에서는 for 반복문을 사용할수없기때문에 map함수를 사용한다.

```
 function App (){
  return (
    <div>
      { 
        [1,2,3].map(function(){
          return ( <div>안녕</div> )
        }) 
      }
    </div>
  )
}
```
이렇게 사용하면 array 1,2,3에 div 안녕이 총 3개가 생성되게 된다.

#### 🎄 글을 자동적으로 생성하여 보여주고싶을때 🎄
let[글제목,글제목변경] = useState(['남자 셔츠 추천', '여름 신상 추천', '콩국수 추천맛집']);

  ```
  { 
    글제목.map(function(a){  // <= 글제목 또한 array이기 때문에 글제목.map()함수를사용해준다. 
    함수기능 2,3를 참고하여 function값에 a를 넣어주어 자동적으로 인덱스번호를 순차적으로 넣어주오 글제목을 변경해주게 할수있다.
      return (
      <div className="list">
        <h4>{ 글제목[a] }</h4>
        <p>2월 18일 발행</p>
      </div> )
    }) 
  } 
  ```

#### 🎄 파라미터 안에는 2개까지 작명이 가능하여 function(a,i) 🎄
  글제목[i]를 사용하여도 결과값은 같게나온다
  첫번째 파라미터 a는 array안에 있던 자료 순서대로 변하고
  두번째 파리미터 i는 0부터 1씩 증가하는 정수이다. 그렇기때문에 결과값은 같다.

 
#### 🎄 좋아요 싫어요 기능 각자 작동하게 하는법 🎄
.mpa 반복문으로 생성한 html에는 key={i} 을 생성해주어야한다.
let[글제목,글제목변경] = useState(['남자 셔츠 추천', '여름 신상 추천', '콩국수 추천맛집']);
을
  <!-- 글제목.map(function(a,i){
    return (
      <h4>{a}</h4> -->
  파라미터 a를 활용하여 자동적으로 글이 생성될때 array에 맞게 글제목이 변경되었다.

👌 그렇기 때문에 
let [좋아요,좋아요변경] = useState([0, 0, 0]);
let [싫어요,싫어요변경] = useState([0, 0, 0]);
좋아요 싫어요 또한 array를 자료형으로 만들어주어 각자 0을 부여해준다.

#### 기존 코드 

```
<span onClick={ ()=>
{좋아요변경(좋아요+1)} }>
💛</span>{좋아요}
<span onClick={()=>
{싫어요변경(싫어요+1)}}>
💢</span>{싫어요} 
```
#### 변경 코드

```
<span onClick={ ()=>{
  let copy = [...좋아요]; <= 1번 ✨
  copy[i] = copy[i] + 1; <= 2번 ✨
  좋아요변경(copy) <= 3번 ✨
} }>💛</span>{좋아요[i]}<span onClick={()=>{
  let copy = [...싫어요];
  copy[i] = copy[i] + 1;
  싫어요변경(copy)}}>💢</span>{싫어요[i]} 
```
  1. array자료형이기 때문에 원본 데이터가 변경되지 않게 하기위해서 먼저 copy를 해준다.
  2. copy값에 파라미터 i를 이용하여 인덱스 각 게시물의 인덱스 번호에 맞는 값을 찾아준뒤 copy[i]값에  +1 해준다. 좋아요,싫어요를 눌렀을때 값이 카운터 될수있게 해준다.
  3. 변경된 state값을 저장해주기 위해 좋아요변경(copy) 싫어요변경(copy) 값을 활용해준다.



## 🎈 부모의 state 가져다 쓰는 props
자식들은 부모의 컴포넌트를 그냥 쓰면 오류가 난다.
function 함수는 바깥에서는 작동을 하지 않기때문에 
props를 활용하여 전송을 해야 한다.

### 🎄 부모 -> 자식 state 전송하는 법🎄
1. 자식 컴포넌트 작명 = {state이름}

{
  modal == true ? <Modal 작명={state이름}/> : null
}

{
  modal == true ? <Modal 글제목 = {글제목}/> : null
}

2. props 파라미터(props) 등록후 props.작명 사용

<!-- function Modal(props){
  return(
    <div className="modal">
      <h4>{props.글제목[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
  </div>
  )
} -->

### 컴포넌트간에 공유는 불가능하다. 
#### 부모 => 자식은 가능⭕
#### 자식 => 자식은 불가능 ❌


### 모달창 스탕일링하기
```
function Modal(props){
  return(
    <div className="modal" style={{background : 'skyblue'}}> // 이렇게 스타일을 줄수있지만 props. 를활용하여 더 편하게 색을 변경가능
      <h4>{props.글제목[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
  </div>
  )
}
```
{
  modal == 1 ? <Modal color ={'red'} 글제목 = {글제목}/> : null
}

{'원하는색 넣기'}
className="modal" style={{background : props.color}}
