export const Type = () => {
  return (
    <div className="w-full pt-[50px]">
      <h1>Types</h1>
      <div className="flex flex-col gap-[15px] pt-[20px]">
        <div className="flex items-center gap-[5px]">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-xs"
          />
          <h1>All</h1>
        </div>
        <div className="flex items-center gap-[5px]">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-xs"
          />
          <h1>Income</h1>
        </div>
        <div className="flex items-center gap-[5px]">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-xs"
          />
          <h1>Expense</h1>
        </div>
      </div>
      <div className="w-full pt-[50px]">
        <h1>Category</h1>
        <div className="flex gap-[10px] pt-[10px] items-center">
          <img
            className="w-[20px] h-[20px]"
            src="https://cdn-icons-png.flaticon.com/128/159/159604.png"
            alt=""
          />
          <h1>kdsahdvasvjb</h1>
        </div>
        <button
          className="btn"
          onClick={() =>
            document.getElementById("my_modal_category").showModal()
          }
        >
          <img
            className="w-[20px]"
            src="https://cdn-icons-png.flaticon.com/128/8377/8377219.png"
            alt=""
          />
          Add Category
        </button>
        <dialog id="my_modal_category" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Add Category</h3>
            <div className=" pt-[20px] flex gap-[20px] items-center">
              <div className="dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className="btn m-1">
                  <img
                    className="w-[20px]"
                    src="https://cdn-icons-png.flaticon.com/128/25/25694.png"
                    alt=""
                  />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                >
                  <li>
                    <a>
                      <img
                        className="w-[20px]"
                        src="https://cdn-icons-png.flaticon.com/128/25/25694.png"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="pt-[20px]">
              <button className="btn btn-accent w-full ">Accent</button>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};
Type.js;
