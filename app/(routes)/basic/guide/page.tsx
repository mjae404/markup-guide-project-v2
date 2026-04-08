import PageTitle from "@/app/components/ui/PageTitle";
import Section, { SubTitle } from "@/app/components/ui/Section";
import Table, { TableEm } from "@/app/components/ui/Table";
import { UnorderedList } from "@/app/components/ui/List";

export default function BasicGuidePage() {
  return (
    <>
      <PageTitle badge="Basic">기본 정책</PageTitle>

      <Section title="프로젝트 환경" id="environment">
        <Table variant="horizontal">
          <colgroup>
            <col style={{ width: "20%" }} />
            <col style={{ width: "30%" }} />
            <col style={{ width: "50%" }} />
          </colgroup>
          <thead>
            <tr>
              <th>분류</th>
              <th>항목</th>
              <th>비고</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowSpan={3}>기술 스펙</th>
              <td>HTML5 / CSS3</td>
              <td>W3C 웹 표준 준수</td>
            </tr>
            <tr>
              <td>JavaScript (ES6+)</td>
              <td>ECMAScript 2015 이상</td>
            </tr>
            <tr>
              <td>React / Next.js</td>
              <td>컴포넌트 기반 UI 개발</td>
            </tr>
            <tr>
              <th>인코딩</th>
              <td>UTF-8</td>
              <td>다국어 지원을 위한 유니코드 인코딩</td>
            </tr>
            <tr>
              <th>반응형</th>
              <td>반응형 웹</td>
              <td>모바일, 태블릿, 데스크톱 대응</td>
            </tr>
            <tr>
              <th>크로스 브라우징</th>
              <td>Chrome, Safari, Firefox, Edge</td>
              <td>최신 2개 버전 이상 지원</td>
            </tr>
          </tbody>
        </Table>
      </Section>

      <Section title="파일 및 폴더 관리 규칙" id="file-rules">
        <Table>
          <colgroup>
            <col style={{ width: "15%" }} />
            <col style={{ width: "25%" }} />
            <col style={{ width: "30%" }} />
            <col style={{ width: "30%" }} />
          </colgroup>
          <thead>
            <tr>
              <th>분류</th>
              <th>위치</th>
              <th>파일명 규칙</th>
              <th>비고</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>폰트</td>
              <td>public/fonts/</td>
              <td>
                <TableEm>font-name.woff2</TableEm>
              </td>
              <td>woff2 형식 권장, 서브셋 폰트 사용</td>
            </tr>
            <tr>
              <td>스타일</td>
              <td>app/styles/</td>
              <td>
                <TableEm>_variable.scss</TableEm>
                <TableEm>_mixin.scss</TableEm>
                <TableEm>Component.module.scss</TableEm>
              </td>
              <td>SCSS 모듈 방식 사용, 변수/믹스인 공통 관리</td>
            </tr>
            <tr>
              <td>컴포넌트</td>
              <td>app/components/</td>
              <td>
                <TableEm>ComponentName.tsx</TableEm>
                <TableEm>ComponentName.module.scss</TableEm>
              </td>
              <td>PascalCase 사용, 컴포넌트와 스타일 동일 위치</td>
            </tr>
            <tr>
              <td>이미지</td>
              <td>public/images/</td>
              <td>
                <TableEm>icon_name.svg</TableEm>
                <TableEm>img_section_01.webp</TableEm>
              </td>
              <td>WebP 형식 우선, SVG 아이콘 권장</td>
            </tr>
            <tr>
              <td>레이아웃</td>
              <td>app/(routes)/</td>
              <td>
                <TableEm>layout.tsx</TableEm>
                <TableEm>page.tsx</TableEm>
              </td>
              <td>Next.js App Router 파일 규칙 준수</td>
            </tr>
          </tbody>
        </Table>
      </Section>

      <Section title="프로젝트 프로세스" id="process">
        <SubTitle>개발 프로세스 5단계</SubTitle>
        <Table>
          <colgroup>
            <col style={{ width: "20%" }} />
            <col style={{ width: "40%" }} />
            <col style={{ width: "40%" }} />
          </colgroup>
          <thead>
            <tr>
              <th>작업 단계</th>
              <th>기술 구현 항목</th>
              <th>구현 항목별 코멘트</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1. 스토리보드 검토</td>
              <td>
                <TableEm>UI/UX 분석 및 컴포넌트 도출</TableEm>
                <TableEm>인터랙션 정의 확인</TableEm>
              </td>
              <td>기획 의도 파악 후 기술적 구현 가능 여부 검토</td>
            </tr>
            <tr>
              <td>2. 웹 리소스 구조화</td>
              <td>
                <TableEm>폴더 구조 설계 및 파일 생성</TableEm>
                <TableEm>공통 스타일 및 변수 정의</TableEm>
              </td>
              <td>재사용 가능한 구조로 설계</td>
            </tr>
            <tr>
              <td>3. 시안 검토</td>
              <td>
                <TableEm>디자인 시안과 구현물 비교</TableEm>
                <TableEm>반응형 브레이크포인트 확인</TableEm>
              </td>
              <td>Pixel Perfect 수준의 UI 구현 목표</td>
            </tr>
            <tr>
              <td>4. 퍼블리싱</td>
              <td>
                <TableEm>시맨틱 마크업 작업</TableEm>
                <TableEm>웹접근성 적용</TableEm>
                <TableEm>크로스 브라우징 테스트</TableEm>
              </td>
              <td>웹 표준 및 접근성 가이드라인 준수</td>
            </tr>
            <tr>
              <td>5. 산출물 최종 확인</td>
              <td>
                <TableEm>코드 리뷰 및 QA</TableEm>
                <TableEm>성능 최적화 점검</TableEm>
              </td>
              <td>Lighthouse 기준 성능 점수 확인</td>
            </tr>
          </tbody>
        </Table>
      </Section>
    </>
  );
}
