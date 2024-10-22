import { CashCard } from "../card/Cash";
import { ExpensesCard } from "../card/Expenses";
import { IncomeCard } from "../card/Income";
import { RecordCard } from "../card/Record";
import { ExpenseGraphic } from "../graphic/Expense";
import { IncomeGraphic } from "../graphic/Income";
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
        <div className="flex justify-between pt-[30px]">
          <IncomeGraphic />
          <ExpenseGraphic />
        </div>
        <div className="pt-[30px]">
          <RecordCard />
        </div>
      </div>
    </div>
  );
};
