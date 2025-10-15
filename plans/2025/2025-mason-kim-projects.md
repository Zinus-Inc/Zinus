## 📌 Mason Kim 진행 중 프로젝트 요약 (업데이트 반영)

### 1. 🛒 E-Commerce 플랫폼 개선 프로젝트

#### ✅ Keetsa Shopify Theme 마이그레이션 (주요 프로젝트)
- 목표: 기존 커스텀 Shopify 테마를 → 공식 Dawn 테마로 전환
- 마감 기한: 2026년 2월 말
- 담당자: Mason Kim
- 제출 완료: Keetsa 마이그레이션 프로젝트 계획 보고서 (리더십 검토 완료)

##### 📄 보고서
- 상세 내용은 링크된 문서를 참고해 주세요: [Keetsa Shopify Dawn Theme Migration Plan (EN)](./2025-keetsa-dawn-migration-plan-en.md)

---

### 2. 🤖 AI 기반 자동화 프로젝트
- i-Accounting Helper 프로젝트
  - 목표: 기존 수작업 중심의 invoice 처리 시간을 70% 이상 단축, 90% 이상의 정확도·2% 미만의 시스템 에러율로 휴먼 에러 최소화
  - 성공 시, 임직원이 제출한 invoice 승인 요청에 대해 리더십이 쉽고 정확하게 의사결정할 수 있도록 지원하여 승인 절차를 속도감 있게 개선
  - 최종적으로는 I-Accounting 프론트엔드 시스템 없이도, 모든 invoice 처리를 본 앱에 AI 기반 자동화로 일원화하는 것을 지향
  - 기술적 구현: OpenAI + OCR 기반의 GL 코드 자동 추천 및 반복 인보이스 분개 프로세스 자동화
- AI Chatbot 개선 프로젝트
  - 기존 Netomi AI 챗봇에서 Kustomer AI 챗봇으로의 교체 작업을 준비 중
  - 실제 운영 환경이 아닌 별도의 개발/테스트 환경(Mellow 브랜드 Shopify E-Commerce 언퍼블리시드 테마 등)에서 양쪽 챗봇을 동일하고 공정한 조건 하에서 비교 테스트를 진행할 예정
  - 비교 평가의 가장 중요한 요소는 Netomi AI와 Kustomer AI 챗봇이 최대한 평등한 조건(유사한 환경 및 동일한 테스트 케이스, 트래픽, 시나리오 등)에서 분석될 수 있도록 사전에 세팅을 충분히 준비하고, 그 결과를 정확히 측정/분석하는 것임을 강조
  - Mason Kim과 Joshua가 테스트 환경 구축 및 성능 비교(주요 지표: CSAT, 분류 정확도 등) 분석을 주도하며, 결과를 리더십팀에 투명하게 공유하여 최종 도입 챗봇 선정에 객관적 판단자료를 제공할 계획

---

### 3. 🔧 DevOps & 인프라
- Shopify 테마 자동 배포 파이프라인 구축
- AWS Lightsail, S3, Cloudflare로 재구성
- 도메인 마이그레이션 및 이메일 보안 구성 (DMARC/SPF)

---

### 4. 📊 BI 대시보드 데이터 파이프라인
- Shopify/Google Ads → BigQuery 연계 자동화
- Analytics 팀 로직 기반 필터링 구현
- GA4, Klaviyo, Meta Ads 통합

---

### 5. 🔐 보안 및 컴플라이언스
- 시큐어 코딩 가이드라인 수립
- Disaster Recovery 정책 정리 (GCP 기반)
- OWASP 기반 취약점 스캐닝 자동화

---

### 다음 단계 (Action Items)
- Keetsa 프로젝트 계획 보고서 초안 작성 및 내부 리뷰
- Dawn 테마 적용 범위/우선순위 확정
- Metafield 스키마 정의 및 이전 스크립트 설계
- 접근성/성능/SEO 측정 기준 합의

---

### 부록 A: Keetsa 마이그레이션 프로젝트 계획 보고서 (초안 목차)
1. 개요/배경
2. 목표 및 성공 기준(KPI)
3. 범위 정의 (In/Out of scope)
4. 일정 및 마일스톤
5. 기술 설계
   - 정보구조(IA) 및 템플릿 맵
   - Liquid/Section 구조 설계
   - 앱/서드파티 통합 전략
   - Metafield/데이터 스키마
6. 데이터 이전 계획
   - 이전 대상 및 우선순위
   - 자동화 스크립트/도구
   - 검증 및 롤백 전략
7. 접근성/성능/SEO
   - ADA/접근성 테스트 계획
   - 성능 목표(LCP/CLS/TTI 등)
   - SEO 유지 전략(URL, 리디렉션, 메타 태그)
8. QA 및 릴리즈 전략
   - 크로스브라우저/모바일 QA
   - 스테이징/프로덕션 배포 전략
   - 런칭 후 모니터링
9. 리스크 및 완화
10. 요구 리소스/예산
11. 부록
