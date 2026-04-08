import PageTitle from "@/app/components/ui/PageTitle";
import Section, { SubTitle, SectionDesc } from "@/app/components/ui/Section";
import Table from "@/app/components/ui/Table";
import tableStyles from "@/app/styles/components/ui/Table.module.scss";

export default function AccessibilityChecklistPage() {
  return (
    <>
      <PageTitle badge="Accessibility">역할별 체크리스트</PageTitle>

      <Section title="기획자 (Planner)" id="planner">
        <SectionDesc>
          기획 단계에서 웹접근성을 고려하여 모든 사용자가 동등하게 서비스를 이용할 수 있도록 설계합니다.
        </SectionDesc>
        <Table>
          <thead>
            <tr>
              <th>점검 항목</th>
              <th>상세 내용</th>
              <th className={tableStyles.center}>체크</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>페이지 타이틀</td>
              <td>각 페이지마다 고유하고 의미 있는 제목을 정의했는가?</td>
              <td className={tableStyles.center}>&#9744;</td>
            </tr>
            <tr>
              <td>콘텐츠 구조</td>
              <td>콘텐츠의 논리적 순서와 제목 계층 구조를 정의했는가?</td>
              <td className={tableStyles.center}>&#9744;</td>
            </tr>
            <tr>
              <td>링크 텍스트</td>
              <td>링크의 목적을 명확하게 알 수 있는 텍스트를 제공했는가?</td>
              <td className={tableStyles.center}>&#9744;</td>
            </tr>
            <tr>
              <td>이미지 대체 텍스트</td>
              <td>모든 이미지에 대한 대체 텍스트 가이드를 제공했는가?</td>
              <td className={tableStyles.center}>&#9744;</td>
            </tr>
            <tr>
              <td>멀티미디어 대체 수단</td>
              <td>동영상에 자막, 음성에 텍스트 대체 수단을 정의했는가?</td>
              <td className={tableStyles.center}>&#9744;</td>
            </tr>
            <tr>
              <td>움직이는 콘텐츠</td>
              <td>자동 재생 콘텐츠에 정지/일시정지 기능을 정의했는가?</td>
              <td className={tableStyles.center}>&#9744;</td>
            </tr>
            <tr>
              <td>표 구성</td>
              <td>데이터 테이블의 제목 셀과 내용 셀을 구분하여 정의했는가?</td>
              <td className={tableStyles.center}>&#9744;</td>
            </tr>
            <tr>
              <td>마우스 오버 콘텐츠</td>
              <td>호버 시 나타나는 콘텐츠에 대한 키보드 접근 방법을 정의했는가?</td>
              <td className={tableStyles.center}>&#9744;</td>
            </tr>
            <tr>
              <td>자동 롤링</td>
              <td>자동 롤링 배너에 정지 및 이전/다음 기능을 정의했는가?</td>
              <td className={tableStyles.center}>&#9744;</td>
            </tr>
            <tr>
              <td>팝업</td>
              <td>팝업의 포커스 이동과 닫기 기능을 정의했는가?</td>
              <td className={tableStyles.center}>&#9744;</td>
            </tr>
            <tr>
              <td>입력 폼</td>
              <td>폼 요소의 레이블, 에러 메시지, 필수 항목 표시를 정의했는가?</td>
              <td className={tableStyles.center}>&#9744;</td>
            </tr>
          </tbody>
        </Table>
      </Section>

      <Section title="디자이너 (Designer)" id="designer">
        <SectionDesc>
          시각적 디자인에서 웹접근성을 보장하기 위한 점검 항목입니다.
        </SectionDesc>
        <Table>
          <thead>
            <tr>
              <th>점검 항목</th>
              <th>상세 내용</th>
              <th className={tableStyles.center}>체크</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>명도 대비</td>
              <td>텍스트와 배경 간 4.5:1 이상의 명도 대비를 유지하는가?</td>
              <td className={tableStyles.center}>&#9744;</td>
            </tr>
            <tr>
              <td>색상 의존 정보</td>
              <td>정보 전달 시 색상 외에 다른 시각적 구분 수단(아이콘, 텍스트 등)을 제공하는가?</td>
              <td className={tableStyles.center}>&#9744;</td>
            </tr>
            <tr>
              <td>포커스 표시</td>
              <td>키보드 포커스 시 시각적으로 구분 가능한 스타일을 정의했는가?</td>
              <td className={tableStyles.center}>&#9744;</td>
            </tr>
            <tr>
              <td>텍스트 크기</td>
              <td>본문 텍스트가 최소 14px 이상이며, 200% 확대 시에도 내용이 유지되는가?</td>
              <td className={tableStyles.center}>&#9744;</td>
            </tr>
            <tr>
              <td>터치 영역</td>
              <td>모바일 터치 영역이 최소 44x44px 이상인가?</td>
              <td className={tableStyles.center}>&#9744;</td>
            </tr>
            <tr>
              <td>아이콘 텍스트</td>
              <td>아이콘만으로 구성된 버튼에 대체 텍스트 가이드를 제공했는가?</td>
              <td className={tableStyles.center}>&#9744;</td>
            </tr>
            <tr>
              <td>반응형 레이아웃</td>
              <td>다양한 화면 크기에서 콘텐츠가 잘리거나 겹치지 않는가?</td>
              <td className={tableStyles.center}>&#9744;</td>
            </tr>
          </tbody>
        </Table>
      </Section>

      <Section title="퍼블리셔 (Markup Developer)" id="publisher">
        <SubTitle>인식의 용이성</SubTitle>
        <Table>
          <thead>
            <tr>
              <th>점검 항목</th>
              <th>상세 내용</th>
              <th className={tableStyles.center}>체크</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>대체 텍스트</td>
              <td>모든 이미지에 적절한 alt 속성을 작성했는가?</td>
              <td className={tableStyles.center}>&#9744;</td>
            </tr>
            <tr>
              <td>시맨틱 마크업</td>
              <td>적절한 HTML5 시맨틱 요소를 사용했는가?</td>
              <td className={tableStyles.center}>&#9744;</td>
            </tr>
            <tr>
              <td>제목 계층</td>
              <td>h1~h6 제목 태그를 논리적 순서로 사용했는가?</td>
              <td className={tableStyles.center}>&#9744;</td>
            </tr>
            <tr>
              <td>테이블 마크업</td>
              <td>데이터 테이블에 th, scope, caption을 적절히 사용했는가?</td>
              <td className={tableStyles.center}>&#9744;</td>
            </tr>
            <tr>
              <td>숨김 텍스트</td>
              <td>스크린 리더용 숨김 텍스트를 clip 방식으로 처리했는가?</td>
              <td className={tableStyles.center}>&#9744;</td>
            </tr>
          </tbody>
        </Table>

        <SubTitle>운용의 용이성</SubTitle>
        <Table>
          <thead>
            <tr>
              <th>점검 항목</th>
              <th>상세 내용</th>
              <th className={tableStyles.center}>체크</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>키보드 접근</td>
              <td>모든 인터랙티브 요소에 키보드로 접근 가능한가?</td>
              <td className={tableStyles.center}>&#9744;</td>
            </tr>
            <tr>
              <td>포커스 순서</td>
              <td>탭 순서가 논리적이며 시각적 순서와 일치하는가?</td>
              <td className={tableStyles.center}>&#9744;</td>
            </tr>
            <tr>
              <td>건너뛰기 링크</td>
              <td>Skip Navigation을 제공했는가?</td>
              <td className={tableStyles.center}>&#9744;</td>
            </tr>
            <tr>
              <td>포커스 트래핑</td>
              <td>모달 내에서 포커스가 순환되도록 구현했는가?</td>
              <td className={tableStyles.center}>&#9744;</td>
            </tr>
          </tbody>
        </Table>

        <SubTitle>이해의 용이성</SubTitle>
        <Table>
          <thead>
            <tr>
              <th>점검 항목</th>
              <th>상세 내용</th>
              <th className={tableStyles.center}>체크</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>폼 레이블</td>
              <td>모든 폼 요소에 label을 연결했는가?</td>
              <td className={tableStyles.center}>&#9744;</td>
            </tr>
            <tr>
              <td>에러 안내</td>
              <td>입력 오류 시 명확한 안내 메시지를 제공했는가?</td>
              <td className={tableStyles.center}>&#9744;</td>
            </tr>
            <tr>
              <td>언어 지정</td>
              <td>html 태그에 lang 속성을 지정했는가?</td>
              <td className={tableStyles.center}>&#9744;</td>
            </tr>
          </tbody>
        </Table>
      </Section>

      <Section title="개발자 (Developer)" id="developer">
        <Table>
          <thead>
            <tr>
              <th>점검 항목</th>
              <th>상세 내용</th>
              <th className={tableStyles.center}>체크</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>동적 콘텐츠 알림</td>
              <td>AJAX로 변경된 콘텐츠를 aria-live로 알리고 있는가?</td>
              <td className={tableStyles.center}>&#9744;</td>
            </tr>
            <tr>
              <td>SPA 페이지 전환</td>
              <td>페이지 전환 시 포커스 이동과 타이틀 변경을 처리하는가?</td>
              <td className={tableStyles.center}>&#9744;</td>
            </tr>
            <tr>
              <td>ARIA 상태 관리</td>
              <td>동적 UI 상태 변경 시 ARIA 상태값을 업데이트하는가?</td>
              <td className={tableStyles.center}>&#9744;</td>
            </tr>
            <tr>
              <td>키보드 이벤트</td>
              <td>커스텀 컴포넌트에 키보드 이벤트 핸들러를 구현했는가?</td>
              <td className={tableStyles.center}>&#9744;</td>
            </tr>
            <tr>
              <td>에러 처리</td>
              <td>폼 유효성 검사 실패 시 첫 번째 오류 필드로 포커스를 이동하는가?</td>
              <td className={tableStyles.center}>&#9744;</td>
            </tr>
            <tr>
              <td>타임아웃</td>
              <td>세션 만료 등 시간 제한 기능에 연장/해제 옵션을 제공하는가?</td>
              <td className={tableStyles.center}>&#9744;</td>
            </tr>
          </tbody>
        </Table>
      </Section>
    </>
  );
}
