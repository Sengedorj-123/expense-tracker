export const ExpensesCard = ({ totalExpense }) => {
  return (
    <div className="flex w-[30%] flex-col lg:flex-row  shadow-custom  rounded-box">
      <div className="card bg-white rounded-box h-[250px] flex-grow">
        <div className="w-full h-[20%]">
          <div className="flex items-center gap-[5px] pt-[10px] pl-[20px]">
            <div className="w-[6px] h-[6px] rounded-full bg-red-500"></div>
            <h1 className="font-[600]">Total Expenses</h1>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#E8E9EB]"></div>
        <div className="w-full h-[80%] pl-[20px] flex flex-col">
          <div className="w-full h-[60%] flex flex-col justify-start pt-[25px] gap-[10px]">
            <h1 className="font-[600] text-[40px]">{totalExpense}$</h1>
            <h1 className="text-lg text-[#64748B]">Your Expense Amount</h1>
          </div>
          <div className="flex items-center gap-[7px] pt-[30px]">
            <h1>32% from last month</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
