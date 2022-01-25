<h1 align= "center"> 와이어바알리/레드브릭 환율계산기 구현과제</h1>

### :house: 배포 URL
http://andrevile-wirebarley-redbrick.s3-website.ap-northeast-2.amazonaws.com/


### :exclamation: 설치방법
~~~
1. npm install
2. npm start
~~~

| 팀 구성원 |
| :-------: |
|  장종오   |
|  이다원   |
|  최원근   |
|  김원영   |
|  박진현   |

## 프로젝트 구조도

```html

├── App.js
├── components
│   ├── Currency.js
│   ├── Currency2.js
│   └── Tabs.js
├── index.css
├── index.js
├── tree.txt
└── utils
    ├── constants
    │   └── nation.js
    ├── functions
    │   ├── fetchData.js
    │   ├── getFloatNumber.js
    │   ├── numberWithCommas.js
    │   ├── numberWithoutCommas.js
    │   └── validInput.js
    └── styles
        ├── Currency.scss
        ├── Currency2.scss
        └── Tabs.scss
```        


-----------

<br/>
        
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

~~~
- 인풋박스에 숫자만 기입가능하도록 구현

- 인풋박스에 1미만의 숫자 입력시 "1원 이상의 금액을 입력해주세요." 팝업 뜨도록 구현

- A 드롭다운 메뉴를 B로 선택할 경우, 화면 예시에 제시된 탭 A는 제거되고 B로 생성되도록 구현
~~~

## Skills

<a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/d63d473e728e20a286d22bb2226a7bf45a2b9ac6c72c59c0e61e9730bfe4168c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f48544d4c352d4533344632363f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465"><img src="https://camo.githubusercontent.com/d63d473e728e20a286d22bb2226a7bf45a2b9ac6c72c59c0e61e9730bfe4168c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f48544d4c352d4533344632363f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465" alt="HTML" data-canonical-src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&amp;logo=html5&amp;logoColor=white" style="max-width:100%;"></a>
<a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/9d07c04bdd98c662d5df9d4e1cc1de8446ffeaebca330feb161f1fb8e1188204/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176615363726970742d4637444631453f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d626c61636b"><img src="https://camo.githubusercontent.com/9d07c04bdd98c662d5df9d4e1cc1de8446ffeaebca330feb161f1fb8e1188204/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176615363726970742d4637444631453f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d626c61636b" alt="JS" data-canonical-src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&amp;logo=javascript&amp;logoColor=black" style="max-width:100%;"></a>
<a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/268ac512e333b69600eb9773a8f80b7a251f4d6149642a50a551d4798183d621/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163742d3230323332413f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d363144414642"><img src="https://camo.githubusercontent.com/268ac512e333b69600eb9773a8f80b7a251f4d6149642a50a551d4798183d621/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163742d3230323332413f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d363144414642" alt="React" data-canonical-src="https://img.shields.io/badge/React-20232A?style=for-the-badge&amp;logo=react&amp;logoColor=61DAFB" style="max-width:100%;"></a>
<img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"/>

  
 <br/>
  
  ### 협업 Tool
  

<a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/60ced9d0b93df96cf8b0c2249a2f225fc851ecf9ec2db9200b7a27bd6b72c64a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6769742d2532334630353033332e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d676974266c6f676f436f6c6f723d7768697465"><img alt="Git" src="https://camo.githubusercontent.com/60ced9d0b93df96cf8b0c2249a2f225fc851ecf9ec2db9200b7a27bd6b72c64a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6769742d2532334630353033332e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d676974266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/git-%23F05033.svg?&amp;style=for-the-badge&amp;logo=git&amp;logoColor=white" style="max-width:100%;"></a>


<a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/484e674f91650af15c7b80cd40d2870109044c4e8e1418b81920e49fd24111b1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6769746875622d2532333132313031312e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465"><img alt="GitHub" src="https://camo.githubusercontent.com/484e674f91650af15c7b80cd40d2870109044c4e8e1418b81920e49fd24111b1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6769746875622d2532333132313031312e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/github-%23121011.svg?&amp;style=for-the-badge&amp;logo=github&amp;logoColor=white" style="max-width:100%;"></a>


<a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/870d2945e15dde83583f64ea1f3f4471702e45bf30fa884412da74cb7731ae42/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f536c61636b2d3441313534423f7374796c653d666f722d7468652d6261646765266c6f676f3d736c61636b266c6f676f436f6c6f723d7768697465"><img alt="Slack" src="https://camo.githubusercontent.com/870d2945e15dde83583f64ea1f3f4471702e45bf30fa884412da74cb7731ae42/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f536c61636b2d3441313534423f7374796c653d666f722d7468652d6261646765266c6f676f3d736c61636b266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&amp;logo=slack&amp;logoColor=white" style="max-width:100%;"></a>


<a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/fe854fd55e4418bc89aed0f73b77bf17a81f4ffa1d396c3d41551ba50d91b04c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4157532d2532334646393930302e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d616d617a6f6e2d617773266c6f676f436f6c6f723d7768697465"><img alt="AWS" src="https://camo.githubusercontent.com/fe854fd55e4418bc89aed0f73b77bf17a81f4ffa1d396c3d41551ba50d91b04c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4157532d2532334646393930302e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d616d617a6f6e2d617773266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/AWS-%23FF9900.svg?&amp;style=for-the-badge&amp;logo=amazon-aws&amp;logoColor=white" style="max-width:100%;"></a>


<a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/ac51696a0973a2641e3cfbdaebd2bfb86be989856c12e3902a1ab25f4de4aac6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f56697375616c53747564696f436f64652d3030373864372e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d76697375616c2d73747564696f2d636f6465266c6f676f436f6c6f723d7768697465"><img alt="Visual Studio Code" src="https://camo.githubusercontent.com/ac51696a0973a2641e3cfbdaebd2bfb86be989856c12e3902a1ab25f4de4aac6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f56697375616c53747564696f436f64652d3030373864372e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d76697375616c2d73747564696f2d636f6465266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/VisualStudioCode-0078d7.svg?&amp;style=for-the-badge&amp;logo=visual-studio-code&amp;logoColor=white" style="max-width:100%;"></a>



