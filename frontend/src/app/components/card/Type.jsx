export const Type = ({ onFilterChange }) => {
  return (
    <div className="pt-[30px] pl-[50px]">
      <h1 className="font-[600]">Types</h1>
      <div className="flex flex-col gap-[15px] pt-[20px]">
        <div className="flex items-center gap-[5px]">
          <input
            type="radio"
            defaultChecked
            name="radio-1"
            className="radio w-[20px] h-[20px]"
            onChange={() => onFilterChange("All")}
          />
          <h1>All</h1>
        </div>
        <div className="flex items-center gap-[5px]">
          <input
            type="radio"
            name="radio-1"
            className="radio w-[20px] h-[20px]"
            onChange={() => onFilterChange("INC")}
          />
          <h1>Income</h1>
        </div>
        <div className="flex items-center gap-[5px]">
          <input
            type="radio"
            name="radio-1"
            className="radio w-[20px] h-[20px]"
            onChange={() => onFilterChange("EXP")}
          />
          <h1>Expense</h1>
        </div>
      </div>
    </div>
  );
};
