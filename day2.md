## ๐ state ๋ณ๊ฒฝํจ์ ํน์ง
๋ณ๊ฒฝํ๊ธฐ์ ์ ๊ธฐ์กด state์ ์ ๊ท state๋ฅผ ๋น๊ตํ๋๋ฐ ์ด๊ฒ์ด ๋ง์ฝ ๊ฐ๋ค๋ฉด ๋ณ๊ฒฝํด์ฃผ์ง ์๋๋ค. 
#### ๐ ๊ธฐ์กดstate == ์ ๊ทstate ๊ฐ๋ค๋ฉด ๋ณ๊ฒฝ ์ํด์ค๋ค. ๐
[...๊ธ์ ๋ชฉ]
... ์ 3๊ฐ ๋ฌธ๋ฒ์ <strong>spread operator ๋ฌธ๋ฒ</strong>์ด๋ค.
array๋ object ์๋ฃํ ์ผ์ชฝ์ ๋ถ์ผ์์๋ค. [...๊ธ์ ๋ชฉ]
#### ๊ดํธ๋ฅผ ๋ฒ๊ธธ๋ ์ฌ์ฉํ ์์๋ค.
...[1,2,3]
1,2,3 ์ด๋ ๊ฒ ๊ดํธ๋ฅผ ๋ฒ๊ธธ์์๋ค.
#### array๋ object์๋ฃํ์ ๋ณต์ฌํ ๋ ์ฌ์ฉํ๋ค.
let ๋๋ฌผ = [์ฌ์,ํธ๋์ด,์์ญ์ด]
let ๋๋ฌผ2 = [...๋๋ฌผ];
console.log(๋๋ฌผ === ๋๋ฌผ2) // false
๊ดํธ ์์ ์ฌ์ฉํ๋ฉด ๊ดํธ๋ฅผ ๋ฒ๊ธด๋ค์ ์๋ก์ด array๋ก ์์ฑํด์ฃผ์ด ํ์ดํ๊ฐ ๋ค๋ฅธ ์์  ๋๋ฆฝ์ ์ธ array ๋ณต์ฌ๋ณธ์ ์์ฑํด์ค ์ ์๋ค.

#### [array/object ํน์ง]


let copy = ๊ธ์ ๋ชฉ; 
copy[0] = '์ฌ์์์ธ  ์ถ์ฒ'; <= ์ด๋ ๊ฒ ๋ณ๊ฒฝ์ ํด์ค๋ค ํ์ฌ๋ copy๋ ๊ธฐ์กด state์ ๋ฌ๋ผ์ง์ง ์์๋ค๊ณ  ์๊ฐ์ํ๋ค.
์๋ฐ์คํฌ๋ฆฝํธ๋ arr ์์ ๋ฐ์ดํฐ๋ฅผ RAM ์์ ์ค๋ธ์ ํธ๋ฅผ ์ ์ฅํด๋๋ค
console.log(copy == ๊ธ์ ๋ชฉ); ๊ฒฐ๊ณผ๊ฐ = true

sort ๊ธ์ ๋ ฌํด์ฃผ๊ธฐ


## ๐ ๋ง์ div๋ฅผ ์ค์ด๋ ๋ฐฉ๋ฒ
```
 <div className="modal">
      <h4>์ ๋ชฉ</h4>
      <p>๋ ์ง</p>
      <p>์์ธ๋ด์ฉ</p>
  </div>
```
function์ ํ์ฉํ์ฌ ํจ์๋ก ์ฝ๋๋ฅผ ์์ฑํ ์์๋ค. 

#### ๊ธฐ๋ณธ๋ชจ๋ธ
function ์ํ๋ํจ์๋ช(){
  return(
    ๋ง๋ค๊ณ ์ถ์ ์ฝ๋ ์์
    return ( ) ์์ ๋๊ฐ์ html ํ๊ทธ ๋๋ํ ์ ์ผ๋ฉด  ์๋๋ค.
    return ( ) ๋ด๋ถ๋ ํ๋์ ํ๊ทธ๋ก ์์ํด์ ํ๋์ ํ๊ทธ๋ก ๋๋์ผํฉ๋๋ค. 
    <!-- <div>
    </div> -->
    or
    <>
    </>  ์๋ฏธ์๋ div๋์  <></>๋ ์ฌ์ฉ๊ฐ๋ฅ
  )
}
```
function Modal(){
  return(
<div className="modal">
      <h4>์ ๋ชฉ</h4>
      <p>๋ ์ง</p>
      <p>์์ธ๋ด์ฉ</p>
  </div>
  )
}
```
#### ๋ณํ ๋ชจ๋ธ
const Modal = () =>{
  return(
    <>
    </>
  )
}

const๋ฅผ ์ฌ์ฉํ๋ฉด ์ค๋ฅ๊ฐ ์๊ฒผ์๋ ์์์ฐจ๋ฆฌ๊ธฐ๊ฐ ์ฝ๋ค.

์ํ๋ ๋๊ฐ์ง๋ก ํจ์ ์ฌ์ฉ์ ํ ์์๋ค.
<Modal></Modal>
</Modal>

### ๐ ์ด๋ค๊ฑธ ์ปดํฌํดํธ๋ก ๋ง๋ค๋ฉด ์ข์๊ฐ? ๐
1. ๋ฐ๋ณต์ ์ธ html ์ถ์ฝํ ๋
2. ํฐ ํ์ด์ง๋ค
3. ์์ฃผ๋ณ๊ฒฝ๋๋ ๊ฒ๋ค
4. ๋ค๋ฅธ ํ์๊ณผ ํ์ํ ๋ ์นํ์ด์ง๋ฅผ ์ปดํผ๋ํธ ๋จ์๋ก ๋๋  ์์์ ๋ถ๋ฐฐํ๊ธฐ๋ํ๋ค.


### ๐ ์ปดํฌ๋ํธ์ ๋จ์  ๐
1. state ๊ฐ์ ธ๋ค์ธ ๋ ๋ฌธ์ ๋ฅผ ์๊ธด๋ค.


## ๐ ๋์ ์ธ UI๋ง๋๋ ๋ฐฉ๋ฒ
1. html css๋ก ๋ฏธ๋ฆฌ ๋์์ธ ์์ฑ
2. UI ํ์ฌ ์ํ๋ฅผ state๋ก ์ ์ฅ
3. state์ ๋ฐ๋ผ UI๊ฐ ์ด๋ป๊ฒ ๋ณด์ผ์ง ์์ฑ


#### 2. UI ํ์ฌ ์ํ๋ฅผ state๋ก ์ ์ฅ
let [modal, setModal] = useState(0);
๐ ์์ด๋ก ์์ฑ์ state ๋ณ๊ฒฝํจ์๋ set์ ์์ ๋ถ์ฌ์ฃผ๋๊ฒ ๊ด์ต์ด๋ค ๐


## ๋์ ์ธ UI๋ฅผ JSX์์ ๋ง๋๋๋ฒ

#### ์กฐ๊ฑด๋ฌธ์ธ ๊ฒฝ์ฐ ๋ณดํต if/else ๋ฌธ๋ฒ์ ์ฌ์ฉํ์ง๋ง JSX์์๋ if else ๋ฌธ๋ฒ์ ๋ฐ๋ก ์ฌ์ฉํ ์์๋ค. ๊ทธ๋ ๊ธฐ ๋๋ฌธ์ ์ผํฅ์ฐ์ฐ์๋ฅผ ์ฌ์ฉํด์ผํ๋ค.
{1==1 ? ์ฐธ์ผ๋ : ๊ฑฐ์ง์ผ๋} <=๊ธฐ๋ณธ ์์ 
{modal == 1 ? </Modal> : null}
0์ผ๋๋ ๋ซํ์๊ณ  1์ผ๋๋ ๋ชจ๋ฌ์ฐฝ์ด ๋ณด์ด๊ฒ๋ ํด์ค๋ค.

```
<button onClick={ ()=>{ setModal(1) } }> {๊ธ์ ๋ชฉ[0]} </button>
  { 
      modal == true ? <Modal></Modal> : null
  } 
```
  ๋ฒํผ์ ํด๋ฆญํ๋ฉด ๋ชจ๋ฌ์ฐฝ1๋ก๋ณ๊ฒฝํด์ฃผ์ฌ ๋ชจ๋ฌ์ฐฝ์ด ํ์๋ ์์๋๋ก ํด์ฃผ์๋ค.

ํด๋ฆญ์ ์๋์ผ๋ก ์ผ์ก๋ค ๊บผ์ก๋ค ํ๋๋ฒ
<!-- <button onClick={ ()=>{ setModal(!modal) } }> {๊ธ์ ๋ชฉ[0]} </button> -->
!modal์ ์ฌ์ฉํ์ฌ
๋๋ํ ์ฐ์ธก์๋ฃ๋ฅผ ๋ฐ๋๋ก ๋ฐ๊พธ์ด์ค๋ค.
๊ทธ๋ฆฌํ์ฌ 0/1 0/1์ ํด๋ฆญํ ๋๋ง๋ค ํ์ฑํ์์ผ์ค๋ค.


## ๐ map์ ํ์ฉํ์ฌ ๋ฐ๋ณต๋ฌธ์ ์ถ์ฝํ๋๋ฒ ๐

๋ชจ๋  array ๋ค์๋ .map()์ ๋ถ์ผ์์๋ค. ๋งต ํจ์๋ฅผ ์ฌ์ฉํ ๋๋ ์ฝ๋ฐฑํจ์๋ฅผ ์ฌ์ฉํด์ผํ๋ค. ์๊ดํธ() ์์ ๋ค์ด๊ฐ๋ ๋ชจ๋ ๊ฒ์ ์ฝ๋ฐฑํจ์๋ผ ๋งํ๋ค.
[1,2,3].map(function(){

})

#### mpaํจ์์ ๊ธฐ๋ฅ
1. array ์๋ฃ ๊ฐฏ์๋งํผ ํจ์์์ ์ฝ๋๋ฅผ ์คํด์ค๋ค.

[1,2,3].map(function(){
  console.log(1) // ๊ฒฐ๊ณผ๊ฐ 3๋ฒ ์ถ๋ ฅ๋ฌ๋ค๊ณ  ๋์จ๋ค. 1,2,3 3๊ฐ์ด๊ธฐ ๋๋ฌธ์ด๋ค.
})

2. ํจ์์ ํ๋ผ๋ฏธํฐ๋(a) array์์ ์๋ ์๋ฃ๋ค 

[1,2,3].map(function(a){
  console.log(a) // ๊ฒฐ๊ณผ๊ฐ 1 2 3
})

3. return์ ์ฌ์ฉํ๋ฉฐ array์ ์๋ฃ๋ฅผ ๋ด์์ค๋ค. 

[1,2,3].map(function(a){
  return '123123'
})
(3)ย ['123123', '123123', '123123']

### ๐ ์ค๊ดํธ{} ์์์๋ for ๋ฐ๋ณต๋ฌธ์ ์ฌ์ฉํ ์์๊ธฐ๋๋ฌธ์ mapํจ์๋ฅผ ์ฌ์ฉํ๋ค.

```
 function App (){
  return (
    <div>
      { 
        [1,2,3].map(function(){
          return ( <div>์๋</div> )
        }) 
      }
    </div>
  )
}
```
์ด๋ ๊ฒ ์ฌ์ฉํ๋ฉด array 1,2,3์ div ์๋์ด ์ด 3๊ฐ๊ฐ ์์ฑ๋๊ฒ ๋๋ค.

#### ๐ ๊ธ์ ์๋์ ์ผ๋ก ์์ฑํ์ฌ ๋ณด์ฌ์ฃผ๊ณ ์ถ์๋ ๐
let[๊ธ์ ๋ชฉ,๊ธ์ ๋ชฉ๋ณ๊ฒฝ] = useState(['๋จ์ ์์ธ  ์ถ์ฒ', '์ฌ๋ฆ ์ ์ ์ถ์ฒ', '์ฝฉ๊ตญ์ ์ถ์ฒ๋ง์ง']);

  ```
  { 
    ๊ธ์ ๋ชฉ.map(function(a){  // <= ๊ธ์ ๋ชฉ ๋ํ array์ด๊ธฐ ๋๋ฌธ์ ๊ธ์ ๋ชฉ.map()ํจ์๋ฅผ์ฌ์ฉํด์ค๋ค. 
    ํจ์๊ธฐ๋ฅ 2,3๋ฅผ ์ฐธ๊ณ ํ์ฌ function๊ฐ์ a๋ฅผ ๋ฃ์ด์ฃผ์ด ์๋์ ์ผ๋ก ์ธ๋ฑ์ค๋ฒํธ๋ฅผ ์์ฐจ์ ์ผ๋ก ๋ฃ์ด์ฃผ์ค ๊ธ์ ๋ชฉ์ ๋ณ๊ฒฝํด์ฃผ๊ฒ ํ ์์๋ค.
      return (
      <div className="list">
        <h4>{ ๊ธ์ ๋ชฉ[a] }</h4>
        <p>2์ 18์ผ ๋ฐํ</p>
      </div> )
    }) 
  } 
  ```

#### ๐ ํ๋ผ๋ฏธํฐ ์์๋ 2๊ฐ๊น์ง ์๋ช์ด ๊ฐ๋ฅํ์ฌ function(a,i) ๐
  ๊ธ์ ๋ชฉ[i]๋ฅผ ์ฌ์ฉํ์ฌ๋ ๊ฒฐ๊ณผ๊ฐ์ ๊ฐ๊ฒ๋์จ๋ค
  ์ฒซ๋ฒ์งธ ํ๋ผ๋ฏธํฐ a๋ array์์ ์๋ ์๋ฃ ์์๋๋ก ๋ณํ๊ณ 
  ๋๋ฒ์งธ ํ๋ฆฌ๋ฏธํฐ i๋ 0๋ถํฐ 1์ฉ ์ฆ๊ฐํ๋ ์ ์์ด๋ค. ๊ทธ๋ ๊ธฐ๋๋ฌธ์ ๊ฒฐ๊ณผ๊ฐ์ ๊ฐ๋ค.

 
#### ๐ ์ข์์ ์ซ์ด์ ๊ธฐ๋ฅ ๊ฐ์ ์๋ํ๊ฒ ํ๋๋ฒ ๐
.mpa ๋ฐ๋ณต๋ฌธ์ผ๋ก ์์ฑํ html์๋ key={i} ์ ์์ฑํด์ฃผ์ด์ผํ๋ค.
let[๊ธ์ ๋ชฉ,๊ธ์ ๋ชฉ๋ณ๊ฒฝ] = useState(['๋จ์ ์์ธ  ์ถ์ฒ', '์ฌ๋ฆ ์ ์ ์ถ์ฒ', '์ฝฉ๊ตญ์ ์ถ์ฒ๋ง์ง']);
์
  <!-- ๊ธ์ ๋ชฉ.map(function(a,i){
    return (
      <h4>{a}</h4> -->
  ํ๋ผ๋ฏธํฐ a๋ฅผ ํ์ฉํ์ฌ ์๋์ ์ผ๋ก ๊ธ์ด ์์ฑ๋ ๋ array์ ๋ง๊ฒ ๊ธ์ ๋ชฉ์ด ๋ณ๊ฒฝ๋์๋ค.

๐ ๊ทธ๋ ๊ธฐ ๋๋ฌธ์ 
let [์ข์์,์ข์์๋ณ๊ฒฝ] = useState([0, 0, 0]);
let [์ซ์ด์,์ซ์ด์๋ณ๊ฒฝ] = useState([0, 0, 0]);
์ข์์ ์ซ์ด์ ๋ํ array๋ฅผ ์๋ฃํ์ผ๋ก ๋ง๋ค์ด์ฃผ์ด ๊ฐ์ 0์ ๋ถ์ฌํด์ค๋ค.

#### ๊ธฐ์กด ์ฝ๋ 

```
<span onClick={ ()=>
{์ข์์๋ณ๊ฒฝ(์ข์์+1)} }>
๐</span>{์ข์์}
<span onClick={()=>
{์ซ์ด์๋ณ๊ฒฝ(์ซ์ด์+1)}}>
๐ข</span>{์ซ์ด์} 
```
#### ๋ณ๊ฒฝ ์ฝ๋

```
<span onClick={ ()=>{
  let copy = [...์ข์์]; <= 1๋ฒ โจ
  copy[i] = copy[i] + 1; <= 2๋ฒ โจ
  ์ข์์๋ณ๊ฒฝ(copy) <= 3๋ฒ โจ
} }>๐</span>{์ข์์[i]}<span onClick={()=>{
  let copy = [...์ซ์ด์];
  copy[i] = copy[i] + 1;
  ์ซ์ด์๋ณ๊ฒฝ(copy)}}>๐ข</span>{์ซ์ด์[i]} 
```
  1. array์๋ฃํ์ด๊ธฐ ๋๋ฌธ์ ์๋ณธ ๋ฐ์ดํฐ๊ฐ ๋ณ๊ฒฝ๋์ง ์๊ฒ ํ๊ธฐ์ํด์ ๋จผ์  copy๋ฅผ ํด์ค๋ค.
  2. copy๊ฐ์ ํ๋ผ๋ฏธํฐ i๋ฅผ ์ด์ฉํ์ฌ ์ธ๋ฑ์ค ๊ฐ ๊ฒ์๋ฌผ์ ์ธ๋ฑ์ค ๋ฒํธ์ ๋ง๋ ๊ฐ์ ์ฐพ์์ค๋ค copy[i]๊ฐ์  +1 ํด์ค๋ค. ์ข์์,์ซ์ด์๋ฅผ ๋๋ ์๋ ๊ฐ์ด ์นด์ดํฐ ๋ ์์๊ฒ ํด์ค๋ค.
  3. ๋ณ๊ฒฝ๋ state๊ฐ์ ์ ์ฅํด์ฃผ๊ธฐ ์ํด ์ข์์๋ณ๊ฒฝ(copy) ์ซ์ด์๋ณ๊ฒฝ(copy) ๊ฐ์ ํ์ฉํด์ค๋ค.



## ๐ ๋ถ๋ชจ์ state ๊ฐ์ ธ๋ค ์ฐ๋ props
์์๋ค์ ๋ถ๋ชจ์ ์ปดํฌ๋ํธ๋ฅผ ๊ทธ๋ฅ ์ฐ๋ฉด ์ค๋ฅ๊ฐ ๋๋ค.
function ํจ์๋ ๋ฐ๊นฅ์์๋ ์๋์ ํ์ง ์๊ธฐ๋๋ฌธ์ 
props๋ฅผ ํ์ฉํ์ฌ ์ ์ก์ ํด์ผ ํ๋ค.

### ๐ ๋ถ๋ชจ -> ์์ state ์ ์กํ๋ ๋ฒ๐
1. ์์ ์ปดํฌ๋ํธ ์๋ช = {state์ด๋ฆ}

{
  modal == true ? <Modal ์๋ช={state์ด๋ฆ}/> : null
}

{
  modal == true ? <Modal ๊ธ์ ๋ชฉ = {๊ธ์ ๋ชฉ}/> : null
}

2. props ํ๋ผ๋ฏธํฐ(props) ๋ฑ๋กํ props.์๋ช ์ฌ์ฉ

<!-- function Modal(props){
  return(
    <div className="modal">
      <h4>{props.๊ธ์ ๋ชฉ[0]}</h4>
      <p>๋ ์ง</p>
      <p>์์ธ๋ด์ฉ</p>
  </div>
  )
} -->

### ์ปดํฌ๋ํธ๊ฐ์ ๊ณต์ ๋ ๋ถ๊ฐ๋ฅํ๋ค. 
#### ๋ถ๋ชจ => ์์์ ๊ฐ๋ฅโญ
#### ์์ => ์์์ ๋ถ๊ฐ๋ฅ โ


### ๋ชจ๋ฌ์ฐฝ ์คํ์ผ๋งํ๊ธฐ
```
function Modal(props){
  return(
    <div className="modal" style={{background : 'skyblue'}}> // ์ด๋ ๊ฒ ์คํ์ผ์ ์ค์์์ง๋ง props. ๋ฅผํ์ฉํ์ฌ ๋ ํธํ๊ฒ ์์ ๋ณ๊ฒฝ๊ฐ๋ฅ
      <h4>{props.๊ธ์ ๋ชฉ[0]}</h4>
      <p>๋ ์ง</p>
      <p>์์ธ๋ด์ฉ</p>
  </div>
  )
}
```
{
  modal == 1 ? <Modal color ={'red'} ๊ธ์ ๋ชฉ = {๊ธ์ ๋ชฉ}/> : null
}

{'์ํ๋์ ๋ฃ๊ธฐ'}
className="modal" style={{background : props.color}}
