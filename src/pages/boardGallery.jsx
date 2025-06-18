import { Link } from "react-router-dom";

function BoardGallery() {
  return (
    <div className="container pt-[40px]">
      <h3 className="text-center text-[18px] font-[900] mb-[40px] md:text-[42px] md:mb-[80px]">
        갤러리
      </h3>


      <div className="flex gap-2 mb-8 border-b border-[#E5E5E5] pb-[30px]">
        <button className="px-4 py-2 bg-[#222] text-white rounded">전체</button>
        <button className="px-4 py-2 bg-[#e4e4e4] text-[#555] hover:bg-[#F8F8F8] rounded">행사 사진</button>
        <button className="px-4 py-2 bg-[#e4e4e4] text-[#555] hover:bg-[#F8F8F8] rounded">공지사항</button>
        <button className="px-4 py-2 bg-[#e4e4e4] text-[#555] hover:bg-[#F8F8F8] rounded">일반</button>
      </div>
      <div className="flex justify-between items-center mb-4">
        <form className="flex gap-2">
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            className="border border-[#ccc]  px-[10px] h-[38px] rounded"
          />
          <button
            type="submit"
            className="bg-[#555] text-white h-[38px] px-[10px] rounded">
            검색
          </button>
        </form>
        <Link
          to="/boardGallery/write"
          className="bg-[#ef8156] text-white leading-[38px] px-[14px] rounded">
          글쓰기
        </Link>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <li className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden flex flex-col">
          <Link to="#">
            <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
              <img
                src="/src/assets/images/main1.jpg"
                alt="갤러리 이미지"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <strong className="block text-[16px] font-[600] mb-2">
                제9회 동아시아농어업유산협의회 국제컨퍼런스
              </strong>
              <span className="text-xs text-gray-500 mb-1">
                관리자 | 2025.06.06
              </span>
            </div>
          </Link>
        </li>

        <li className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden flex flex-col">
          <Link to="#">
            <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
              <img
                src="/src/assets/images/main1.jpg"
                alt="갤러리 이미지"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <strong className="block text-[16px] font-[600] mb-2">
                행사 사전등록 안내
              </strong>
              <span className="text-xs text-gray-500 mb-1">
                운영팀 | 2025.06.01
              </span>
            </div>
          </Link>
        </li>

        <li className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden flex flex-col">
          <Link to="#">
            <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
              <img
                src="/src/assets/images/main1.jpg"
                alt="갤러리 이미지"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <strong className="block text-[16px] font-[600] mb-2">
                행사 사진 예시
              </strong>
              <span className="text-xs text-gray-500 mb-1">
                홍길동 | 2025.05.20
              </span>
            </div>
          </Link>
        </li>

        <li className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden flex flex-col">
          <Link to="#">
            <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
              <img
                src="/src/assets/images/main1.jpg"
                alt="갤러리 이미지"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <strong className="block text-[16px] font-[600] mb-2">
                행사 풍경
              </strong>
              <span className="text-xs text-gray-500 mb-1">
                관리자 | 2025.05.10
              </span>
            </div>
          </Link>
        </li>

        <li className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden flex flex-col">
          <Link to="#">
            <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
              <img
                src="/src/assets/images/main1.jpg"
                alt="갤러리 이미지"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <strong className="block text-[16px] font-[600] mb-2">
                행사 풍경
              </strong>
              <span className="text-xs text-gray-500 mb-1">
                관리자 | 2025.05.10
              </span>
            </div>
          </Link>
        </li>

        <li className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden flex flex-col">
          <Link to="#">
            <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
              <img
                src="/src/assets/images/main1.jpg"
                alt="갤러리 이미지"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <strong className="block text-[16px] font-[600] mb-2">
                행사 풍경
              </strong>
              <span className="text-xs text-gray-500 mb-1">
                관리자 | 2025.05.10
              </span>
            </div>
          </Link>
        </li>

        <li className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden flex flex-col">
          <Link to="#">
            <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
              <img
                src="/src/assets/images/main1.jpg"
                alt="갤러리 이미지"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <strong className="block text-[16px] font-[600] mb-2">
                행사 풍경
              </strong>
              <span className="text-xs text-gray-500 mb-1">
                관리자 | 2025.05.10
              </span>
            </div>
          </Link>
        </li>
      </ul>

      <div className="flex justify-center mt-[30px] gap-2">
        <a
          href="#"
          className="px-3 py-[5px] border border-[#ccc] text-[#555] rounded bg-gray-100 hover:bg-gray-200">
          이전
        </a>
        <a
          href="#"
          className="px-3 py-[5px] border rounded bg-[#ef8156] text-white">
          1
        </a>
        <a
          href="#"
          className="px-3 py-[5px] border border-[#ccc] text-[#555] rounded bg-gray-100 hover:bg-gray-200">
          2
        </a>
        <a
          href="#"
          className="px-3 py-[5px] border border-[#ccc] text-[#555] rounded bg-gray-100 hover:bg-gray-200">
          다음
        </a>
      </div>
    </div>
  );
}

export default BoardGallery;
