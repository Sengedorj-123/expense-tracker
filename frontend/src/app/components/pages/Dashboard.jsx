import { CashCard } from "../card/Cash";
import { ExpensesCard } from "../card/Expenses";
import { IncomeCard } from "../card/Income";
import { HeaderPart } from "./Header";

export const DashboardPage = () => {
  return (
    <div className="container m-auto">
      <div className="pt-[50px]">
        <div className="flex justify-between">
          <CashCard />
          <ExpensesCard />
          <IncomeCard />
        </div>
      </div>
    </div>
  );
};
