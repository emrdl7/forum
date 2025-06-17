const HeritageModal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.4)] flex items-center justify-center z-[1000] p-4">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 cursor-pointer">
          <span className="material-symbols-rounded text-2xl">close</span>
        </button>
        <h3 className="text-xl font-semibold mb-4">
          {item.title} ({item.year})
        </h3>

        <p className="mb-4 text-14px text-[#666]">{item.area}</p>
        <div className="mb-2 ">
          {item.feature.startsWith("")
            ? item.feature.substring(1)
            : item.feature}
        </div>

        <button
          onClick={onClose}
          className="mt-6 bg-[#ED6830] text-white px-4 py-2 rounded hover:bg-[#d85720] w-full cursor-pointer">
          닫기
        </button>
      </div>
    </div>
  );
};

export default HeritageModal;
