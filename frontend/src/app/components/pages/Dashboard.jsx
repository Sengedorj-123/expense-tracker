import { CashCard } from "../card/Cash";
import { ExpensesCard } from "../card/Income";
import { IncomeCard } from "../card/Expense";

import { ExpenseGraphic } from "../chart/Expense";
import { IncomeGraphic } from "../chart/Income";

export const DashboardPage = () => {
  return (
    <div className="container m-auto">
      <div className="pt-[50px]">
        <div className="flex justify-between">
          <CashCard />
          <ExpensesCard />
          <IncomeCard />
        </div>
        <div className="flex justify-between pt-[30px]">
          <IncomeGraphic />
          <ExpenseGraphic />
        </div>
      </div>
      <div className="pt-[30px]">
        <div className="card bg-white rounded-box grid h-[600px] flex-grow place-items-center "></div>
      </div>
    </div>
  );
};
