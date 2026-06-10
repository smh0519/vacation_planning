import type { TravelSlide } from '../types/presentation';

export const jejuSlides: TravelSlide[] = [
  {
    id: "jeju-1",
    type: "title",
    title: "푸른 바다와 자연, 제주도 2박 3일 뚜벅이 여행 계획 🍊",
    subtitle: "친구들과 함께 떠나는 낭만 가득 서부 코스"
  },
  {
    id: "jeju-2",
    type: "route",
    title: "1일차 동선 (공항 & 애월 해안도로)",
    routeDay: "Day 1",
    routeItems: [
      { time: "10:30", spot: "제주국제공항 도착", memo: "짐 배송 서비스 '가방을 부탁해' 접수 후 가볍게 출발" },
      { time: "11:30", spot: "제주 시내 고기국수 맛집", memo: "공항 인근 유명 국수거리에서 든든하게 점심 식사" },
      { time: "13:00", spot: "급행버스 102번 탑승", memo: "애월 환승정류장으로 이동 (약 40분 소요)" },
      { time: "14:00", spot: "한담해안산책로", memo: "에메랄드빛 바다 보며 산책 & 유명 도넛 카페 방문" },
      { time: "17:00", spot: "숙소 체크인 (곽지 인근)", memo: "짐 정리 및 휴식" },
      { time: "19:00", spot: "곽지해수욕장 흑돼지 구이", memo: "바다를 보며 굽는 흑돼지 삼겹살에 한잔" }
    ]
  },
  {
    id: "jeju-3",
    type: "route",
    title: "2일차 동선 (협재 & 한림 자연 탐방)",
    routeDay: "Day 2",
    routeItems: [
      { time: "09:30", spot: "브런치 카페", memo: "곽지 해변 앞 오션뷰 브런치로 아침 시작" },
      { time: "11:00", spot: "협재 해수욕장 & 금능 해변", memo: "비양도가 보이는 포토스팟에서 인생샷 건지기" },
      { time: "13:30", spot: "한림공원", memo: "아열대 식물원과 협재동굴 탐방 (입장료 확인)" },
      { time: "16:00", spot: "한림항 로컬 카페", memo: "바다 전경을 보며 고소한 우도 땅콩 크림라떼" },
      { time: "18:00", spot: "협재 야시장 또는 이자카야", memo: "딱새우회와 전복버터구이로 2일차 마무리" }
    ]
  },
  {
    id: "jeju-4",
    type: "map",
    title: "🗺️ 한눈에 보는 서부 뚜벅이 코스",
    mapCenter: [33.45, 126.35],
    mapZoom: 11,
    mapPins: [
      {
        lat: 33.5104, lng: 126.4913, label: "제주국제공항", description: "여행의 시작점",
        imageUrl: "https://images.unsplash.com/photo-1542640244-7e672d6cb466?auto=format&fit=crop&q=80&w=400",
        link: "https://map.kakao.com/link/search/제주국제공항"
      },
      {
        lat: 33.4660, lng: 126.3204, label: "애월 환승정류장", description: "102번 버스 도착지",
        imageUrl: "https://images.unsplash.com/photo-1628108426027-46dc0ea0bb18?auto=format&fit=crop&q=80&w=400",
        link: "https://map.kakao.com/link/search/애월환승정류장"
      },
      {
        lat: 33.4608, lng: 126.3121, label: "한담해안산책로", description: "에메랄드빛 바다 산책",
        imageUrl: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80&w=400",
        link: "https://map.kakao.com/link/search/한담해안산책로"
      },
      {
        lat: 33.4503, lng: 126.3056, label: "곽지해수욕장", description: "숙소 및 흑돼지 구이",
        imageUrl: "https://images.unsplash.com/photo-1577953255152-7cdff8d78da4?auto=format&fit=crop&q=80&w=400",
        link: "https://map.kakao.com/link/search/곽지해수욕장"
      },
      {
        lat: 33.3937, lng: 126.2396, label: "협재 해수욕장", description: "비양도 포토스팟",
        imageUrl: "https://images.unsplash.com/photo-1601614052345-3168270cb47e?auto=format&fit=crop&q=80&w=400",
        link: "https://map.kakao.com/link/search/협재해수욕장"
      },
      {
        lat: 33.3895, lng: 126.2392, label: "한림공원", description: "자연 탐방 코스",
        imageUrl: "https://images.unsplash.com/photo-1616422896504-2092cc7a20c9?auto=format&fit=crop&q=80&w=400",
        link: "https://map.kakao.com/link/search/한림공원"
      }
    ]
  },
  {
    id: "jeju-5",
    type: "cost",
    title: "제주 뚜벅이 여행 예상 경비 (1인 기준) ",
    costItems: [
      { category: "교통비", price: "35,000원", detail: "공항 버스비 및 간간이 이용할 카카오 택시비" },
      { category: "숙박비 (2박)", price: "80,000원", detail: "가성비 좋은 해변 인근 게스트하우스 또는 펜션 N분의 1" },
      { category: "식비 (6식)", price: "120,000원", detail: "흑돼지구이, 고기국수, 갈치조림, 카페 음료 비용 포함" },
      { category: "입장료/체험", price: "25,000원", detail: "한림공원 입장료 및 가방 배송 비용" },
      { category: "비상금", price: "30,000원", detail: "기념품 구매 및 돌발 교통비 대비" }
    ]
  }
];

export const busanSlides: TravelSlide[] = [
  {
    id: "busan-1",
    type: "title",
    title: "🌊 2026 여름휴가: 뚜벅이들의 천국, 부산 정복기",
    subtitle: "운전면허 없어도 괜찮아. 지하철이 다 해주니까.",
    appealPoints: [
      "렌터카 눈치 게임 X, 교통 체증 스트레스 X",
      "해수욕, 액티비티, 밤도깨비 파티까지 완벽한 인프라",
      "국밥부터 회까지, 실패 없는 부산 로컬 맛집 투어"
    ]
  },
  {
    id: "busan-2",
    type: "cost",
    title: "💸 지갑은 가볍게, 놀거리는 무겁게! (예상 경비) 60만원",
    costItems: [
      { category: "🚆 왕복 기차", price: "약 13만 원", detail: "KTX 청소년 할인 / 일반 왕복 기준 15만 원 이내 세이브" },
      { category: "🚇 현지 교통비", price: "약 2만 원", detail: "지하철 및 버스 위주, 택시 최소화" },
      { category: "🏨 숙박비 (2박)", price: "약 8~10만 원", detail: "서면 or 부산역 인근 가성비 에어비앤비/호텔 쉐어 기준" },
      { category: "🍔 식비 & 술값", price: "약 15만 원", detail: "국밥, 밀면, 만두 등 가성비 로컬 맛집 + 광안리 회센터" },
      { category: "🎢 액티비티/입장료", price: "약 5만 원", detail: "스카이라인 루지, 해변열차 등" }
    ],
    highlightCostPoint: "제주도 렌터카 및 비싼 체류비 대비 최소 10~15만 원 이상 절약 가능!"
  },
  {
    id: "busan-3",
    type: "spots",
    title: "🎯 부산에서 뭐 하고 놀까? (취향 저격 3대장)",
    spots: [
      { name: "아드레날린 폭발", tag: "액티비티", description: "스카이라인 루지 (저녁 내기 레이싱!), 롯데월드 부산 (자이언트 디거 탑승)", emoji: "🏎️" },
      { name: "뚜벅이 맞춤 코스", tag: "오션뷰 & 힐링", description: "해운대 블루라인파크 (에어컨 쐬며 바다 구경하는 해변열차), 캡슐열차 탑승", emoji: "📸" },
      { name: "나이트라이프", tag: "밤이 미쳤다", description: "광안대교 야경 보며 수변공원/회센터 먹방, 서면 핫플 펍&포차 투어", emoji: "🍻" }
    ]
  },
  {
    id: "busan-3-2",
    type: "spots",
    title: "🔥 친구들과 함께하면 무조건 성공하는 필수 액티비티",
    spots: [
      { name: "광안리 요트 투어", tag: "인당 1.5~2.5만원", description: "국밥 두 그릇 가격으로 타는 최고의 가성비. 해 질 녘 맥주 한 캔 들고 타면 광안대교 야경이 미쳤습니다. 멋진 모습으로 인생샷 남기기 최고!", emoji: "⛵" },
      { name: "스카이라인 루지", tag: "인당 약 3만원", description: "현실판 카트라이더! 헬멧 쓰고 산에서 트랙 따라 내려오며 '꼴찌 밀면 쏘기' 내기하면 아드레날린 대폭발. 뚜벅이도 동해선으로 쉽게 이동 가능합니다.", emoji: "🏎️" },
      { name: "송정 서핑 체험", tag: "인당 4~5만원", description: "사람 구경만 하다 지치지 말고 진짜 바닷물 먹어가며 액티비티하게 놀기! 보드에서 넘어지고 비웃다 보면 2~3시간이 순삭되는 최고의 스포츠입니다.", emoji: "🏄‍♂️" },
      { name: "밀락더마켓 & 수변공원", tag: "먹고 마시는 만큼!", description: "에어컨 빵빵한 트렌디 실내 복합문화공간! 맛있는 길거리 음식과 생맥주를 사서 계단에 앉아 광안리 밤바다를 보는 감성이 끝내줍니다.", emoji: "🍻" }
    ]
  },
  {
    id: "busan-4-1",
    type: "route",
    title: "1일차 동선 (부산역 도착 & 서핑/물놀이)",
    routeDay: "Day 1",
    routeItems: [
      { time: "11:30", spot: "부산역 도착", memo: "KTX 타고 부산역에 점심쯤 설레는 도착!" },
      { time: "12:30", spot: "부산역 인근 점심 식사", memo: "로컬 밀면 혹은 국밥 맛집에서 든든하게 점심" },
      { time: "14:30", spot: "송정/해운대 해수욕장", memo: "시원하게 바다 수영하고 서핑 강습 및 물놀이 즐기기" },
      { time: "18:30", spot: "광안리 이동 & 술 한잔", memo: "민락더마켓 구경하고 맛있는 조개구이/포차에서 신나게 한잔" }
    ]
  },
  {
    id: "busan-4-2",
    type: "route",
    title: "2일차 동선 (해변열차 & 바다 카페 & 회)",
    routeDay: "Day 2",
    routeItems: [
      { time: "09:30", spot: "아침 식사 및 해장", memo: "늦잠 자고 일어나서 돼지국밥 뜨끈하게 해장 완료" },
      { time: "11:00", spot: "블루라인파크 해변열차", memo: "시원한 바다 기차 타고 해안가 전경 구경" },
      { time: "13:00", spot: "오션뷰 예쁜 카페", memo: "시원한 오션뷰를 보며 커피 한잔과 포토타임" },
      { time: "15:30", spot: "흰여울문화마을 / 영도 관광", memo: "바닷바람 맞으며 아기자기한 흰여울길 골목 산책" },
      { time: "18:00", spot: "회센터 저녁 식사", memo: "광안리/민락 회센터에서 신선한 회에 저녁 식사" }
    ]
  },
  {
    id: "busan-4-3",
    type: "route",
    title: "3일차 동선 (자유 일정 & 복귀)",
    routeDay: "Day 3",
    routeItems: [
      { time: "10:00", spot: "늦은 기상 및 체크아웃", memo: "마지막 날 아침은 여유롭게 준비하고 숙소 퇴실" },
      { time: "11:30", spot: "상황 맞춰 자유 일정 (미정)", memo: "아쉬운 미정 일정! 소품샵 투어, 빵지순례 등 가고 싶은 곳 자유롭게 가기" },
      { time: "15:00", spot: "부산역 복귀 및 출발", memo: "기념품(어묵/만두 등) 사고 KTX 타고 서울로 출발" }
    ]
  },
  {
    id: "busan-5",
    type: "map",
    title: "📍 뚜벅이 부산 핫플 지도",
    mapCenter: [35.16, 129.12],
    mapZoom: 12,
    mapPins: [
      {
        lat: 35.1152, lng: 129.0422, label: "부산역 & 차이나타운", description: "만두 맛집 및 KTX",
        imageUrl: "https://images.unsplash.com/photo-1590212001710-4ed514bfbe1b?auto=format&fit=crop&q=80&w=400",
        link: "https://map.kakao.com/link/search/부산역"
      },
      {
        lat: 35.1578, lng: 129.0594, label: "서면역 일대", description: "핫플 펍 & 포차 투어",
        imageUrl: "https://images.unsplash.com/photo-1596705572836-848e025f385c?auto=format&fit=crop&q=80&w=400",
        link: "https://map.kakao.com/link/search/서면역"
      },
      {
        lat: 35.1532, lng: 129.1189, label: "광안리 해수욕장", description: "회센터 & 광안대교 야경",
        imageUrl: "https://images.unsplash.com/photo-1620601366115-4309a4773c33?auto=format&fit=crop&q=80&w=400",
        link: "https://map.kakao.com/link/search/광안리해수욕장"
      },
      {
        lat: 35.1689, lng: 129.1317, label: "센텀시티", description: "스파랜드 힐링",
        imageUrl: "https://images.unsplash.com/photo-1510166299863-71a74288dc36?auto=format&fit=crop&q=80&w=400",
        link: "https://map.kakao.com/link/search/센텀시티스파랜드"
      },
      {
        lat: 35.1601, lng: 129.1719, label: "해운대 미포", description: "블루라인파크 해변열차",
        imageUrl: "https://images.unsplash.com/photo-1560067645-3db311d40026?auto=format&fit=crop&q=80&w=400",
        link: "https://map.kakao.com/link/search/해운대블루라인파크"
      },
      {
        lat: 35.1952, lng: 129.2132, label: "오시리아역", description: "스카이라인 루지 및 롯데월드",
        imageUrl: "https://images.unsplash.com/photo-1505993597083-3ae4f54c9053?auto=format&fit=crop&q=80&w=400",
        link: "https://map.kakao.com/link/search/오시리아관광단지"
      }
    ]
  },
  {
    id: "busan-6",
    type: "conclusion",
    title: "🤔 그래서, 왜 부산을 가야 할까?",
    conclusionItems: [
      { title: "운전 스트레스 제로!", description: "더운 7월, 에어컨 빵빵한 지하철로 거의 모든 핫플 이동 가능.", emoji: "🚇" },
      { title: "가성비와 가심비 동시 만족!", description: "아낀 교통비로 회랑 술을 더 먹거나 루지를 탈 수 있음.", emoji: "💸" },
      { title: "밤까지 꽉 찬 텐션!", description: "제주도는 밤 9시면 깜깜해지지만, 부산의 밤은 이제 시작됨.", emoji: "🔥" }
    ]
  }
];
