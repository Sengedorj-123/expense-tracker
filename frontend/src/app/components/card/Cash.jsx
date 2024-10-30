import { UnionIcon } from "../icons/Union";
import { WhiteGeldIcon } from "../icons/WhiteGeld";

export const CashCard = () => {
  return (
    <div className="flex w-[30%] flex-col lg:flex-row ">
      <div className="card bg-blue-600  rounded-box grid h-[250px] flex-grow ">
        <div className="w-full pl-[40px] pt-[40px] flex justify-start h-[20%] items-center gap-[10px]">
          <WhiteGeldIcon />
          <h1 className="font-[600] text-white text-[20px]">Geld</h1>
        </div>
        <div className="pl-[40px] flex justify-between">
          <div className="flex flex-col justify-start">
            <h1 className="text-base-300">Cash</h1>
            <h1 className="text-[22px] text-white">100000$</h1>
          </div>
          <div className="pt-[28px] pr-[50px]">
            <UnionIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
