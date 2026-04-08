import PageTitle from "@/app/components/ui/PageTitle";
import Section from "@/app/components/ui/Section";
import Table, { TableEm } from "@/app/components/ui/Table";

export default function BasicProcessPage() {
  return (
    <>
      <PageTitle badge="Basic">프로세스</PageTitle>

      <Section title="프로젝트 진행 프로세스">
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
              <td>스토리보드 검토</td>
              <td>
                <TableEm>기획서 내 UI/UX 검토</TableEm>
                <TableEm>인터랙션 정의 확인</TableEm>
                <TableEm>기존 컴포넌트 재사용 가능 여부 확인</TableEm>
              </td>
              <td>기획 의도를 정확하게 파악하여 기술적으로 구현 가능한 방향을 제시</td>
            </tr>
            <tr>
              <td>웹 리소스 구조화</td>
              <td>
                <TableEm>폴더/파일 구조 생성</TableEm>
                <TableEm>공통 모듈 정의 (변수, 믹스인, 리셋)</TableEm>
                <TableEm>네이밍 컨벤션 적용</TableEm>
              </td>
              <td>확장성과 유지보수를 고려한 구조 설계</td>
            </tr>
            <tr>
              <td>시안 검토</td>
              <td>
                <TableEm>디자인 시안 확인 및 가이드 요청</TableEm>
                <TableEm>반응형 디자인 브레이크포인트 정의</TableEm>
                <TableEm>애니메이션 및 트랜지션 정의</TableEm>
              </td>
              <td>디자이너와 협업하여 구현 세부사항 조율</td>
            </tr>
            <tr>
              <td>퍼블리싱</td>
              <td>
                <TableEm>시맨틱 HTML 마크업</TableEm>
                <TableEm>CSS/SCSS 스타일링</TableEm>
                <TableEm>웹접근성 적용 (WAI-ARIA)</TableEm>
                <TableEm>크로스 브라우징 테스트</TableEm>
              </td>
              <td>웹 표준 준수 및 접근성 가이드라인 충족</td>
            </tr>
            <tr>
              <td>산출물 최종 확인</td>
              <td>
                <TableEm>코드 리뷰</TableEm>
                <TableEm>QA 및 버그 수정</TableEm>
                <TableEm>성능 최적화 (이미지, 번들 사이즈)</TableEm>
                <TableEm>접근성 검수</TableEm>
              </td>
              <td>품질 기준에 맞는 최종 산출물 전달</td>
            </tr>
          </tbody>
        </Table>
      </Section>
    </>
  );
}
