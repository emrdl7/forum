import { Link } from "react-router-dom";

function BoardView() {
  return (
    <div className="container pt-[40px] pb-[60px]">
      <h3 className="text-center text-[18px] font-[900] mb-[40px] md:text-[42px] md:mb-[80px]">
        게시판
      </h3>

      <div className="border-t-[2px] border-[#222] bg-white shadow-sm mb-8">
        <div className="py-6 px-4 md:px-8 border-b border-[#eee]">
          <h4 className="text-[18px] font-bold mb-2 md:text-[28px]">
            제9회 동아시아농어업유산협의회 국제컨퍼런스
          </h4>
          <div className="flex flex-wrap items-center text-xs text-gray-500 gap-3">
            <span>
              작성자: <b className="text-[#222] font-medium">관리자</b>
            </span>
            <span>작성일: 2025.06.06</span>
            <span>조회수: 123</span>
          </div>
        </div>
        <div className="py-10 px-4 md:px-8 min-h-[200px] leading-relaxed text-[15px]">
          <p>
            제9회 동아시아농어업유산협의회 국제컨퍼런스에 많은 관심과 참여
            부탁드립니다.
            <br />
            <br />
            일시: 2025.09.17.(수) ~ 19.(금)
            <br />
            장소: 제주 오리엔탈호텔
            <br />
            <br />
            자세한 내용은 첨부파일 및 행사 프로그램을 참고해 주세요.
          </p>
        </div>

        <div className="px-4 md:px-8 py-4 border-t border-[#eee] bg-gray-50">
          <span className="inline-block font-semibold mr-2">첨부파일</span>
          <a href="#" className="text-blue-600 underline text-[14px]">
            컨퍼런스_안내문.pdf
          </a>
        </div>
      </div>

      <div className="flex justify-end gap-2 mb-8">
        <Link
          to="/boardWrite"
          className="px-4 py-2 bg-[#ef8156] text-white rounded text-[14px]">
          수정
        </Link>
        <button
          type="button"
          className="px-4 py-2 bg-[#555] text-white rounded text-[14px]">
          삭제
        </button>
        <Link
          to="/boardList"
          className="px-4 py-2 bg-gray-200 text-[#222] rounded text-[14px]">
          목록
        </Link>
      </div>
    </div>
  );
}

export default BoardView;
