import { Link } from "react-router-dom";

function BoardWrite() {
  return (
    <div className="container pt-[40px] pb-[60px]">
      <h3 className="text-center text-[18px] font-[900] mb-[40px] md:text-[42px] md:mb-[80px]">
        게시판
      </h3>

      <form className="border-t-[2px] border-[#222] bg-white shadow-sm mb-8 px-4 md:px-8 py-8 space-y-6">
        <div>
          <label className="block font-semibold mb-2" htmlFor="title">
            제목
          </label>
          <input
            id="title"
            type="text"
            className="w-full border border-[#ccc] rounded px-3 py-2 text-[16px]"
            placeholder="제목을 입력하세요"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2" htmlFor="author">
            작성자
          </label>
          <input
            id="author"
            type="text"
            className="w-full border border-[#ccc] rounded px-3 py-2 text-[16px]"
            placeholder="작성자를 입력하세요"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2" htmlFor="content">
            내용
          </label>
          <textarea
            id="content"
            className="w-full border border-[#ccc] rounded px-3 py-2 text-[16px] min-h-[180px] md:min-h-[260px]"
            placeholder="내용을 입력하세요"></textarea>
        </div>
        <div>
          <label className="block font-semibold mb-2" htmlFor="file">
            첨부파일
          </label>
          <input id="file" type="file" className="block" />
        </div>
        <div className="flex justify-end gap-2">
          <button
            type="submit"
            className="px-4 py-2 bg-[#ef8156] text-white rounded text-[14px]">
            등록
          </button>
          <Link
            to="/boardList"
            className="px-4 py-2 bg-gray-200 text-[#222] rounded text-[14px]">
            목록
          </Link>
        </div>
      </form>
    </div>
  );
}

export default BoardWrite;
