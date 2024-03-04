function Portfolio() {
  return (
    <div className="mx-auto max-w-5xl overflow-y-hidden px-4">
      <div className="text-4xl font-bold text-center mt-8 mb-6">Portfolio</div>
      <div className="mb-8">
        <div className="text-3xl font-bold mb-2">Overview</div>
        <p className="text-gray-700 bg-yellow-100 rounded-3xl p-3">
          안녕하세요! 프론트엔드 개발자 김지원입니다.
          <br /> 6년 여 군 생활을 통해 다양한 성향의 사람들과 소통하고 그들의
          감정에 공감하는 능력을 키웠습니다.
          <br />
          이를 통해
          <span className="font-extrabold text-green-400">
            소통하고 공감하는 능력
          </span>
          을 갖춘 프론트엔드 개발자가 되어, 팀의 성장과 프로젝트에 큰 도움이
          되겠습니다.
        </p>
      </div>
      <div className="mb-8">
        <div className="text-3xl font-bold mb-2">About Me</div>
        <div className="text-gray-700 flex items-center justify-around flex-wrap">
          <div>
            <div className="flex justify-center">주소</div>
            <span>경기 안산시</span>
          </div>
          <div>
            <div className="flex justify-center">학력</div>
            <span>청주대학교 졸업</span>
          </div>
          <div>
            <div className="flex justify-center">연락처</div>
            <span>010.4160.2006</span>
          </div>
          <div>
            <div className="flex justify-center">E-Mail</div>
            <span>stayby16@naver.com</span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="text-3xl font-bold mb-2">Skills</div>
        <img src="../skills.png" className="rounded-3xl" />
      </div>
      <div className="mb-8">
        <div className="text-3xl font-bold mb-2">Projects</div>
        <div>
          <div className="mb-4">
            <div className="font-bold">Project Name</div>
            <div>기간 / 인원</div>
            <div>프로젝트 이미지</div>
            <div className="text-gray-700">프로젝트 설명</div>
            <div>프로젝트 기능</div>
            <div>프로젝트 깃허브 링크</div>
            <div>프로젝트 URL</div>
            <div>프로젝트 기술 스택</div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="text-xl font-bold mb-2">Career</div>
        <div className="mb-2">커리어 이미지</div>
        <div className="text-gray-700">커리어 설명</div>
      </div>
    </div>
  );
}

export default Portfolio;
