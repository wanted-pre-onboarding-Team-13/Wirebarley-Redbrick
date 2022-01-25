<h1 align= "center"> 와이어바알리/레드브릭 환율계산기 구현과제</h1>

### :house: 배포 URL
http://andrevile-wirebarley-redbrick.s3-website.ap-northeast-2.amazonaws.com/


### :exclamation: 설치방법
~~~
1. npm install
2. npm start
~~~

### :clapper: 기능별 영상 및 구현내용


![2022-01-25 23 43 52](https://user-images.githubusercontent.com/85682854/151002850-a575ed7b-6d45-4e12-b6b7-32aaa53ffd88.gif)
~~~
- 수취국가 선택시 환율 즉각 반영

- 송금액에 오직 숫자만 적을 수 있도록, 정규식을 사용하여 유효성을 검사하고, 
  0부터 10000까지 입력할 수 있도록 처리
  
- submit 버튼을 누르면 환율이 반영된 수취금액이 표시되며, 송금액에 올바른 값이
  입력되지 않았다면, 경고 문구 출력
~~~

<br/>
<br/>
<br/>

<img width='800px' src='https://user-images.githubusercontent.com/85682854/151002913-ca7ba8bf-600e-4104-95e7-81b5cdf38c64.gif' alt="두번째기능"/>
