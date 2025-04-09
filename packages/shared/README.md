# shared 패키지

## 폴더 구조

src/
├── types/                 # 공통 타입 정의
│   ├── apis/              # api 관련 타입
│   │   └── index.ts       # api 타입 export
│   ├── contents/          # 콘텐츠 관련 타입
│   │   └── index.ts       # 콘텐츠 타입 export
│   └── index.ts           # 모든 공통 타입 export
├── services/              # API 서비스
│   └── index.ts           # 모든 공통 API export
├── hooks/                 # 공통 훅
│   └── index.ts           # 모든 공통 훅 export
├── libs/                  # 유틸리티 함수
│   └── constants          # 상수 값
│   │   └── index.ts       # 모든 상수 값 export
│   └── helpers            # 헬퍼 함수
│   │   └── index.ts       # 모든 헬퍼 함수 export
│   └── index.ts           # 모든 유틸리티 함수 export
├── components/            # 공통 컴포넌트
│   └── common/            # 전체 공통 컴포넌트
│   │   └── index.ts       # 모든 공통 컴포넌트 export
│   └── project-a/         # 프로젝트별 컴포넌트
│   │   └── index.ts       # project-a 컴포넌트 export
│   └── project-b/
│       └── index.ts       # project-b 컴포넌트 export
└── index.ts               # 기타 모듈 export

- 위 폴더 구조는 예시이며, 실제 프로젝트에 맞게 수정해야 합니다.

## 패키지 사용 예시

```ts
// 특정 카테고리의 모든 모듈이 필요할 때
import * as apiTypes from '@web-learning/shared/types/apis';
import * as helpers from '@web-learning/shared/libs/helpers';

// 특정 모듈이 필요할 때
import { Button } from '@web-learning/shared/components/common';
import { userService } from '@web-learning/shared/services';
import { formatHelper } from '@web-learning/shared/libs/helpers';

// 프로젝트별 컴포넌트
import { ProjectComponent } from '@web-learning/shared/components/project-a';
```
