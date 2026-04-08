import type { Metadata } from "next";
import "./styles/globals.scss";

const SITE_URL = "http://guide.mjaedot.com";

export const metadata: Metadata = {
  title: "기본 프로젝트 웹퍼블리싱 마크업 가이드 문서",
  description: "일관된 코드 구조와 표준화된 HTML 작성 방식을 정의하여 협업 효율을 높이고, 유지보수성과 접근성을 고려한 웹 문서 작성 기준을 제공하기 위한 가이드 문서입니다.",
  authors: [{ name: "김민지" }],
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "기본 프로젝트 웹퍼블리싱 마크업 가이드 문서",
    description: "일관된 코드 구조와 표준화된 HTML 작성 방식을 정의하여 협업 효율을 높이고, 유지보수성과 접근성을 고려한 웹 문서 작성 기준을 제공하기 위한 가이드 문서입니다.",
    url: SITE_URL,
    siteName: "프로젝트 웹퍼블리싱 마크업 가이드",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "웹퍼블리싱 가이드",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
