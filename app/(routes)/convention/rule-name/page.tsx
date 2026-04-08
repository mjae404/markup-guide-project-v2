import PageTitle from "@/app/components/ui/PageTitle";
import Section, { SubTitle, SectionDesc } from "@/app/components/ui/Section";
import Table, { TableEm } from "@/app/components/ui/Table";
import { CodeInline } from "@/app/components/ui/CodeBlock";
import { UnorderedList } from "@/app/components/ui/List";

export default function RuleNamePage() {
  return (
    <>
      <PageTitle badge="Convention">네임 규칙</PageTitle>

      <Section title="표기법 유형" id="notation">
        <Table>
          <colgroup>
            <col style={{ width: "20%" }} />
            <col style={{ width: "25%" }} />
            <col style={{ width: "25%" }} />
            <col style={{ width: "30%" }} />
          </colgroup>
          <thead>
            <tr>
              <th>대상</th>
              <th>표기법</th>
              <th>예시</th>
              <th>비고</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ID</td>
              <td>snake_case</td>
              <td><CodeInline>user_name</CodeInline></td>
              <td>JavaScript 연동 시 사용</td>
            </tr>
            <tr>
              <td>Class</td>
              <td>kebab-case</td>
              <td><CodeInline>card-title</CodeInline></td>
              <td>스타일링 목적</td>
            </tr>
            <tr>
              <td>이미지</td>
              <td>snake_case + 일련번호</td>
              <td><CodeInline>img_banner_01.webp</CodeInline></td>
              <td>일련번호는 2자리 사용</td>
            </tr>
            <tr>
              <td>파일/폴더</td>
              <td>kebab-case</td>
              <td><CodeInline>rule-standard</CodeInline></td>
              <td>URL과 일관성 유지</td>
            </tr>
            <tr>
              <td>컴포넌트</td>
              <td>PascalCase</td>
              <td><CodeInline>PageTitle</CodeInline></td>
              <td>React 컴포넌트 컨벤션</td>
            </tr>
          </tbody>
        </Table>
      </Section>

      <Section title="클래스 선택자 예약어" id="reserved">
        <SectionDesc>
          일관된 클래스명 사용을 위해 아래 예약어를 기준으로 네이밍합니다.
        </SectionDesc>

        <SubTitle>레이아웃</SubTitle>
        <Table>
          <thead>
            <tr>
              <th>예약어</th>
              <th>설명</th>
              <th>사용 예시</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><CodeInline>header-</CodeInline></td>
              <td>헤더 영역</td>
              <td><CodeInline>header-nav</CodeInline>, <CodeInline>header-logo</CodeInline></td>
            </tr>
            <tr>
              <td><CodeInline>aside-</CodeInline></td>
              <td>사이드 영역</td>
              <td><CodeInline>aside-menu</CodeInline>, <CodeInline>aside-nav</CodeInline></td>
            </tr>
            <tr>
              <td><CodeInline>main-</CodeInline></td>
              <td>메인 콘텐츠 영역</td>
              <td><CodeInline>main-content</CodeInline>, <CodeInline>main-section</CodeInline></td>
            </tr>
            <tr>
              <td><CodeInline>footer-</CodeInline></td>
              <td>푸터 영역</td>
              <td><CodeInline>footer-info</CodeInline>, <CodeInline>footer-copyright</CodeInline></td>
            </tr>
          </tbody>
        </Table>

        <SubTitle>영역</SubTitle>
        <Table>
          <thead>
            <tr>
              <th>예약어</th>
              <th>설명</th>
              <th>사용 예시</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><CodeInline>-container</CodeInline></td>
              <td>최외곽 감싸는 영역</td>
              <td><CodeInline>card-container</CodeInline></td>
            </tr>
            <tr>
              <td><CodeInline>-wrap</CodeInline></td>
              <td>묶음 영역</td>
              <td><CodeInline>card-wrap</CodeInline></td>
            </tr>
            <tr>
              <td><CodeInline>-inner</CodeInline></td>
              <td>내부 영역</td>
              <td><CodeInline>card-inner</CodeInline></td>
            </tr>
          </tbody>
        </Table>

        <SubTitle>구조</SubTitle>
        <Table>
          <thead>
            <tr>
              <th>예약어</th>
              <th>설명</th>
              <th>사용 예시</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><CodeInline>-header</CodeInline></td>
              <td>컴포넌트 상단</td>
              <td><CodeInline>modal-header</CodeInline></td>
            </tr>
            <tr>
              <td><CodeInline>-contents</CodeInline></td>
              <td>컴포넌트 내용</td>
              <td><CodeInline>modal-contents</CodeInline></td>
            </tr>
            <tr>
              <td><CodeInline>-footer</CodeInline></td>
              <td>컴포넌트 하단</td>
              <td><CodeInline>modal-footer</CodeInline></td>
            </tr>
            <tr>
              <td><CodeInline>-title</CodeInline></td>
              <td>제목</td>
              <td><CodeInline>card-title</CodeInline></td>
            </tr>
            <tr>
              <td><CodeInline>-text</CodeInline></td>
              <td>텍스트</td>
              <td><CodeInline>card-text</CodeInline></td>
            </tr>
            <tr>
              <td><CodeInline>-desc</CodeInline></td>
              <td>설명</td>
              <td><CodeInline>card-desc</CodeInline></td>
            </tr>
            <tr>
              <td><CodeInline>-nav</CodeInline></td>
              <td>네비게이션</td>
              <td><CodeInline>aside-nav</CodeInline></td>
            </tr>
            <tr>
              <td><CodeInline>-menu</CodeInline></td>
              <td>메뉴</td>
              <td><CodeInline>header-menu</CodeInline></td>
            </tr>
            <tr>
              <td><CodeInline>-list</CodeInline></td>
              <td>목록</td>
              <td><CodeInline>card-list</CodeInline></td>
            </tr>
            <tr>
              <td><CodeInline>-item</CodeInline></td>
              <td>목록 항목</td>
              <td><CodeInline>card-item</CodeInline></td>
            </tr>
            <tr>
              <td><CodeInline>-link</CodeInline></td>
              <td>링크</td>
              <td><CodeInline>nav-link</CodeInline></td>
            </tr>
          </tbody>
        </Table>

        <SubTitle>크기 단위</SubTitle>
        <Table>
          <thead>
            <tr>
              <th>접미사</th>
              <th>크기</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><CodeInline>-xl</CodeInline></td>
              <td>Extra Large</td>
            </tr>
            <tr>
              <td><CodeInline>-lg</CodeInline></td>
              <td>Large</td>
            </tr>
            <tr>
              <td><CodeInline>-md</CodeInline></td>
              <td>Medium</td>
            </tr>
            <tr>
              <td><CodeInline>-sm</CodeInline></td>
              <td>Small</td>
            </tr>
            <tr>
              <td><CodeInline>-xs</CodeInline></td>
              <td>Extra Small</td>
            </tr>
          </tbody>
        </Table>

        <SubTitle>장식</SubTitle>
        <Table>
          <thead>
            <tr>
              <th>접미사</th>
              <th>설명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><CodeInline>-outline</CodeInline></td>
              <td>외곽선 스타일</td>
            </tr>
            <tr>
              <td><CodeInline>-underline</CodeInline></td>
              <td>밑줄 스타일</td>
            </tr>
          </tbody>
        </Table>
      </Section>
    </>
  );
}
