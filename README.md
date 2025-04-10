# 스트라바 매뉴얼 [DEPRECATED]

[![Deploy GitHub Pages](https://github.com/letsescape/strava-docs-kr/actions/workflows/gh-pages.yml/badge.svg)](https://github.com/letsescape/strava-docs-kr/actions/workflows/gh-pages.yml)

> ⚠️ 매뉴얼 데모 프로젝트는 더 이상 유지보수되지 않으며, 참고용으로만 제공됩니다.

## 프로젝트 소개

Strava API V3의 공식 문서를 한국어로 번역하여 제공하는 웹사이트입니다.  
크롤링 자동화 시스템 구축 전에 수동으로 데모를 진행하였으며, 현재는 더 이상 유지보수되지 않는 미사용 프로젝트입니다.

## 시작하기

### 로컬 개발 환경 설정

1. 저장소 클론:
   ```bash
   git clone https://github.com/letsescape/strava-docs-kr.git
   cd strava-docs-kr
   ```

2. 의존성 설치:
   ```bash
   npm install
   ```

3. 개발 서버 실행:
   ```bash
   npm start
   ```

### 빌드 및 배포

1. 프로덕션 빌드:
   ```bash
   npm run build
   ```

2. GitHub Pages 배포:
   ```bash
   npm run deploy
   ```

## 문서 작성 방법

문서는 마크다운 형식으로 작성되며, `/src/markdowns/docs/` 디렉토리에 저장됩니다.  
문서 작성에 대한 자세한 가이드는 다음 링크에서 확인할 수 있습니다. [문서 작성 가이드](https://github.com/letsescape/strava-docs-kr/tree/main/src/markdowns)

### 마크다운 컴포넌트

문서 작성 시 다음과 같은 특별한 마크다운 컴포넌트를 사용할 수 있습니다:

- `docs-panel`: 좌우 패널 레이아웃을 위한 컴포넌트
- `docs-http-method`: HTTP 메서드 표시를 위한 컴포넌트
- `docs-table` & `docs-table-row`: 테이블 표시를 위한 컴포넌트
- `docs-tab`: 코드 예제 탭을 위한 컴포넌트
