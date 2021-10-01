import logo from './logo.svg';
import './App.css';


// 関数コンポーネント内で state を扱えるようにするため読み込む
import React, { useState } from 'react';


// function App() {
//   return (
//     <div className="App">準備完了</div>
//   );
// }

// ログイン状態で表示される sign out ボタン
// LoginControl コンポーネント（親）から prop で ログイン/ログアウト 状態を受け取る
const LogoutButton = (props) => {
  return <button onClick={props.toggleIsLoggedIn}>sign out</button>;
}

// ログアウト状態で表示される sign in ボタン
// LoginControl コンポーネント（親）から prop で ログイン/ログアウト 状態を受け取る
const LoginButton = (props) => {
  return <button onClick={props.toggleIsLoggedIn}>sign in</button>;
}

const LoginControl = () => {
  
  // 現在のログイン/ログアウト isloggedIn の状態を更新する関数
  // 初期値：false
  const [isLoggedIn,setIsLoggedInState] = useState(false);

  // クリックで ログイン/ログアウト 状態がトグルする関数
  // 即時関数で実装
  const toggleIsLoggedIn = () => {
    setIsLoggedInState(!isLoggedIn);
  }

  if(isLoggedIn){
    //  ログイン状態で、ログアウトボタンを表示させる
    return <LogoutButton toggleIsLoggedIn={toggleIsLoggedIn} />
  }
  // ログアウト状態で、ログインボタンを表示させる
  return <LoginButton toggleIsLoggedIn={toggleIsLoggedIn} />
};

const Hello = () => {
  const isReact = true;
  // return(
  //   <p>
  //     {(() => {
  //         if(isReact){
  //           return 'Hello,React';
  //         }else{
  //         return 'Hello...';
  //         }
  //       })()}
  //   </p>
  // );
  return <p>{ isReact ? "Hello,React" : "Hell."}</p>;
};


// 繰り返し処理
const numbers = [2,4,6,8];
const ListItems = () => {

  // map() を利用して、配列から要素を1つずつ取り出して<li>タグで囲む
  // <li>タグに文字列の key 属性を含める
  const Items = numbers.map((item) =>
   <li key={item.toString()}>{item}</li>);
  
  // <li> タグ囲った実行結果、itemを <ul> タグで囲みJSXへ埋め込む
  return <ul>{Items}</ul>
}


// イベントハンドリング
const HandleChange = (e) =>{
  console.log(e.target.value);
};

const InputText = () => {
  return <input type="text" defaultValue="" onChange={HandleChange} />;
}

// Appコンポーネントの戻り値をセット
export default function App(){
  return <InputText />;
}

// export default App;
