import PageTitle from "@/app/components/ui/PageTitle";
import Section, { SubTitle, SectionDesc } from "@/app/components/ui/Section";
import Table from "@/app/components/ui/Table";
import CodeBlock, { CodeInline } from "@/app/components/ui/CodeBlock";
import { UnorderedList, DescriptionList, GuidelineList, GuidelineItem } from "@/app/components/ui/List";

export default function AccessibilityOverviewPage() {
  return (
    <>
      <PageTitle badge="Accessibility">웹접근성 개요</PageTitle>

      <Section title="웹접근성 정의" id="w3c-definition">
        <SubTitle>웹 접근성에 대한 W3C의 정의</SubTitle>
        <blockquote className="blockquote">
          <p className="blockquote-en">Web accessibility means that people with disabilities can use the Web.</p>
          <p className="blockquote-ko">웹 접근성은 장애를 지닌 사람이 웹을 이용할 수 있는 것을 의미합니다.</p>
        </blockquote>
        <blockquote className="blockquote">
          <p className="blockquote-en">More specifically, Web accessibility means that people with disabilities can perceive, understand, navigate, and interact with the Web, and that they can contribute to the Web. Web accessibility also benefits others, including older people with changing abilities due to aging.</p>
          <p className="blockquote-ko">특히, 웹 접근성은 장애를 지닌 사람이 인지하고, 이해하고, 탐색하고, 웹과 상호작용할 수 있는 것을 의미합니다. 또한 웹 접근성은 노화로 인해 능력이 변화하는 노인을 포함하여 다른 이들에게도 이점이 됩니다.</p>
        </blockquote>
        <p className="cite-source">
          출처:{" "}
          <a className="external-link" href="https://www.w3.org/WAI/fundamentals/accessibility-intro/" target="_blank" rel="noopener noreferrer">
            WAI &gt; Introduction to Web Accessibility
          </a>
        </p>

        <SubTitle>정보 접근성: 모든 사용자를 위한 더 편리한 서비스</SubTitle>
        <SectionDesc>
          정보 접근성은 모든 사용자가 특정 환경이나 신체적 장애에 상관없이 웹 사이트나 애플리케이션에서 제공하는 모든 정보에 동등하게 접근하고 이용할 수 있도록 보장하는 것입니다. 장애인뿐만 아니라 고령자, 비장애인도 접근성의 대상이 되며 4가지 핵심원리는 다음과 같습니다.
        </SectionDesc>
        <DescriptionList>
          <div>
            <dt>인식의 용이성</dt>
            <dd>모든 콘텐츠는 사용자가 인식할 수 있어야 합니다.</dd>
          </div>
          <div>
            <dt>운용의 용이성</dt>
            <dd>사용자 인터페이스 구성 요소는 조작 가능하고 내비게이션할 수 있어야 합니다.</dd>
          </div>
          <div>
            <dt>이해의 용이성</dt>
            <dd>콘텐츠는 장애유무에 관계없이 이해할 수 있게 구성되어야 합니다.</dd>
          </div>
          <div>
            <dt>견고성</dt>
            <dd>웹 콘텐츠는 미래의 기술로도 접근할 수 있도록 견고하게 만들어야 합니다.</dd>
          </div>
        </DescriptionList>
        <p className="cite-source">
          출처:{" "}
          <a className="external-link" href="https://accessibility.naver.com/accessibility" target="_blank" rel="noopener noreferrer">
            네이버 접근성 페이지 : Accessibility Guide
          </a>
        </p>
      </Section>

      <Section title="웹접근성 이용자 유형" id="user-types">
        <DescriptionList>
          <div>
            <dt>전맹 사용자</dt>
            <dd>시각을 통해 화면 정보를 인식하기 어렵기 때문에 화면의 텍스트를 음성으로 읽어주는 화면 낭독 프로그램(스크린 리더)를 이용합니다.</dd>
          </div>
          <div>
            <dt>색각이상 사용자</dt>
            <dd>특정한 색 또는 색상 구별 자체가 어려워 색으로만 구분자를 표시할 경우 인지하기 어렵습니다.</dd>
          </div>
          <div>
            <dt>고령자와 약시자</dt>
            <dd>통상적인 크기의 폰트는 인식하기 어려워 폰트 확대 기능 또는 프로그램이 필요합니다.</dd>
          </div>
          <div>
            <dt>청각장애 사용자</dt>
            <dd>동영상의 음성, 오디오, 알람과 같은 청각 콘텐츠는 인식할 수 없습니다.</dd>
          </div>
          <div>
            <dt>뇌병변 장애 및 지체장애 사용자</dt>
            <dd>마우스와 같은 포인팅 장치를 이용하지 않는 사용자는 키보드만으로도 모든 정보의 접근 및 조작이 가능해야 합니다.</dd>
          </div>
          <div>
            <dt>일시적 장애를 겪고 있는 사용자</dt>
            <dd>사고로 인해 일시적으로 신체의 일부를 활용하지 못하거나 갑자기 극심한 불안감을 느껴 발작을 일으키는 사용자도 고려해야 합니다.</dd>
          </div>
        </DescriptionList>
        <p className="cite-source">
          출처:{" "}
          <a className="external-link" href="https://accessibility.naver.com/accessibility" target="_blank" rel="noopener noreferrer">
            네이버 접근성 페이지 : Accessibility Guide
          </a>
        </p>
      </Section>

      <Section title="웹접근성이란?" id="definition">
        <SectionDesc>
          W3C에서는 웹접근성을 &ldquo;장애를 가진 사람들도 웹을 이용할 수 있도록
          보장하는 것&rdquo;으로 정의합니다. 웹접근성은 장애인뿐만 아니라 고령자,
          비장애인을 포함한 모든 사용자를 위한 것입니다.
        </SectionDesc>

        <SubTitle>웹접근성 4대 원칙 (POUR)</SubTitle>
        <Table variant="horizontal">
          <thead>
            <tr>
              <th>원칙</th>
              <th>설명</th>
              <th>핵심 내용</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>인식의 용이성 (Perceivable)</td>
              <td>모든 콘텐츠는 사용자가 인식할 수 있어야 합니다</td>
              <td>대체 텍스트, 자막, 명도 대비 등</td>
            </tr>
            <tr>
              <td>운용의 용이성 (Operable)</td>
              <td>사용자 인터페이스는 조작 가능해야 합니다</td>
              <td>키보드 접근, 충분한 시간, 발작 예방 등</td>
            </tr>
            <tr>
              <td>이해의 용이성 (Understandable)</td>
              <td>콘텐츠는 이해할 수 있어야 합니다</td>
              <td>가독성, 예측 가능성, 입력 도움 등</td>
            </tr>
            <tr>
              <td>견고성 (Robust)</td>
              <td>다양한 기술로 해석할 수 있어야 합니다</td>
              <td>호환성, 마크업 유효성 등</td>
            </tr>
          </tbody>
        </Table>
      </Section>

      <Section title="대상 사용자" id="users">
        <Table>
          <thead>
            <tr>
              <th>사용자 유형</th>
              <th>특성</th>
              <th>주요 고려사항</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>시각 장애인</td>
              <td>스크린 리더 사용</td>
              <td>대체 텍스트, 논리적 구조, 키보드 접근</td>
            </tr>
            <tr>
              <td>색각 이상자</td>
              <td>특정 색상 구분 어려움</td>
              <td>색상 외 추가 정보 제공, 명도 대비</td>
            </tr>
            <tr>
              <td>고령자</td>
              <td>시력 저하, 운동 능력 저하</td>
              <td>확대 가능, 큰 클릭 영역, 간결한 UI</td>
            </tr>
            <tr>
              <td>청각 장애인</td>
              <td>소리 인식 불가</td>
              <td>자막, 수어, 텍스트 대체</td>
            </tr>
            <tr>
              <td>지체 장애인</td>
              <td>마우스 사용 어려움</td>
              <td>키보드 접근, 충분한 반응 시간</td>
            </tr>
            <tr>
              <td>일시적 장애</td>
              <td>부상, 환경적 제약</td>
              <td>한 손 조작, 밝은 환경 대응</td>
            </tr>
          </tbody>
        </Table>
      </Section>

      <Section title="주요 지침 및 코드 예시" id="guidelines">
        <SubTitle>대체 텍스트 제공</SubTitle>
        <SectionDesc>
          모든 이미지에 적절한 대체 텍스트를 제공하여 시각적 정보를 텍스트로 전달합니다.
        </SectionDesc>
        <CodeBlock language="HTML">
{`<!-- 정보가 있는 이미지 -->
<img src="logo.png" alt="회사 로고">

<!-- 장식용 이미지 -->
<img src="decoration.png" alt="" role="presentation">

<!-- 복잡한 이미지 (차트 등) -->
<figure>
  <img src="chart.png" alt="2024년 매출 현황 차트">
  <figcaption>
    2024년 분기별 매출: 1분기 120억, 2분기 150억,
    3분기 180억, 4분기 200억
  </figcaption>
</figure>`}
        </CodeBlock>

        <SubTitle>명도 대비</SubTitle>
        <SectionDesc>
          텍스트와 배경 간의 명도 대비는 4.5:1 이상을 유지합니다.
          큰 텍스트(18px bold 이상)는 3:1 이상을 유지합니다.
        </SectionDesc>

        <SubTitle>키보드 접근성</SubTitle>
        <SectionDesc>
          모든 기능은 키보드만으로 접근 및 조작이 가능해야 합니다.
        </SectionDesc>
        <CodeBlock language="HTML">
{`<!-- 포커스 가능한 요소 사용 -->
<button type="button" onclick="openModal()">
  모달 열기
</button>

<!-- div로 버튼 대체 시 (권장하지 않음) -->
<div role="button" tabindex="0"
     onkeydown="handleKeyDown(event)">
  클릭 영역
</div>`}
        </CodeBlock>

        <SubTitle>건너뛰기 링크 (Skip Navigation)</SubTitle>
        <CodeBlock language="HTML">
{`<body>
  <a href="#main-content" class="blind">
    본문 바로가기
  </a>
  <header>...</header>
  <main id="main-content">...</main>
</body>`}
        </CodeBlock>

        <SubTitle>문서 언어 지정</SubTitle>
        <CodeBlock language="HTML">
{`<html lang="ko">
  ...
  <p>이 문서는 한국어로 작성되었습니다.</p>
  <p lang="en">This paragraph is in English.</p>
</html>`}
        </CodeBlock>

        <SubTitle>폼 레이블</SubTitle>
        <CodeBlock language="HTML">
{`<!-- label과 input 연결 -->
<label for="user-email">이메일</label>
<input type="email" id="user-email"
       placeholder="example@email.com"
       aria-required="true">

<!-- 에러 메시지 연결 -->
<input type="text" id="username"
       aria-describedby="username-error">
<p id="username-error" role="alert">
  사용자 이름을 입력해 주세요.
</p>`}
        </CodeBlock>
      </Section>

      <Section title="웹접근성 가이드라인" id="guidelines-detail">
        <GuidelineList>
          <GuidelineItem title="의미를 전달하고 있는 이미지에 대체 텍스트를 제공합니다.">
            <UnorderedList>
              <li>대체 텍스트는 이미지의 시각적 의도와 동등한 내용을 전달합니다.</li>
              <li>대체 텍스트는 중복으로 제공하지 않습니다.</li>
            </UnorderedList>
            <CodeBlock language="HTML">
{`<!-- X -->
<img src="mjaedot.png">
<img src="mjaedot.png" alt>
<img src="mjaedot.png" alt="">
<img src="mjaedot.png" title="mjaedot">
<img src="mjaedot.png" alt="mjaedot" title="mjaedot">

<!-- O -->
<img src="mjaedot.png" alt="mjaedot">`}
            </CodeBlock>
            <CodeBlock language="HTML">
{`<!-- X : 대체 텍스트 중복 -->
<a href="/">
    <img src="mjaedot.png" alt="mjaedot"> mjaedot
</a>

<!-- O : 링크 텍스트가 있으므로 alt 비움 -->
<a href="/">
    <img src="mjaedot.png" alt> mjaedot
</a>`}
            </CodeBlock>
          </GuidelineItem>

          <GuidelineItem title="전경 콘텐츠와 배경은 4.5:1 이상의 명도 대비를 유지합니다.">
            <UnorderedList>
              <li>전경 콘텐츠는 정보를 전달하고 있는 &lsquo;문자, 아이콘, 콘트롤(<CodeInline>a</CodeInline>, <CodeInline>button</CodeInline>, <CodeInline>input</CodeInline>, <CodeInline>select</CodeInline>, <CodeInline>textarea</CodeInline>)&rsquo;의 선과 면을 의미합니다.</li>
              <li>문자 크기가 bold 19px 이상 또는 normal 24px 이상인 경우 3:1 이상의 명도 대비를 유지합니다.</li>
              <li>아이콘, 콘트롤 등 시각 정보가 3px 이상 두꺼운 경우 3:1 이상의 명도 대비를 유지합니다.</li>
            </UnorderedList>
          </GuidelineItem>

          <GuidelineItem title="화면을 400%까지 확대할 수 있습니다.">
            <UnorderedList>
              <li>너비 1,280 픽셀 해상도 모니터에서 400%까지 확대할 수 있습니다. 모바일 단말에서는 테스트하지 않습니다.</li>
              <li>화면을 400% 확대한 상태에서 내용과 기능에 손실이 없어야 하고, 2차원 스크롤이 발생하지 않아야 합니다.</li>
            </UnorderedList>
          </GuidelineItem>

          <GuidelineItem title="키보드만으로 조작할 수 있습니다.">
            <UnorderedList>
              <li>구현된 키보드 접근 순서는 논리적으로 설명할 수 있어야 합니다.</li>
              <li>초점을 받은 요소는 시각적 단서를 제공해야 합니다.</li>
            </UnorderedList>
            <CodeBlock language="CSS">
{`/* X */
a:hover {
    color: #000;
}

/* O */
a:hover,
a:focus {
    color: #000;
}`}
            </CodeBlock>
            <CodeBlock language="JavaScript">
{`// X
$(document).on("mouseover", ".gnb a", function() { ... });

// O
$(document).on("mouseover focus", ".gnb a", function() { ... });`}
            </CodeBlock>
          </GuidelineItem>

          <GuidelineItem title="사용할 수 있는 충분한 시간을 제공합니다.">
            <UnorderedList>
              <li>시간 제한이 있는 정보는 시간 제한을 끄거나, 또는 최소 20초 이상 10회까지 연장할 수 있습니다.</li>
              <li>자동으로 갱신되는 정보에는 &lsquo;정지, 이전, 다음&rsquo; 기능을 제공합니다.</li>
            </UnorderedList>
          </GuidelineItem>

          <GuidelineItem title="발작을 유발하는 콘텐츠를 제공하지 않습니다.">
            <UnorderedList>
              <li>1초에 3~50회 사이의 번쩍이는 콘텐츠는 광과민성 발작을 유발할 수 있습니다.</li>
              <li>광과민성 발작은 소아 또는 간질 경험이 있는 사람에게 더 위험합니다.</li>
            </UnorderedList>
          </GuidelineItem>

          <GuidelineItem title="반복되는 콘텐츠 블록을 건너뛸 수 있습니다.">
            <UnorderedList>
              <li>일반적으로 글로벌 탐색 바와 로컬 탐색 바는 반복되는 콘텐츠 블록입니다.</li>
              <li>반복되는 콘텐츠 블록이 있는 경우 페이지 시작 위치에 &lsquo;본문으로 건너뛰기&rsquo; 링크를 제공합니다.</li>
            </UnorderedList>
            <CodeBlock language="HTML">
{`<!-- X -->
<body>
    <h1>mjaedot</h1>
    <nav>...</nav>
    <main>...</main>

<!-- O -->
<body>
    <a href="#main">본문으로 건너뛰기</a>
    <h1>mjaedot</h1>
    <nav>...</nav>
    <main id="main">...</main>`}
            </CodeBlock>
          </GuidelineItem>

          <GuidelineItem title="모든 문서의 제목은 고유하고 식별할 수 있습니다.">
            <UnorderedList>
              <li>제목 콘텐츠를 문서마다 다르게 설명함으로써 현재 문서의 용도를 식별할 수 있습니다.</li>
            </UnorderedList>
            <CodeBlock language="HTML">
{`<!-- X -->
<head>
    <title>mjaedot</title>
</head>

<!-- O -->
<head>
    <title>웹퍼블리싱 가이드 - mjaedot</title>
</head>`}
            </CodeBlock>
          </GuidelineItem>

          <GuidelineItem title="링크와 버튼 텍스트는 콘텐츠의 목적을 알 수 있습니다.">
            <UnorderedList>
              <li>주변 콘텐츠와 분리하여 독립적으로 접근해도 링크 또는 버튼의 목적을 알 수 있어야 합니다.</li>
              <li>링크 또는 버튼에 독립적으로 접근하여 이해하기 어려운 경우 동일한 단락, 목록, 셀, 연결된 헤더셀(<CodeInline>p</CodeInline>, <CodeInline>li</CodeInline>, <CodeInline>td</CodeInline>, <CodeInline>th</CodeInline>)에 링크 또는 버튼의 목적을 설명해야 합니다.</li>
            </UnorderedList>
            <CodeBlock language="HTML">
{`<!-- X -->
<a href="#" download>설치하기</a>
<button type="button">삭제하기</button>

<!-- O -->
<a href="#" download>안드로이드 애플리케이션 설치하기</a>
<p>안드로이드 애플리케이션 <a href="#" download>설치하기</a></p>

<!-- O -->
<button type="button">구매내역 삭제하기</button>
<p>구매내역 <button type="button">삭제하기</button></p>`}
            </CodeBlock>
          </GuidelineItem>

          <GuidelineItem title="섹션에는 의미 있는 마크업과 헤딩이 있습니다.">
            <UnorderedList>
              <li>섹션 콘텐츠는 의미에 알맞은 <CodeInline>article</CodeInline>, <CodeInline>section</CodeInline>, <CodeInline>nav</CodeInline>, <CodeInline>aside</CodeInline> 요소로 마크업합니다.</li>
              <li>섹션 콘텐츠에는 문서의 개요 체계에 알맞은 헤딩(h1~h6)을 제공합니다.</li>
              <li>명시적 헤딩 기법을 사용합니다. 명시적 헤딩 기법은 하나의 문서에 <CodeInline>h1</CodeInline> 요소를 한 번 사용합니다.</li>
            </UnorderedList>
            <CodeBlock language="HTML">
{`<!-- X -->
<div class="article">...</div>
<div class="section">...</div>

<!-- O -->
<article>
    <h2>...</h2>
</article>
<section>
    <h2>...</h2>
</section>
<nav>
    <h2>...</h2>
</nav>`}
            </CodeBlock>
          </GuidelineItem>

          <GuidelineItem title="문서의 휴먼 랭귀지 속성을 제공합니다.">
            <UnorderedList>
              <li><CodeInline>html</CodeInline> 요소에 <CodeInline>lang</CodeInline> 속성을 제공합니다.</li>
              <li>한글, 영문, 일문, 중문에는 이를 식별하기 위한 ISO-639-1 코드값 <CodeInline>ko</CodeInline>, <CodeInline>en</CodeInline>, <CodeInline>ja</CodeInline>, <CodeInline>zh</CodeInline>가 있습니다.</li>
            </UnorderedList>
          </GuidelineItem>

          <GuidelineItem title="문맥 변경은 예측할 수 있습니다.">
            <UnorderedList>
              <li>사용자가 실행하기 전까지는 문서를 갱신(이동, 추가, 삭제, 재배치)하거나, 팝업(새 창, 레이어)을 띄우거나, 초점을 다른 곳으로 옮기지 않습니다.</li>
              <li>사용자가 초점을 넣거나 마우스를 올리는 것은 기능을 실행하기 위한 의도로 보지 않기 때문에 문맥을 변경하면 안 됩니다.</li>
              <li>&lsquo;대한민국&rsquo; 선택의 결과로 대한민국의 &lsquo;시/군/구&rsquo;를 선택하는 항목이 등장했다면 이것은 문맥의 변화가 아닙니다.</li>
            </UnorderedList>
          </GuidelineItem>

          <GuidelineItem title="폼 콘트롤 요소에 설명을 제공합니다.">
            <UnorderedList>
              <li>모든 <CodeInline>input</CodeInline>, <CodeInline>textarea</CodeInline>, <CodeInline>select</CodeInline> 요소에는 콘트롤을 설명하는 <CodeInline>label</CodeInline> 요소를 맵핑하거나 또는 <CodeInline>title</CodeInline> 속성을 제공합니다.</li>
            </UnorderedList>
          </GuidelineItem>

          <GuidelineItem title="실수를 예방하고 정정하는 것을 돕습니다.">
            <UnorderedList>
              <li>입력 오류를 자동으로 감지할 수 있는 경우에만 이 지침을 적용합니다.</li>
              <li>오류 항목이 무엇인지 식별할 수 있도록 문자로 알리고 정정 의견을 제시합니다.</li>
              <li>정정 의견은 보안을 유지하는 수준에서 제시합니다.</li>
              <li>입력 내용을 전송하기 전 검토 후 교정할 수 있습니다. 또는 제출한 내용을 되돌릴 수 있습니다.</li>
            </UnorderedList>
          </GuidelineItem>

          <GuidelineItem title="HTML 문법을 준수합니다.">
            <UnorderedList>
              <li>시작 태그에서 닫는(self-closing) 요소를 제외하고 시작 태그, 종료 태그, 따옴표를 생략하지 않습니다.</li>
              <li>명세에 따라 중첩합니다.</li>
              <li>속성을 중복 선언하지 않습니다.</li>
              <li>모든 <CodeInline>id</CodeInline> 속성의 값은 하나의 문서 안에서 중복 없이 유일합니다.</li>
            </UnorderedList>
            <CodeBlock language="HTML">
{`<!-- X -->
<div><span>...</div>
<span><a><div>...</div></a></span>
<div class="aaa" class="bbb">...</div>
<div id="xyz">...</div><div id="xyz">...</div>

<!-- O -->
<div><span>...</span></div>
<div><a><div>...</div></a></div>
<div class="aaa bbb">...</div>
<div id="abc">...</div><div id="xyz">...</div>`}
            </CodeBlock>
          </GuidelineItem>
        </GuidelineList>

        <p className="cite-source">
          출처:{" "}
          <a className="external-link" href="https://github.com/lezhin/accessibility" target="_blank" rel="noopener noreferrer">
            레진 웹접근성 가이드라인
          </a>
        </p>
      </Section>

      <Section title="웹접근성 관련 사이트" id="related-sites">
        <UnorderedList>
          <li>NAVER Accessibility <a className="external-link" href="https://accessibility.naver.com" target="_blank" rel="noopener noreferrer">바로가기</a></li>
          <li>한국시각장애인연합회 <a className="external-link" href="http://www.kbuwel.or.kr" target="_blank" rel="noopener noreferrer">바로가기</a></li>
          <li>WebWatch <a className="external-link" href="http://www.webwatch.or.kr" target="_blank" rel="noopener noreferrer">바로가기</a></li>
        </UnorderedList>
      </Section>
    </>
  );
}
