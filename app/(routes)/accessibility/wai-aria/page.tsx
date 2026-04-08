import PageTitle from "@/app/components/ui/PageTitle";
import Section, { SubTitle, SectionDesc } from "@/app/components/ui/Section";
import Table from "@/app/components/ui/Table";
import { CodeInline } from "@/app/components/ui/CodeBlock";

export default function WaiAriaPage() {
  return (
    <>
      <PageTitle badge="Accessibility">WAI-ARIA</PageTitle>

      <Section title="WAI-ARIA 개요" id="overview">
        <SectionDesc>
          WAI-ARIA(Web Accessibility Initiative - Accessible Rich Internet Applications)는
          동적 웹 콘텐츠와 사용자 인터페이스를 접근 가능하게 만들기 위한 기술 명세입니다.
          Role, Property, State 세 가지 요소로 구성됩니다.
        </SectionDesc>
      </Section>

      <Section title="ARIA Roles" id="roles">
        <SubTitle>HTML5 대응 역할</SubTitle>
        <Table>
          <thead>
            <tr>
              <th>Role</th>
              <th>대응 HTML5 요소</th>
              <th>설명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><CodeInline>banner</CodeInline></td>
              <td><CodeInline>{'<header>'}</CodeInline></td>
              <td>사이트 전역 헤더</td>
            </tr>
            <tr>
              <td><CodeInline>navigation</CodeInline></td>
              <td><CodeInline>{'<nav>'}</CodeInline></td>
              <td>네비게이션 링크 모음</td>
            </tr>
            <tr>
              <td><CodeInline>main</CodeInline></td>
              <td><CodeInline>{'<main>'}</CodeInline></td>
              <td>주요 콘텐츠</td>
            </tr>
            <tr>
              <td><CodeInline>complementary</CodeInline></td>
              <td><CodeInline>{'<aside>'}</CodeInline></td>
              <td>보조 콘텐츠</td>
            </tr>
            <tr>
              <td><CodeInline>contentinfo</CodeInline></td>
              <td><CodeInline>{'<footer>'}</CodeInline></td>
              <td>사이트 전역 푸터</td>
            </tr>
            <tr>
              <td><CodeInline>form</CodeInline></td>
              <td><CodeInline>{'<form>'}</CodeInline></td>
              <td>폼 영역</td>
            </tr>
            <tr>
              <td><CodeInline>region</CodeInline></td>
              <td><CodeInline>{'<section>'}</CodeInline></td>
              <td>문서의 섹션</td>
            </tr>
            <tr>
              <td><CodeInline>article</CodeInline></td>
              <td><CodeInline>{'<article>'}</CodeInline></td>
              <td>독립적 콘텐츠</td>
            </tr>
          </tbody>
        </Table>

        <SubTitle>위젯 역할 (Widget Roles)</SubTitle>
        <Table>
          <thead>
            <tr>
              <th>Role</th>
              <th>설명</th>
              <th>관련 속성</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><CodeInline>tab</CodeInline></td>
              <td>탭 UI</td>
              <td><CodeInline>aria-selected</CodeInline>, <CodeInline>aria-controls</CodeInline></td>
            </tr>
            <tr>
              <td><CodeInline>tablist</CodeInline></td>
              <td>탭 목록 컨테이너</td>
              <td><CodeInline>aria-orientation</CodeInline></td>
            </tr>
            <tr>
              <td><CodeInline>tabpanel</CodeInline></td>
              <td>탭 패널</td>
              <td><CodeInline>aria-labelledby</CodeInline></td>
            </tr>
            <tr>
              <td><CodeInline>dialog</CodeInline></td>
              <td>다이얼로그 (모달)</td>
              <td><CodeInline>aria-modal</CodeInline>, <CodeInline>aria-labelledby</CodeInline></td>
            </tr>
            <tr>
              <td><CodeInline>alertdialog</CodeInline></td>
              <td>알림 다이얼로그</td>
              <td><CodeInline>aria-modal</CodeInline></td>
            </tr>
            <tr>
              <td><CodeInline>tooltip</CodeInline></td>
              <td>툴팁</td>
              <td><CodeInline>aria-describedby</CodeInline></td>
            </tr>
            <tr>
              <td><CodeInline>progressbar</CodeInline></td>
              <td>진행 표시줄</td>
              <td><CodeInline>aria-valuenow</CodeInline>, <CodeInline>aria-valuemin</CodeInline>, <CodeInline>aria-valuemax</CodeInline></td>
            </tr>
            <tr>
              <td><CodeInline>switch</CodeInline></td>
              <td>on/off 토글</td>
              <td><CodeInline>aria-checked</CodeInline></td>
            </tr>
            <tr>
              <td><CodeInline>tree</CodeInline></td>
              <td>트리 뷰</td>
              <td><CodeInline>aria-expanded</CodeInline></td>
            </tr>
            <tr>
              <td><CodeInline>treeitem</CodeInline></td>
              <td>트리 뷰 항목</td>
              <td><CodeInline>aria-level</CodeInline>, <CodeInline>aria-expanded</CodeInline></td>
            </tr>
            <tr>
              <td><CodeInline>menu</CodeInline></td>
              <td>메뉴</td>
              <td><CodeInline>aria-orientation</CodeInline></td>
            </tr>
            <tr>
              <td><CodeInline>menuitem</CodeInline></td>
              <td>메뉴 항목</td>
              <td>-</td>
            </tr>
            <tr>
              <td><CodeInline>toolbar</CodeInline></td>
              <td>툴바</td>
              <td><CodeInline>aria-orientation</CodeInline></td>
            </tr>
            <tr>
              <td><CodeInline>scrollbar</CodeInline></td>
              <td>스크롤바</td>
              <td><CodeInline>aria-controls</CodeInline>, <CodeInline>aria-valuenow</CodeInline></td>
            </tr>
            <tr>
              <td><CodeInline>status</CodeInline></td>
              <td>상태 메시지</td>
              <td><CodeInline>aria-live=&quot;polite&quot;</CodeInline></td>
            </tr>
            <tr>
              <td><CodeInline>alert</CodeInline></td>
              <td>알림 메시지</td>
              <td><CodeInline>aria-live=&quot;assertive&quot;</CodeInline></td>
            </tr>
            <tr>
              <td><CodeInline>timer</CodeInline></td>
              <td>타이머</td>
              <td><CodeInline>aria-live</CodeInline></td>
            </tr>
            <tr>
              <td><CodeInline>search</CodeInline></td>
              <td>검색 영역</td>
              <td><CodeInline>aria-label</CodeInline></td>
            </tr>
          </tbody>
        </Table>
      </Section>

      <Section title="ARIA Properties" id="properties">
        <SubTitle>전역 속성 (Global Properties)</SubTitle>
        <Table>
          <thead>
            <tr>
              <th>속성</th>
              <th>값 유형</th>
              <th>설명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><CodeInline>aria-label</CodeInline></td>
              <td>String</td>
              <td>요소의 접근 가능한 이름 정의</td>
            </tr>
            <tr>
              <td><CodeInline>aria-labelledby</CodeInline></td>
              <td>ID reference</td>
              <td>다른 요소의 텍스트를 이름으로 참조</td>
            </tr>
            <tr>
              <td><CodeInline>aria-describedby</CodeInline></td>
              <td>ID reference</td>
              <td>요소에 대한 추가 설명 참조</td>
            </tr>
            <tr>
              <td><CodeInline>aria-live</CodeInline></td>
              <td>off | polite | assertive</td>
              <td>동적 콘텐츠 변경 알림 방식</td>
            </tr>
            <tr>
              <td><CodeInline>aria-atomic</CodeInline></td>
              <td>Boolean</td>
              <td>변경 시 전체 영역 읽기 여부</td>
            </tr>
            <tr>
              <td><CodeInline>aria-relevant</CodeInline></td>
              <td>additions | removals | text | all</td>
              <td>알림 대상 변경 유형</td>
            </tr>
            <tr>
              <td><CodeInline>aria-controls</CodeInline></td>
              <td>ID reference</td>
              <td>제어하는 요소 참조</td>
            </tr>
            <tr>
              <td><CodeInline>aria-owns</CodeInline></td>
              <td>ID reference</td>
              <td>DOM 외부의 자식 요소 정의</td>
            </tr>
          </tbody>
        </Table>

        <SubTitle>위젯 속성 (Widget Properties)</SubTitle>
        <Table>
          <thead>
            <tr>
              <th>속성</th>
              <th>값 유형</th>
              <th>설명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><CodeInline>aria-required</CodeInline></td>
              <td>Boolean</td>
              <td>필수 입력 여부</td>
            </tr>
            <tr>
              <td><CodeInline>aria-placeholder</CodeInline></td>
              <td>String</td>
              <td>입력 힌트 텍스트</td>
            </tr>
            <tr>
              <td><CodeInline>aria-valuemin</CodeInline></td>
              <td>Number</td>
              <td>최소값</td>
            </tr>
            <tr>
              <td><CodeInline>aria-valuemax</CodeInline></td>
              <td>Number</td>
              <td>최대값</td>
            </tr>
            <tr>
              <td><CodeInline>aria-valuenow</CodeInline></td>
              <td>Number</td>
              <td>현재값</td>
            </tr>
            <tr>
              <td><CodeInline>aria-valuetext</CodeInline></td>
              <td>String</td>
              <td>현재값의 텍스트 표현</td>
            </tr>
            <tr>
              <td><CodeInline>aria-modal</CodeInline></td>
              <td>Boolean</td>
              <td>모달 여부</td>
            </tr>
            <tr>
              <td><CodeInline>aria-orientation</CodeInline></td>
              <td>horizontal | vertical</td>
              <td>요소의 방향</td>
            </tr>
          </tbody>
        </Table>
      </Section>

      <Section title="ARIA States" id="states">
        <Table>
          <thead>
            <tr>
              <th>상태</th>
              <th>값 유형</th>
              <th>설명</th>
              <th>적용 대상</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><CodeInline>aria-checked</CodeInline></td>
              <td>true | false | mixed</td>
              <td>체크 상태</td>
              <td>checkbox, radio, switch</td>
            </tr>
            <tr>
              <td><CodeInline>aria-disabled</CodeInline></td>
              <td>Boolean</td>
              <td>비활성화 상태</td>
              <td>모든 요소</td>
            </tr>
            <tr>
              <td><CodeInline>aria-invalid</CodeInline></td>
              <td>true | false | grammar | spelling</td>
              <td>유효성 검사 실패 상태</td>
              <td>입력 요소</td>
            </tr>
            <tr>
              <td><CodeInline>aria-selected</CodeInline></td>
              <td>Boolean</td>
              <td>선택 상태</td>
              <td>tab, option, treeitem</td>
            </tr>
            <tr>
              <td><CodeInline>aria-expanded</CodeInline></td>
              <td>Boolean</td>
              <td>확장/축소 상태</td>
              <td>button, treeitem</td>
            </tr>
            <tr>
              <td><CodeInline>aria-hidden</CodeInline></td>
              <td>Boolean</td>
              <td>접근성 트리에서 숨김</td>
              <td>장식용 요소</td>
            </tr>
            <tr>
              <td><CodeInline>aria-busy</CodeInline></td>
              <td>Boolean</td>
              <td>업데이트 진행 중</td>
              <td>live region</td>
            </tr>
            <tr>
              <td><CodeInline>aria-current</CodeInline></td>
              <td>page | step | location | date | time | true</td>
              <td>현재 항목 표시</td>
              <td>nav, breadcrumb</td>
            </tr>
            <tr>
              <td><CodeInline>aria-pressed</CodeInline></td>
              <td>true | false | mixed</td>
              <td>토글 버튼 눌림 상태</td>
              <td>button</td>
            </tr>
          </tbody>
        </Table>
      </Section>
      <Section title="ARIA Roles 상세 레퍼런스" id="roles-detail">
        <SubTitle>TAG Roles</SubTitle>
        <Table>
          <colgroup>
            <col style={{ width: "12%" }} />
            <col style={{ width: "18%" }} />
            <col style={{ width: "25%" }} />
            <col style={{ width: "45%" }} />
          </colgroup>
          <thead>
            <tr><th>분류</th><th>구분</th><th>이름</th><th>설명</th></tr>
          </thead>
          <tbody>
            <tr><td rowSpan={8}>양식</td><td>입력 서식</td><td><CodeInline>role=&quot;form&quot;</CodeInline></td><td>동일한 HTML 요소 <CodeInline>{'<form>'}</CodeInline></td></tr>
            <tr><td>자유 형식 입력 텍스트</td><td><CodeInline>role=&quot;textbox&quot;</CodeInline></td><td>동일한 HTML 요소 <CodeInline>{'<input type="text">'}</CodeInline>, <CodeInline>{'<textarea>'}</CodeInline></td></tr>
            <tr><td>일반 형식 입력 텍스트</td><td><CodeInline>role=&quot;input&quot;</CodeInline></td><td>동일한 HTML 요소 <CodeInline>{'<input type="text">'}</CodeInline></td></tr>
            <tr><td>라디오</td><td><CodeInline>role=&quot;radio&quot;</CodeInline></td><td>동일한 HTML 요소 <CodeInline>{'<input type="radio">'}</CodeInline>, &quot;라디오그룹&quot;으로 묶어야 함</td></tr>
            <tr><td>체크박스</td><td><CodeInline>role=&quot;checkbox&quot;</CodeInline></td><td>동일한 HTML 요소 <CodeInline>{'<input type="checkbox">'}</CodeInline></td></tr>
            <tr><td>선택목록</td><td><CodeInline>role=&quot;combobox&quot;</CodeInline></td><td>동일한 HTML 요소 <CodeInline>{'<select>'}</CodeInline></td></tr>
            <tr><td>선택옵션</td><td><CodeInline>role=&quot;option&quot;</CodeInline></td><td>동일한 HTML 요소 <CodeInline>{'<option>'}</CodeInline></td></tr>
            <tr><td>슬라이더</td><td><CodeInline>role=&quot;slider&quot;</CodeInline></td><td>동일한 HTML 요소 <CodeInline>{'<input type="range">'}</CodeInline></td></tr>

            <tr><td rowSpan={6}>표</td><td>표</td><td><CodeInline>role=&quot;table&quot;</CodeInline></td><td>동일한 HTML 요소 <CodeInline>{'<table>'}</CodeInline></td></tr>
            <tr><td>행그룹</td><td><CodeInline>role=&quot;rowgroup&quot;</CodeInline></td><td>동일한 HTML 요소 <CodeInline>{'<thead>'}</CodeInline>, <CodeInline>{'<tbody>'}</CodeInline></td></tr>
            <tr><td>행</td><td><CodeInline>role=&quot;row&quot;</CodeInline></td><td>동일한 HTML 요소 <CodeInline>{'<tr>'}</CodeInline></td></tr>
            <tr><td>제목(열)</td><td><CodeInline>role=&quot;columnheader&quot;</CodeInline></td><td>동일한 HTML 요소 <CodeInline>{'<th scope="col">'}</CodeInline></td></tr>
            <tr><td>제목(행)</td><td><CodeInline>role=&quot;rowheader&quot;</CodeInline></td><td>동일한 HTML 요소 <CodeInline>{'<th scope="row">'}</CodeInline></td></tr>
            <tr><td>내용</td><td><CodeInline>role=&quot;cell&quot;</CodeInline></td><td>동일한 HTML 요소 <CodeInline>{'<td>'}</CodeInline></td></tr>

            <tr><td rowSpan={5}>HTML5</td><td>네비게이션</td><td><CodeInline>role=&quot;navigation&quot;</CodeInline></td><td>동일한 HTML 요소 <CodeInline>{'<nav>'}</CodeInline></td></tr>
            <tr><td>일반 섹션</td><td><CodeInline>role=&quot;section&quot;</CodeInline></td><td>동일한 HTML 요소 <CodeInline>{'<section>'}</CodeInline></td></tr>
            <tr><td>Article</td><td><CodeInline>role=&quot;article&quot;</CodeInline></td><td>동일한 HTML 요소 <CodeInline>{'<article>'}</CodeInline></td></tr>
            <tr><td>메인 컨텐츠</td><td><CodeInline>role=&quot;main&quot;</CodeInline></td><td>동일한 HTML 요소 <CodeInline>{'<main>'}</CodeInline></td></tr>
            <tr><td>그래픽 문서</td><td><CodeInline>role=&quot;figure&quot;</CodeInline></td><td>동일한 HTML 요소 <CodeInline>{'<figure>'}</CodeInline></td></tr>

            <tr><td rowSpan={4}>기본요소</td><td>버튼</td><td><CodeInline>role=&quot;button&quot;</CodeInline></td><td>동일한 HTML 요소 <CodeInline>{'<button>'}</CodeInline></td></tr>
            <tr><td>이미지</td><td><CodeInline>role=&quot;img&quot;</CodeInline></td><td>동일한 HTML 요소 <CodeInline>{'<img>'}</CodeInline></td></tr>
            <tr><td>링크</td><td><CodeInline>role=&quot;link&quot;</CodeInline></td><td>동일한 HTML 요소 <CodeInline>{'<a>'}</CodeInline></td></tr>
            <tr><td>선</td><td><CodeInline>role=&quot;separator&quot;</CodeInline></td><td>동일한 HTML 요소 <CodeInline>{'<hr>'}</CodeInline></td></tr>

            <tr><td rowSpan={3}>목록, 정의 요소</td><td>목록의 그룹</td><td><CodeInline>role=&quot;list&quot;</CodeInline></td><td>동일한 HTML 요소 <CodeInline>{'<ul>'}</CodeInline>, <CodeInline>{'<ol>'}</CodeInline></td></tr>
            <tr><td>목록의 단일항목</td><td><CodeInline>role=&quot;listitem&quot;</CodeInline></td><td>동일한 HTML 요소 <CodeInline>{'<li>'}</CodeInline>, <CodeInline>{'<dt>'}</CodeInline></td></tr>
            <tr><td>데이터리스트</td><td><CodeInline>role=&quot;listbox&quot;</CodeInline></td><td>동일한 HTML 요소 <CodeInline>{'<datalist>'}</CodeInline> (사파리 미지원)</td></tr>

            <tr><td rowSpan={10}>비슷한 HTML 요소</td><td>주요 제목</td><td><CodeInline>role=&quot;heading&quot;</CodeInline></td><td>비슷한 HTML 요소 <CodeInline>{'<h1>'}</CodeInline>~<CodeInline>{'<h6>'}</CodeInline></td></tr>
            <tr><td>중요한 섹션</td><td><CodeInline>role=&quot;region&quot;</CodeInline></td><td>비슷한 HTML 요소 <CodeInline>{'<section>'}</CodeInline>, 중요한 내용을 포함하는 인식 가능한 섹션</td></tr>
            <tr><td>그리드</td><td><CodeInline>role=&quot;grid&quot;</CodeInline></td><td>비슷한 HTML 요소 <CodeInline>{'<table>'}</CodeInline>, <CodeInline>aria-colcount</CodeInline>와 같이 사용됨</td></tr>
            <tr><td>그리드 내용</td><td><CodeInline>role=&quot;gridcell&quot;</CodeInline></td><td>비슷한 HTML 요소 <CodeInline>{'<td>'}</CodeInline></td></tr>
            <tr><td>정의 제목</td><td><CodeInline>role=&quot;term&quot;</CodeInline></td><td>비슷한 HTML 요소 <CodeInline>{'<dt>'}</CodeInline></td></tr>
            <tr><td>정의 내용</td><td><CodeInline>role=&quot;definition&quot;</CodeInline></td><td>비슷한 HTML 요소 <CodeInline>{'<dd>'}</CodeInline></td></tr>
            <tr><td>슬라이더</td><td><CodeInline>role=&quot;range&quot;</CodeInline></td><td>비슷한 HTML 요소 <CodeInline>{'<input type="range">'}</CodeInline></td></tr>
            <tr><td>스핀버튼</td><td><CodeInline>role=&quot;spinbutton&quot;</CodeInline></td><td>비슷한 HTML 요소 <CodeInline>{'<input type="number">'}</CodeInline></td></tr>
            <tr><td>Contentinfo</td><td><CodeInline>role=&quot;contentinfo&quot;</CodeInline></td><td>비슷한 HTML 요소 <CodeInline>{'<footer>'}</CodeInline></td></tr>
            <tr><td>보완적인 랜드 마크</td><td><CodeInline>role=&quot;complementary&quot;</CodeInline></td><td>비슷한 HTML 요소 <CodeInline>{'<aside>'}</CodeInline></td></tr>

            <tr><td rowSpan={4}>기타</td><td>라디오 그룹</td><td><CodeInline>role=&quot;radiogroup&quot;</CodeInline></td><td>&quot;라디오 그룹&quot;으로 역할 정의</td></tr>
            <tr><td>섹션 제목</td><td><CodeInline>role=&quot;sectionhead&quot;</CodeInline></td><td>추상적인 역할</td></tr>
            <tr><td>선택 목록</td><td><CodeInline>role=&quot;select&quot;</CodeInline></td><td>추상적인 역할</td></tr>
            <tr><td>텍스트</td><td><CodeInline>role=&quot;text&quot;</CodeInline></td><td>이미지를 텍스트로만 읽도록 사용, 마크업에 의해 분리된 텍스트를 한번에 읽도록 사용</td></tr>
          </tbody>
        </Table>

        <SubTitle>Widget Roles</SubTitle>
        <Table>
          <colgroup>
            <col style={{ width: "12%" }} />
            <col style={{ width: "18%" }} />
            <col style={{ width: "25%" }} />
            <col style={{ width: "45%" }} />
          </colgroup>
          <thead>
            <tr><th>분류</th><th>구분</th><th>이름</th><th>설명</th></tr>
          </thead>
          <tbody>
            <tr><td rowSpan={12}>기능</td><td>탭 메뉴그룹</td><td><CodeInline>role=&quot;tablist&quot;</CodeInline></td><td><CodeInline>{'<ul>'}</CodeInline> 그룹 요소에 적용</td></tr>
            <tr><td>탭 메뉴목록</td><td><CodeInline>role=&quot;presentation&quot;</CodeInline></td><td><CodeInline>{'<li>'}</CodeInline> 목록 요소에 적용 (시맨틱 역할 무효화)</td></tr>
            <tr><td>탭 메뉴링크</td><td><CodeInline>role=&quot;tab&quot;</CodeInline></td><td><CodeInline>{'<a>'}</CodeInline> 이벤트 요소에 적용</td></tr>
            <tr><td>탭 내용</td><td><CodeInline>role=&quot;tabpanel&quot;</CodeInline></td><td><CodeInline>{'<div>'}</CodeInline> 콘텐츠 활성화 요소에 적용</td></tr>
            <tr><td>Dialog</td><td><CodeInline>role=&quot;dialog&quot;</CodeInline></td><td>사용자가 정보를 입력하거나 응답하도록 하는 모달</td></tr>
            <tr><td>Tooltip</td><td><CodeInline>role=&quot;tooltip&quot;</CodeInline></td><td>요소에 대한 설명을 표시하는 문맥 팝업</td></tr>
            <tr><td>트리목록</td><td><CodeInline>role=&quot;tree&quot;</CodeInline></td><td>축소 및 확장 할 수 있는 하위 수준 중첩 그룹을 포함하는 목록</td></tr>
            <tr><td>트리의 옵션 항목</td><td><CodeInline>role=&quot;treeitem&quot;</CodeInline></td><td>확장되거나 축소될 수 있는 트리 내의 요소</td></tr>
            <tr><td>트리 그리드</td><td><CodeInline>role=&quot;treegrid&quot;</CodeInline></td><td>트리와 같은 방법으로 행을 확장 및 축소할 수 있는 그리드</td></tr>
            <tr><td>진행표시줄</td><td><CodeInline>role=&quot;progressbar&quot;</CodeInline></td><td>작업의 진행 상태를 표시하는 요소</td></tr>
            <tr><td>스위치</td><td><CodeInline>role=&quot;switch&quot;</CodeInline></td><td>on / off 값을 나타내는 체크 박스 유형</td></tr>
            <tr><td>Toolbar</td><td><CodeInline>role=&quot;toolbar&quot;</CodeInline></td><td>기능 버튼 또는 컨트롤 모음</td></tr>

            <tr><td rowSpan={18}>의미</td><td>메뉴바</td><td><CodeInline>role=&quot;menubar&quot;</CodeInline></td><td>수평으로 제시되는 메뉴</td></tr>
            <tr><td>메뉴그룹</td><td><CodeInline>role=&quot;menu&quot;</CodeInline></td><td>선택목록 제공</td></tr>
            <tr><td>메뉴목록</td><td><CodeInline>role=&quot;menuitem&quot;</CodeInline></td><td>선택사항의 옵션으로만 사용</td></tr>
            <tr><td>메뉴선택 (단일)</td><td><CodeInline>role=&quot;menuitemradio&quot;</CodeInline></td><td>하나만 선택 할 수 있는 메뉴목록, <CodeInline>aria-checked</CodeInline>와 함께 사용</td></tr>
            <tr><td>메뉴선택 (복수)</td><td><CodeInline>role=&quot;menuitemcheckbox&quot;</CodeInline></td><td>여러개 선택 할 수 있는 메뉴목록, <CodeInline>aria-checked</CodeInline>와 함께 사용</td></tr>
            <tr><td>스크롤바</td><td><CodeInline>role=&quot;scrollbar&quot;</CodeInline></td><td>영역 내의 내용 스크롤을 제어하는 그래픽 객체</td></tr>
            <tr><td>상태표시줄</td><td><CodeInline>role=&quot;status&quot;</CodeInline></td><td>사용자에게 권고 정보를 제공</td></tr>
            <tr><td>Timer</td><td><CodeInline>role=&quot;timer&quot;</CodeInline></td><td>경과 시간 또는 남은 시간을 나타내는 라이브 영역</td></tr>
            <tr><td>Marquee</td><td><CodeInline>role=&quot;marquee&quot;</CodeInline></td><td>중요하지 않은 정보가 자주 변경되는 라이브 영역</td></tr>
            <tr><td>검색</td><td><CodeInline>role=&quot;search&quot;</CodeInline></td><td>검색 기능</td></tr>
            <tr><td>검색상자</td><td><CodeInline>role=&quot;searchbox&quot;</CodeInline></td><td>검색 기준을 지정하기 위한 텍스트 상자</td></tr>
            <tr><td>경고 메세지</td><td><CodeInline>role=&quot;alert&quot;</CodeInline></td><td>사용자에게 경고 메시지를 전달</td></tr>
            <tr><td>경고 대화상자</td><td><CodeInline>role=&quot;alertdialog&quot;</CodeInline></td><td>경고 메시지가 들어있는 대화 상자, 초기 포커스 이동</td></tr>
            <tr><td>배너</td><td><CodeInline>role=&quot;banner&quot;</CodeInline></td><td>사이트 중심 콘텐츠가 포함된 배너영역</td></tr>
            <tr><td>수학 표현식</td><td><CodeInline>role=&quot;math&quot;</CodeInline></td><td>수학 표현식을 나타내는 내용</td></tr>
            <tr><td>정적 목차</td><td><CodeInline>role=&quot;directory&quot;</CodeInline></td><td>그룹 구성원에 대한 참조 목록</td></tr>
            <tr><td>기사목록</td><td><CodeInline>role=&quot;feed&quot;</CodeInline></td><td>스크롤 가능한 기사 목록</td></tr>
            <tr><td>문서</td><td><CodeInline>role=&quot;document&quot;</CodeInline></td><td>보조 기술 사용자가 읽기 모드로 탐색할 수 있는 콘텐츠</td></tr>

            <tr><td rowSpan={12}>기타</td><td>명령</td><td><CodeInline>role=&quot;command&quot;</CodeInline></td><td>입력 데이터를 수신하지 않는 위젯 형태</td></tr>
            <tr><td>Composite</td><td><CodeInline>role=&quot;composite&quot;</CodeInline></td><td>탐색 가능한 자손을 포함할 수 있는 위젯</td></tr>
            <tr><td>Log</td><td><CodeInline>role=&quot;log&quot;</CodeInline></td><td>새 정보가 추가되고 오래된 정보가 사라질 수 있는 라이브 영역</td></tr>
            <tr><td>Roletype</td><td><CodeInline>role=&quot;roletype&quot;</CodeInline></td><td>인스턴스를 이해하고 작동시키는 데 사용할 수 있는 개념</td></tr>
            <tr><td>어플리케이션</td><td><CodeInline>role=&quot;application&quot;</CodeInline></td><td>웹 애플리케이션 영역</td></tr>
            <tr><td>없음</td><td><CodeInline>role=&quot;none&quot;</CodeInline></td><td>내제된 원시적 역할을 매핑시키지 않음</td></tr>
            <tr><td>그룹</td><td><CodeInline>role=&quot;group&quot;</CodeInline></td><td>페이지 요약이나 목차에 포함되지 않는 UI 개체 집합</td></tr>
            <tr><td>노트</td><td><CodeInline>role=&quot;note&quot;</CodeInline></td><td>자원의 주요 내용을 보조하는 부분</td></tr>
            <tr><td>구조</td><td><CodeInline>role=&quot;structure&quot;</CodeInline></td><td>문서 구조 요소</td></tr>
            <tr><td>위젯</td><td><CodeInline>role=&quot;widget&quot;</CodeInline></td><td>GUI의 대화형 구성 요소</td></tr>
            <tr><td>Window</td><td><CodeInline>role=&quot;window&quot;</CodeInline></td><td>브라우저 또는 응용 프로그램 창</td></tr>
            <tr><td>Landmark</td><td><CodeInline>role=&quot;landmark&quot;</CodeInline></td><td>페이지의 주요 랜드마크 영역</td></tr>
          </tbody>
        </Table>
      </Section>

      <Section title="ARIA Properties 상세 레퍼런스" id="properties-detail">
        <Table>
          <colgroup>
            <col style={{ width: "12%" }} />
            <col style={{ width: "20%" }} />
            <col style={{ width: "23%" }} />
            <col style={{ width: "45%" }} />
          </colgroup>
          <thead>
            <tr><th>분류</th><th>구분</th><th>이름</th><th>설명</th></tr>
          </thead>
          <tbody>
            <tr><td rowSpan={15}>Global</td><td>변경 알림</td><td><CodeInline>aria-atomic</CodeInline></td><td><CodeInline>true</CodeInline> 또는 <CodeInline>false</CodeInline>. 기본값은 <CodeInline>false</CodeInline></td></tr>
            <tr><td>컨트롤</td><td><CodeInline>aria-controls</CodeInline></td><td>제어할 요소의 ID 값을 입력</td></tr>
            <tr><td>서술 참조</td><td><CodeInline>aria-describedby</CodeInline></td><td>참조할 요소의 ID 값을 입력</td></tr>
            <tr><td>상세 참조</td><td><CodeInline>aria-details</CodeInline></td><td>참조할 요소의 ID 값을 입력</td></tr>
            <tr><td>읽기흐름 참조</td><td><CodeInline>aria-flowto</CodeInline></td><td>다중 참조할 요소의 ID 값을 읽어줄 순서대로 입력</td></tr>
            <tr><td>오류메시지 참조</td><td><CodeInline>aria-errormessage</CodeInline></td><td>참조할 요소의 ID 값을 입력</td></tr>
            <tr><td>팝업 존재여부</td><td><CodeInline>aria-haspopup</CodeInline></td><td>존재하는 경우 <CodeInline>true</CodeInline></td></tr>
            <tr><td>단축키 설명</td><td><CodeInline>aria-keyshortcuts</CodeInline></td><td>구현된 단축키를 입력. 다중입력 가능</td></tr>
            <tr><td>레이블</td><td><CodeInline>aria-label</CodeInline></td><td>문자열 값을 입력</td></tr>
            <tr><td>레이블 참조</td><td><CodeInline>aria-labelledby</CodeInline></td><td>참조할 요소의 ID 값을 입력</td></tr>
            <tr><td>소유</td><td><CodeInline>aria-owns</CodeInline></td><td>직계 자식이 아닌 요소를 포함하여 자식 개체의 목록 설정. ID 값을 입력</td></tr>
            <tr><td>업데이트 요소</td><td><CodeInline>aria-live</CodeInline></td><td><CodeInline>polite</CodeInline> : 현재 음성 후 읽어줌 / <CodeInline>off</CodeInline> : 알리지 않음 / <CodeInline>assertive</CodeInline> : 즉시 알림</td></tr>
            <tr><td>관련 설정</td><td><CodeInline>aria-relevant</CodeInline></td><td><CodeInline>additions</CodeInline> / <CodeInline>additions text</CodeInline> / <CodeInline>all</CodeInline> / <CodeInline>removals</CodeInline> / <CodeInline>text</CodeInline></td></tr>
            <tr><td>역할설명</td><td><CodeInline>aria-roledescription</CodeInline></td><td>역할설명을 입력</td></tr>
            <tr><td>현재 항목</td><td><CodeInline>aria-current</CodeInline></td><td><CodeInline>page</CodeInline> / <CodeInline>step</CodeInline> / <CodeInline>location</CodeInline> / <CodeInline>date</CodeInline> / <CodeInline>time</CodeInline> / <CodeInline>true</CodeInline></td></tr>

            <tr><td rowSpan={16}>Widget</td><td>자동 완성</td><td><CodeInline>aria-autocomplete</CodeInline></td><td><CodeInline>none</CodeInline> / <CodeInline>inline</CodeInline> / <CodeInline>list</CodeInline> / <CodeInline>both</CodeInline></td></tr>
            <tr><td>계층 수준</td><td><CodeInline>aria-level</CodeInline></td><td>목차와 같은 단계를 입력 (<CodeInline>role=&quot;heading&quot;</CodeInline> 시 사용)</td></tr>
            <tr><td>대화상자 확인</td><td><CodeInline>aria-modal</CodeInline></td><td>모달인 경우 <CodeInline>true</CodeInline></td></tr>
            <tr><td>멀티라인</td><td><CodeInline>aria-multiline</CodeInline></td><td>여러줄인 경우 <CodeInline>true</CodeInline> (<CodeInline>role=&quot;textbox&quot;</CodeInline> 시 사용)</td></tr>
            <tr><td>다중선택</td><td><CodeInline>aria-multiselectable</CodeInline></td><td><CodeInline>true</CodeInline> 다중 선택 / <CodeInline>false</CodeInline> 하나만 선택</td></tr>
            <tr><td>방향</td><td><CodeInline>aria-orientation</CodeInline></td><td><CodeInline>horizontal</CodeInline> / <CodeInline>vertical</CodeInline></td></tr>
            <tr><td>Placeholder</td><td><CodeInline>aria-placeholder</CodeInline></td><td><CodeInline>placeholder</CodeInline> 속성과 동일하게 사용</td></tr>
            <tr><td>읽기전용</td><td><CodeInline>aria-readonly</CodeInline></td><td>읽기전용인 경우 <CodeInline>true</CodeInline></td></tr>
            <tr><td>필수입력</td><td><CodeInline>aria-required</CodeInline></td><td>필수입력인 경우 <CodeInline>true</CodeInline></td></tr>
            <tr><td>정렬</td><td><CodeInline>aria-sort</CodeInline></td><td><CodeInline>ascending</CodeInline> / <CodeInline>descending</CodeInline> / <CodeInline>none</CodeInline> / <CodeInline>other</CodeInline></td></tr>
            <tr><td>최대값</td><td><CodeInline>aria-valuemax</CodeInline></td><td>알려진 최대 값을 입력</td></tr>
            <tr><td>최소값</td><td><CodeInline>aria-valuemin</CodeInline></td><td>알려진 최소 값을 입력</td></tr>
            <tr><td>현재값</td><td><CodeInline>aria-valuenow</CodeInline></td><td>현재값을 입력</td></tr>
            <tr><td>텍스트값</td><td><CodeInline>aria-valuetext</CodeInline></td><td><CodeInline>aria-valuenow</CodeInline>를 읽을 수 있는 텍스트 대안 정의</td></tr>
            <tr><td>오류메시지 참조</td><td><CodeInline>aria-errormessage</CodeInline></td><td>참조할 요소의 ID 값을 입력</td></tr>
            <tr><td>팝업 존재여부</td><td><CodeInline>aria-haspopup</CodeInline></td><td>존재하는 경우 <CodeInline>true</CodeInline></td></tr>

            <tr><td rowSpan={3}>Live Region</td><td>변경 알림</td><td><CodeInline>aria-atomic</CodeInline></td><td><CodeInline>true</CodeInline> 또는 <CodeInline>false</CodeInline>. 기본값은 <CodeInline>false</CodeInline></td></tr>
            <tr><td>업데이트 요소</td><td><CodeInline>aria-live</CodeInline></td><td><CodeInline>polite</CodeInline> / <CodeInline>off</CodeInline> / <CodeInline>assertive</CodeInline></td></tr>
            <tr><td>관련 설정</td><td><CodeInline>aria-relevant</CodeInline></td><td><CodeInline>additions</CodeInline> / <CodeInline>additions text</CodeInline> / <CodeInline>all</CodeInline> / <CodeInline>removals</CodeInline> / <CodeInline>text</CodeInline></td></tr>

            <tr><td rowSpan={16}>Relationship</td><td>활성화 된 자손 식별</td><td><CodeInline>aria-activedescendant</CodeInline></td><td>활성화된 요소의 ID 값</td></tr>
            <tr><td>총 열 개수</td><td><CodeInline>aria-colcount</CodeInline></td><td>총 합계를 입력</td></tr>
            <tr><td>열 위치</td><td><CodeInline>aria-colindex</CodeInline></td><td>열 위치를 입력</td></tr>
            <tr><td>열 병합</td><td><CodeInline>aria-colspan</CodeInline></td><td>병합된 열 수를 입력</td></tr>
            <tr><td>컨트롤</td><td><CodeInline>aria-controls</CodeInline></td><td>제어할 요소의 ID 값을 입력</td></tr>
            <tr><td>서술 참조</td><td><CodeInline>aria-describedby</CodeInline></td><td>참조할 요소의 ID 값을 입력</td></tr>
            <tr><td>상세 참조</td><td><CodeInline>aria-details</CodeInline></td><td>참조할 요소의 ID 값을 입력</td></tr>
            <tr><td>읽기흐름 참조</td><td><CodeInline>aria-flowto</CodeInline></td><td>다중 참조할 요소의 ID 값을 순서대로 입력</td></tr>
            <tr><td>오류메시지 참조</td><td><CodeInline>aria-errormessage</CodeInline></td><td>참조할 요소의 ID 값을 입력</td></tr>
            <tr><td>레이블 참조</td><td><CodeInline>aria-labelledby</CodeInline></td><td>참조할 요소의 ID 값을 입력</td></tr>
            <tr><td>소유</td><td><CodeInline>aria-owns</CodeInline></td><td>직계 자식이 아닌 요소 포함 자식 개체 목록. ID 값을 입력</td></tr>
            <tr><td>번호 및 위치</td><td><CodeInline>aria-posinset</CodeInline></td><td>목록 항목의 현재 위치 번호를 설정</td></tr>
            <tr><td>총 행 개수</td><td><CodeInline>aria-rowcount</CodeInline></td><td>총 합계를 입력</td></tr>
            <tr><td>행 위치</td><td><CodeInline>aria-rowindex</CodeInline></td><td>행 위치를 입력</td></tr>
            <tr><td>행 병합</td><td><CodeInline>aria-rowspan</CodeInline></td><td>병합된 행 수를 입력</td></tr>
            <tr><td>현재 세트의 크기</td><td><CodeInline>aria-setsize</CodeInline></td><td>현재 목록 항목 또는 트리 항목 세트의 수를 설정</td></tr>
          </tbody>
        </Table>
      </Section>
    </>
  );
}
