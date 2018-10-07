const STAFFS = {
  '강현정': '웅, 감자 엄마 :)',
  '구범모': '🐵🤖🐱🐶👽🦊💩🐷🐼🐰🐔🦄🦁🐲💀🐻🐯🐨🦖👻',
  '김은영': '🗼',
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
    const isStaffElement = $('.staff').find(e.target).length;
    if (!isStaffElement) {
      hideStaffModal();
    }
  })

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
