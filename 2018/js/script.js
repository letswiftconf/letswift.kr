const SESSIONS = {
  '김은영': {
    'description': '일본 GMO Pepabo Inc.에서 iOS 엔지니어로 근무하고 있습니다. Ruby가 활발하게 사용되는 일본에서는 iOS 개발에서도 Ruby가 다양하게 활용되고 있습니다. pods의 자동 버전 관리부터 App store 심사 신청까지, iOS 개발이 조금 더 편리해지는 마법의 Ruby Gem들을 소개합니다.',
  },
  '김남현': {
    'description': 'Uber의 ribs를 기반으로한 VCNC의 아키텍쳐 공유 - Ribs에 대한 설명 및 필요성, 이를 Rx와 함께 사용하면서 결정한 디자인 초이스 및 배경 설명.',
  },
  '김정': {
    'description': 'Let\'Swift 18에 오신 것을 환영합니다.',
  },
  '김태준': {
    'description': '꽤 오랜 기간동안 프로젝트에 RxSwift를 도입하려 했지만, 바로 시작하기에는 공부해야할 내용들이 많았습니다. 제가 RxSwift, RxCocoa를 이용해 개발을 시작할 때 느꼈던 어려움과 모호함. 그리고 그것들을 ReactorKit으로 극복한 경험을 공유합니다. 과거의 저처럼 RxSwift를 시작하고 싶은데, 주저하고 계시는 분들께 RectorKit이란 선택지를 드립니다.',
  },
  '노수진': {
    'description': '2015, 2016, 2017년 올해의 앱에 이름을 올렸던 \'보안카드 위젯\' 앱을 운영해온 이야기입니다. 사이드 프로젝트로 앱을 출시하려는 iOS 개발자들에게 팁을 주고 경험을 공유합니다.',
  },
  '양승헌': {
    'description': '병렬처리를 위해서 CPU, GPU 성능을 향상하기 위한 SIMD, Metal Performace Shader를 활용하는 방식을 소개합니다.',
  },
  '오진성': {
    'description': 'RxSwift 가 어떻게 작동하는지 알아봅니다.',
  },
  '이봉원': {
    'description': '현재는 대표적으로 GitHub Developer 사이트 API 가 기존 Rest 방식에서 v4 부터 GraphQL 로 제공하고 있고 Facebook 도 자신들이 만들어낸 것이니만큼 조만간 Rest API 대신 GraphQL API 로 변경할 것으로 예상이 됩니다. 이처럼 점점 많은 곳에서 GraphQL 이 쓰일 것으로 예상되는 만큼 GraphQL 에 대한 전반적인 개념과 기본 활용법을 다루고자 합니다.',
  },
  '이택규': {
    'description': '토스 앱 전체 Look & Feel 을 통일하고, 재사용 가능한 컴포넌트를 적극 활용하여 개발자와 디자이너의 생산성을 끌어올리는 TDS v2 를 소개하고, 구조를 잡는데 있어서 겪은 여러 가지 시행착오를 공유합니다.',
  },
  '홍길동': {
    'description': '',
  },
  '황재욱': {
    'description': '매스프레소라는 회사에서 1인 IOS 개발자로 Qanda라는 앱을 개발하면서 앱의 모든 구조를 ReSwift를 통해 Redux 구조로 구현한 경험을 바탕으로 많은 장점을 가진 ReSwift의 매력을 알리고 싶습니다. 한 눈에 파악 가능한 데이터 흐름을 자랑하는 Unidirectional Architecture를 더 많은 IOS 개발자 분들이 사용하여 더 좋은 Unidirectional Architecture 구조를 고민하며 만들어 나가기를 소망합니다.',
  },
};
const WORKSHOPS = {
  '김정': {
    'description': '',
  },
  '안정민': {
    'description': `느린 컴파일 속도로 인한 낮은 생산성, 매번 po 만으로 디버깅 하던 습관을 벗어나 다양한 명령어를 알고 사용하여 개발 속도를 높이고, 생산성을 향상시키는 것이 목적입니다.`,
  },
  '이승윤': {
    'description': '',
  },
  '전수열': {
    'description': '',
  },
};

const STAFFS = {
  '강현정': '웅, 감자 엄마 :)',
  '구범모': '사진 찍는 개발자입니다! 스태프 미모지 제작자이기도 하죠! 🐵🤖🐱🐶👽🦊💩🐷🐼🐰🐔🦄🦁🐲💀🐻🐯🐨🦖👻',
  '김은영': '🗼도쿄에서 iOS 엔지니어로 근무하고 있습니다. 라멘말고 라면이 먹고싶어요! 👩‍🌾',
  '손창우': '저도 나중에 발표해보고 싶어요',
  '윤중현': '403 forbidden === tokijh',
  '이규진': '운동어플 다짐을 개발하고 있습니다. 같이 몸무게 리팩토링해요💪🏻 ',
  '이동진': 'BAAMMM 🤜',
  '이재성': '게임하는 개발자',
  '이태현': '초콜릿을 주면 안물어요.',
  '정상엽': '자주 정신력이 Leaked되는 개발자입니다.',
  '정현아': '개발능력이 Optional 입니다. ( ※ 강제언랩핑 주의 )',
  '조성현': '🙌 🙌 🙌',
  '최송이': '안녕하세요 :) Zedd입니다.',
  '하태경': 'guard let introduce = nothingOnBranin else { return "잘부탁드립니다 :)" }',
  '김정': '달콤한 스위프트와 후덕한 오브젝티브-C의 혼혈왕자',
  '이승윤': 'NAVER에서 신기술을 모바일에 넣는 작업을 하고 있습니다. 오픈소스와 커뮤니티활동을 즐겨합니다',
  '전수열': 'StyleShare에서 iOS 애플리케이션을 개발하고 있습니다. 오픈소스와 개발자 커뮤니티에 관심이 많습니다.',
};

$(document).ready(() => {
  $('body').on('click', (e) => {
    const isSessionElement = $('.table-program td.session').is(e.target) || $('.table-program td.session').find(e.target).length;
    const isWorkshopElement = $('.table-program td.workshop').is(e.target) || $('.table-program td.workshop').find(e.target).length;
    if (!isSessionElement && !isWorkshopElement) {
      hideProgramModal();
    }

    const isStaffElement = $('.staff').is(e.target) || $('.staff').find(e.target).length > 0;
    if (!isStaffElement) {
      hideStaffModal();
    }
  })

  $('.table-program td.session:not(:empty):not(.reserved)').on('click', (e) => {
    const title = $(e.currentTarget).find('.title').text();
    const speakerName = $(e.currentTarget).find('.speaker').text();
    const currentModalName = $('.program-modal').find('.name').text();
    if (currentModalName !== speakerName) {
      showProgramModal(SESSIONS, title, speakerName);
    } else {
      hideProgramModal();
    }
  });

  $('.table-program td.workshop:not(.empty):not(.reserved)').on('click', (e) => {
    const title = $(e.currentTarget).find('.title').text();
    const speakerName = $(e.currentTarget).find('.speaker').text();
    const currentModalName = $('.program-modal').find('.name').text();
    if (currentModalName !== speakerName) {
      showProgramModal(WORKSHOPS, title, speakerName);
    } else {
      hideProgramModal();
    }
  });

  $('.program-modal').on('click', () => {
    hideProgramModal();
  });

  $('.staff').on('click', (e) => {
    const name = $(e.currentTarget).find('.name').text();
    const currentModalName = $('.staff-modal').find('.name').text();
    if (currentModalName !== name) {
      showStaffModal(name);
    } else {
      hideStaffModal();
    }
  });

  $('.staff-modal').on('click', () => {
    hideStaffModal();
  });
});

function showProgramModal(data, title, speakerName) {
  if (!data[speakerName]) {
    return;
  }

  const $modal = $('.program-modal');
  $modal.removeClass('hide');

  const description = data[speakerName]['description'];
  $modal.find('.title').text(title);
  $modal.find('.name').text(speakerName);
  $modal.find('.description').text(description);
  $modal.find('.avatar').attr('src', null);
  $modal.find('.avatar').attr('src', `images/speakers/${speakerName}님.jpeg`);
}

function hideProgramModal() {
  const $modal = $('.program-modal');
  $modal.addClass('hide');
  $modal.find('.title').text(null);
  $modal.find('.name').text(null);
  $modal.find('.description').text(null);
  $modal.find('.avatar').attr('src', null);
}

function showStaffModal(name) {
  const $modal = $('.staff-modal');
  $modal.removeClass('hide');
  
  const bio = STAFFS[name];
  $modal.find('.name').text(name);
  $modal.find('.bio').text(bio);
  $modal.find('.avatar').attr('src', `images/staff/${name}.png`);
}

function hideStaffModal() {
  const $modal = $('.staff-modal');
  $modal.addClass('hide');
  $modal.find('.name').text(null);
  $modal.find('.bio').text(null);
}
