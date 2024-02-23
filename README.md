# React-Globe.gl

WebGL 기반 3D 지구를 모델링할 수 있는 vasturiano님이 만든 라이브러리

## 사용방법

1. 설치

```
import Globe from 'react-globe.gl'
```

2. Repo : <https://github.com/vasturiano/react-globe.gl>

3. Container Layout

- width : number / canvas width
- height : number / canvas height
- backgroundColor : string / 배경색
- backgroundImageUrl : string / 배경이미지
- waitForGlobeReady : true/false 값 / 배경 및 지구본이 렌더링 될때까지 기다릴지 여부
- animateln : true/false 값 / 지구를 초기 위치로 확대하여 회전시킴으로써 지구 초기화를 애니메이션화할지 여부

4. 기타 Layer : Repo 참고

5. 리액트에서 사용방법은 다음과 같다.

```
<Globe width="200px" ~~~~ />
```

# React-Bootstrap

리액트 부트스트랩은 리액트에서 css 작업을 원활하게 도와주는 라이브러리이다.

## Bootstrap과 React-Bootstrap 차이점

부트스트랩은 상태값과 클래스를 사용하고 리액트 부트스트랩은 function과 hooks를 사용한다.

## 사용방법

1. 공식 사이트 : <https://react-bootstrap.netlify.app/>

2. 라이브러리 설치 코드 :

```
npm install react-bootstrap bootstrap
```

3. 몇몇 스타일은 부트스트랩 css 파일을 요구하는 경우가 있으니 미리 import 하는 것이 좋다.

```
import 'bootstrap/dist/css/bootstrap.min.css';
```

4. 사이트에서 원하는 스타일을 가져온다. 아래는 버튼 예시

```
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'; // 꼭 import를 해와야한다

function App() {
  return (
    <div className="App">
      <Button as="input" type="button" value="Input" />{' '}
    </div>
  );
}

export default App;
```

5. 부트스트랩을 이용하면 디자인적인 부담은 덜하겠지만 이미 완성되어 있는 디자인들이 다 비슷해보인다는 단점이 있으니

간단한 웹사이트를 제작할 때, 틀을 잡는 용도로만 사용하는 것이 좋을 것 같다!
