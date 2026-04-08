import PageTitle from "@/app/components/ui/PageTitle";
import Section, { SubTitle, SectionDesc } from "@/app/components/ui/Section";
import Table, { TableEm } from "@/app/components/ui/Table";
import CodeBlock from "@/app/components/ui/CodeBlock";
import { UnorderedList } from "@/app/components/ui/List";

export default function RuleStandardPage() {
  return (
    <>
      <PageTitle badge="Convention">표준 규칙</PageTitle>

      <Section title="기본 문서 템플릿" id="template">
        <SectionDesc>
          HTML5 기본 문서 구조를 따르며, 웹 표준과 접근성을 고려한 기본 템플릿을 사용합니다.
        </SectionDesc>
        <CodeBlock language="HTML">
{`<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>페이지 제목</title>
  <meta name="description" content="페이지 설명">
  <meta name="keywords" content="키워드">
  <meta name="author" content="작성자">

  <!-- Open Graph -->
  <meta property="og:title" content="페이지 제목">
  <meta property="og:description" content="페이지 설명">
  <meta property="og:type" content="website">
  <meta property="og:image" content="og-image.png">

  <!-- Stylesheet -->
  <link rel="stylesheet" href="styles/style.css">
</head>
<body>
  <div id="root"></div>
  <script src="scripts/app.js"></script>
</body>
</html>`}
        </CodeBlock>
      </Section>

      <Section title="시맨틱 마크업" id="semantic">
        <SectionDesc>
          HTML5에서 제공하는 시맨틱 요소를 적극 활용하여 문서의 의미를 명확히 전달합니다.
        </SectionDesc>
        <Table>
          <colgroup>
            <col style={{ width: "20%" }} />
            <col style={{ width: "40%" }} />
            <col style={{ width: "40%" }} />
          </colgroup>
          <thead>
            <tr>
              <th>요소</th>
              <th>설명</th>
              <th>사용 예시</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&lt;header&gt;</td>
              <td>문서 또는 섹션의 헤더</td>
              <td>사이트 로고, 네비게이션 등</td>
            </tr>
            <tr>
              <td>&lt;nav&gt;</td>
              <td>네비게이션 링크 그룹</td>
              <td>GNB, LNB, 브레드크럼 등</td>
            </tr>
            <tr>
              <td>&lt;main&gt;</td>
              <td>문서의 주요 콘텐츠</td>
              <td>페이지당 하나만 사용</td>
            </tr>
            <tr>
              <td>&lt;article&gt;</td>
              <td>독립적인 콘텐츠</td>
              <td>블로그 글, 뉴스 기사 등</td>
            </tr>
            <tr>
              <td>&lt;section&gt;</td>
              <td>주제별 그룹핑된 콘텐츠</td>
              <td>챕터, 탭 패널 등</td>
            </tr>
            <tr>
              <td>&lt;aside&gt;</td>
              <td>주요 콘텐츠와 간접적으로 관련된 콘텐츠</td>
              <td>사이드바, 관련 링크 등</td>
            </tr>
            <tr>
              <td>&lt;footer&gt;</td>
              <td>문서 또는 섹션의 푸터</td>
              <td>저작권, 연락처 정보 등</td>
            </tr>
            <tr>
              <td>&lt;figure&gt;</td>
              <td>독립적인 미디어 콘텐츠</td>
              <td>이미지, 차트, 코드 블록 등</td>
            </tr>
            <tr>
              <td>&lt;figcaption&gt;</td>
              <td>figure 요소의 캡션</td>
              <td>이미지 설명 등</td>
            </tr>
            <tr>
              <td>&lt;mark&gt;</td>
              <td>강조된 텍스트</td>
              <td>검색 결과 하이라이트 등</td>
            </tr>
            <tr>
              <td>&lt;time&gt;</td>
              <td>날짜/시간 표현</td>
              <td>게시일, 이벤트 날짜 등</td>
            </tr>
            <tr>
              <td>&lt;details&gt;</td>
              <td>토글 가능한 상세 정보</td>
              <td>FAQ, 아코디언 UI 등</td>
            </tr>
            <tr>
              <td>&lt;summary&gt;</td>
              <td>details 요소의 요약/제목</td>
              <td>아코디언 헤더 등</td>
            </tr>
          </tbody>
        </Table>
      </Section>

      <Section title="특수 문자 엔티티" id="entity">
        <SectionDesc>
          HTML 문서에서 특수 문자를 표현할 때 엔티티 이름을 사용합니다.
        </SectionDesc>
        <Table>
          <colgroup>
            <col style={{ width: "20%" }} />
            <col style={{ width: "30%" }} />
            <col style={{ width: "25%" }} />
            <col style={{ width: "25%" }} />
          </colgroup>
          <thead>
            <tr>
              <th>문자</th>
              <th>엔티티 이름</th>
              <th>엔티티 번호</th>
              <th>설명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&amp;</td>
              <td>&amp;amp;</td>
              <td>&amp;#38;</td>
              <td>앰퍼샌드</td>
            </tr>
            <tr>
              <td>&lt;</td>
              <td>&amp;lt;</td>
              <td>&amp;#60;</td>
              <td>보다 작음</td>
            </tr>
            <tr>
              <td>&gt;</td>
              <td>&amp;gt;</td>
              <td>&amp;#62;</td>
              <td>보다 큼</td>
            </tr>
            <tr>
              <td>&quot;</td>
              <td>&amp;quot;</td>
              <td>&amp;#34;</td>
              <td>큰따옴표</td>
            </tr>
            <tr>
              <td>&apos;</td>
              <td>&amp;apos;</td>
              <td>&amp;#39;</td>
              <td>작은따옴표</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&amp;nbsp;</td>
              <td>&amp;#160;</td>
              <td>공백</td>
            </tr>
            <tr>
              <td>&copy;</td>
              <td>&amp;copy;</td>
              <td>&amp;#169;</td>
              <td>저작권</td>
            </tr>
            <tr>
              <td>&reg;</td>
              <td>&amp;reg;</td>
              <td>&amp;#174;</td>
              <td>등록 상표</td>
            </tr>
          </tbody>
        </Table>
      </Section>
    </>
  );
}
