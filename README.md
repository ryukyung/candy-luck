## 🍭 Candy Luck

![thumbnail](https://github.com/user-attachments/assets/e76c9cc8-e721-46ee-8742-326353c32f60)



- 배포 URL: https://candy-luck.vercel.app/

### 📝 Description

클래식한 사탕 뽑기 기계를 모티브로, 실시간 날씨 정보와 AI 기반 운세를 결합하여 사용자에게 독특하고 즐거운 경험을 제공합니다. GSAP 애니메이션으로 시각적인 몰입감을 더했으며, html2canvas를 활용한 결과 저장기능으로 사용자 편의성을 강화했습니다.


### 🧰 Tools
- React, TypeScript, Emotion
- OpenAI API. Weather API
- gsap/react, html2canvas

### 🗓️ Duration
- 2024.06.05 - 2024.08.02

### 🍬 Feature

| 메인화면 | 모달 | 
| :----: | :----: |
| <img src='https://github.com/user-attachments/assets/7cfbffcf-0c93-4de1-8a98-9c46d494cea8' /> | <img src='https://github.com/user-attachments/assets/5d5fad7f-21f8-43ad-bf7b-b56e212a44fc' /> |


- 인터랙티브 애니메이션
  - GSAP 기반의 사탕 뽑기 기계 로딩 애니메이션
  - 뽑기 레버 작동 시 부드럽고 직관적인 모션 제공
  - 데스크탑 환경에서의 동적 배경 애니메이션
- 기능
  - Weather API를 통한 실시간 날씨 정보 제공
  - OpenAI API를 활용한 맞춤형 일일 운세 생성
  - html2canvas를 통한 결과 화면 저장 기능
- 과금 방지 로직
  - localStorage 기반 캐싱으로 OpenAI API 호출 최소화
