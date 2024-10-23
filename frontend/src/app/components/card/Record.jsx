export const RecordCard = () => {
  return (
    <div className="pb-[50px]">
      <div className="w-[full] h-[920px] bg-white rounded-[12px] flex flex-col gap-[20px] p-[20px] ">
        <h1 className="text-[24px] font-[600]">Records</h1>
        <button className="btn btn-outline btn-info">+ Add</button>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <div className="flex flex-col gap-[20px]">
          <h1>Type</h1>
          <div className="flex gap-[10px]">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox rounded-full w-[20px] h-[20px]"
            />
            <h1>All</h1>
          </div>
          <div className="flex gap-[10px]">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox rounded-full w-[20px] h-[20px]"
            />
            <h1>Income</h1>
          </div>{" "}
          <div className="flex gap-[10px]">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox rounded-full w-[20px] h-[20px]"
            />
            <h1>Expense</h1>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <h1>Category</h1>
            <h1>Clear</h1>
          </div>
          <div className="flex gap-[10px] items-center ">
            <h1 className="text-blue-600 text-[25px]">+</h1>
            <h1>Add Category</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
