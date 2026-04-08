import PageTitle from "@/app/components/ui/PageTitle";
import Section, { SubTitle, SectionDesc } from "@/app/components/ui/Section";
import CodeBlock, { ExampleBlock, CodeInline } from "@/app/components/ui/CodeBlock";
import { UnorderedList } from "@/app/components/ui/List";

export default function RuleCodePage() {
  return (
    <>
      <PageTitle badge="Convention">코드 규칙</PageTitle>

      <Section title="HTML 코드 규칙" id="html">
        <SubTitle>기본 규칙</SubTitle>
        <UnorderedList>
          <li>모든 태그는 소문자로 작성합니다.</li>
          <li>빈 태그는 셀프 클로징을 사용하지 않습니다. (예: <CodeInline>{'<br>'}</CodeInline>, <CodeInline>{'<img>'}</CodeInline>)</li>
          <li>속성값은 큰따옴표(<CodeInline>{'"'}</CodeInline>)로 감싸줍니다.</li>
          <li>Boolean 속성은 값을 생략합니다. (예: <CodeInline>disabled</CodeInline>, <CodeInline>checked</CodeInline>)</li>
        </UnorderedList>

        <SubTitle>적절한 태그 및 속성 사용</SubTitle>
        <UnorderedList>
          <li>클릭했을 때 이벤트가 발생하는 경우 <CodeInline>button</CodeInline> 태그를 사용합니다.</li>
          <li>클릭했을 때 다른 페이지로 넘어가는 경우 <CodeInline>a</CodeInline> 태그를 사용합니다.</li>
          <li><CodeInline>a</CodeInline> 태그 안에 <CodeInline>button</CodeInline> 태그를 넣는 등 인터랙티브 요소에 인터랙티브 요소를 넣지 않도록 합니다.</li>
          <li>단락이 아닌 경우, 단순히 block 속성을 사용하기 위해서 <CodeInline>p</CodeInline> 태그를 사용하지 않습니다.</li>
          <li>heading 태그는 레벨 순서를 지켜 작성합니다.</li>
          <li><CodeInline>button</CodeInline> 태그에는 <CodeInline>type</CodeInline>을 명시합니다.</li>
          <li>레이아웃을 표현하기 위하여 표를 사용하지 않습니다.</li>
        </UnorderedList>

        <SubTitle>웹접근성</SubTitle>
        <UnorderedList>
          <li><CodeInline>img</CodeInline> 요소의 <CodeInline>alt</CodeInline> 속성은 반드시 제공되어야 하며, 의미없는 이미지에 한하여 빈 값을 허용합니다.</li>
          <li><CodeInline>input</CodeInline> 요소는 <CodeInline>label</CodeInline>과 연결하거나 <CodeInline>title</CodeInline> 값을 지정하여야 합니다.</li>
          <li>분리된 입력폼은 각각 <CodeInline>title</CodeInline> 값을 지정하여야 합니다.</li>
          <li>적절한 <CodeInline>label</CodeInline> 텍스트 또는 <CodeInline>title</CodeInline>를 사용하여야 합니다.</li>
          <li>적절한 태그로 작성이 어려울 경우 WAI-ARIA를 활용하여 웹접근성을 강화할 수 있습니다.</li>
          <li><CodeInline>body</CodeInline> 상단에 본문 바로가기 링크를 제공하여야 합니다..</li>
          <li>키보드 탭키 이동으로 접근이 불가능한 내용이 없어야 합니다.</li>
        </UnorderedList>

        <SubTitle>ID와 클래스</SubTitle>
        <UnorderedList>
          <li>ID는 개발을 위해서만 사용하고, 퍼블리싱 작업시에는 클래스를 활용합니다.</li>
          <li>불가피한 경우를 제외하고 클래스명은 직관적으로 짓습니다.</li>
          <li>체인 선택자의 개수는 3개까지 권장합니다.</li>
          <li>클래스명에 넘버링은 최대한 지양합니다.</li>
        </UnorderedList>

        <SubTitle>들여쓰기</SubTitle>
        <UnorderedList>
          <li>1탭 들여쓰기 하며, 1탭의 크기는 공백 2칸으로 설정합니다.</li>
        </UnorderedList>

        <SubTitle>주석</SubTitle>
        <UnorderedList>
          <li>시작과 끝의 구분이 필요한 경우 <CodeInline>{'<!-- 내용 -->'}</CodeInline>와 <CodeInline>{'<!-- // 내용 -->'}</CodeInline>으로 구분합니다.</li>
        </UnorderedList>
        <CodeBlock language="HTML">
{`<!-- 섹션명 -->
<section>
  <h2>섹션 제목</h2>
  ...
</section>
<!-- // 섹션명 -->`}
        </CodeBlock>
      </Section>

      <Section title="CSS / SCSS 코드 규칙" id="css">
        <SubTitle>속성 선언 순서</SubTitle>
        <SectionDesc>
          CSS 속성은 레이아웃 → 박스 모델 → 타이포그래피 → 비주얼 → 기타 순서로 작성합니다.
        </SectionDesc>
        <CodeBlock language="CSS">
{`.element {
  /* Layout */
  display: flex;
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;

  /* Box Model */
  width: 100%;
  height: auto;
  margin: 0;
  padding: 16px;
  border: 1px solid #ddd;

  /* Typography */
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  color: #333;
  text-align: left;

  /* Visual */
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  opacity: 1;

  /* Transition & Animation */
  transition: all 0.3s ease;
}`}
        </CodeBlock>

        <SubTitle>선택자 규칙</SubTitle>
        <UnorderedList>
          <li>ID 선택자는 스타일링에 사용하지 않습니다.</li>
          <li>선택자 깊이는 3단계 이내로 제한합니다.</li>
          <li>태그 선택자 대신 클래스 선택자를 사용합니다.</li>
          <li>!important 사용을 지양합니다.</li>
        </UnorderedList>

        <ExampleBlock type="good">
{`.card-title {
  font-size: 18px;
}

.card-title.active {
  color: #0f766e;
}`}
        </ExampleBlock>

        <ExampleBlock type="bad">
{`div > ul > li > a {
  font-size: 18px;
}

#card .title {
  color: #0f766e !important;
}`}
        </ExampleBlock>

        <SubTitle>숨김 텍스트 처리</SubTitle>
        <SectionDesc>
          스크린 리더 사용자를 위해 시각적으로 숨김 텍스트가 필요한 경우 아래 방식을 사용합니다.
        </SectionDesc>
        <CodeBlock language="CSS">
{`.blind {
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
}`}
        </CodeBlock>
      </Section>

      <Section title="SCSS 코드 규칙" id="scss">
        <SubTitle>파일 구조</SubTitle>
        <CodeBlock language="Text">
{`styles/
├── common/
│   ├── _variable.scss    // 변수 정의
│   ├── _mixin.scss       // 믹스인 정의
│   └── _reset.scss       // 리셋 스타일
├── components/           // 컴포넌트 스타일
│   └── Component.module.scss
└── globals.scss          // 글로벌 스타일`}
        </CodeBlock>

        <SubTitle>주석 규칙</SubTitle>
        <SectionDesc>
          SCSS 파일의 주석은 구조를 파악할 수 있도록 해당 클래스의 풀네임을 작성합니다.
        </SectionDesc>
        <CodeBlock language="SCSS">
{`// .card
.card {
  display: flex;

  // .card-title
  &-title {
    font-size: 18px;
  }

  // .card-desc
  &-desc {
    color: #666;
  }
}`}
        </CodeBlock>

        <SubTitle>변수 및 믹스인 활용</SubTitle>
        <SectionDesc>
          반복되는 값은 변수로, 반복되는 패턴은 믹스인으로 정의하여 관리합니다.
        </SectionDesc>
        <CodeBlock language="SCSS">
{`// 변수 활용
$primary: #0f766e;
$radius-md: 10px;

.button {
  background-color: $primary;
  border-radius: $radius-md;
}

// 믹스인 활용
@mixin ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.title {
  @include ellipsis;
}`}
        </CodeBlock>
      </Section>
    </>
  );
}
