"use client";

import { useState } from "react";
import dayjs from "dayjs";

export const RecordCard = () => {
  const [isExpense, setIsExpense] = useState(true);
  const [records, setRecords] = useState([]);

  const openModal = () => {
    document.getElementById("my_modal_4").showModal();
  };

  const closeModal = () => {
    document.getElementById("my_modal_4").close();
  };

  const addRecord = (e) => {
    e.preventDefault();
    const newRecord = {
      category: e.target.category.value,
      amount: e.target.amount.value,
      date: e.target.date.value,
      time: e.target.time.value,
      isExpense,
    };
    setRecords([newRecord, ...records]);
    closeModal();
  };

  const groupRecordsByDate = () => {
    const today = dayjs().format("YYYY-MM-DD");
    const yesterday = dayjs().subtract(1, "day").format("YYYY-MM-DD");

    const todayRecords = records.filter((record) => record.date === today);
    const yesterdayRecords = records.filter(
      (record) => record.date === yesterday
    );

    return { todayRecords, yesterdayRecords };
  };

  const { todayRecords, yesterdayRecords } = groupRecordsByDate();

  return (
    <div className="pb-10">
      <div className="w-full h-auto bg-white rounded-lg flex flex-col gap-6 p-6">
        <h1 className="text-2xl font-semibold">Records</h1>

        <button className="btn btn-primary" onClick={openModal}>
          Add Record
        </button>

        <dialog id="my_modal_4" className="modal">
          <div className="modal-box max-w-lg p-8 rounded-lg shadow-lg relative">
            <div className="flex justify-between items-center border-b pb-4 mb-4">
              <h3 className="text-xl font-bold">Add Record</h3>
              <button
                className="absolute top-4 right-4 text-lg"
                onClick={closeModal}
              >
                ✕
              </button>
            </div>

            <div className="flex items-center justify-center mb-6">
              <div className="bg-gray-200 rounded-full p-1 flex">
                <button
                  className={`${
                    isExpense
                      ? "bg-blue-600 text-white"
                      : "bg-transparent text-gray-600"
                  } w-[120px] h-10 rounded-full transition-all`}
                  onClick={() => setIsExpense(true)}
                >
                  Expense
                </button>
                <button
                  className={`${
                    !isExpense
                      ? "bg-green-600 text-white"
                      : "bg-transparent text-gray-600"
                  } w-[120px] h-10 rounded-full transition-all`}
                  onClick={() => setIsExpense(false)}
                >
                  Income
                </button>
              </div>
            </div>

            <form className="grid grid-cols-2 gap-6" onSubmit={addRecord}>
              <div className="col-span-2">
                <label className="block text-gray-600 mb-2">Amount</label>
                <input
                  type="text"
                  name="amount"
                  placeholder="$ 000.00"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="col-span-2">
                <label className="block text-gray-600 mb-2">Category</label>
                <input
                  type="text"
                  name="category"
                  placeholder="Category"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-600 mb-2">Date</label>
                <input
                  type="date"
                  name="date"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-600 mb-2">Time</label>
                <input
                  type="time"
                  name="time"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="col-span-2">
                <label className="block text-gray-600 mb-2">Note</label>
                <textarea
                  className="textarea textarea-bordered w-full"
                  name="note"
                  placeholder="Write here"
                ></textarea>
              </div>

              <div className="modal-action col-span-2 flex justify-end mt-4">
                <button
                  type="submit"
                  className={`${
                    !isExpense
                      ? "bg-green-600 text-white"
                      : "bg-blue-600 text-white"
                  } w-[120px] h-10 rounded-full transition-all`}
                >
                  Add Record
                </button>
              </div>
            </form>
          </div>
        </dialog>

        <div className="mt-6">
          {todayRecords.length > 0 && (
            <>
              <h2 className="text-lg font-bold">Today</h2>
              <div className="flex flex-col gap-4 mt-2">
                {todayRecords.map((record, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-4 bg-gray-100 rounded-md"
                  >
                    <div className="flex items-center gap-4">
                      <span className="bg-red-500 text-white p-2 rounded-full">
                        🍽️
                      </span>
                      <div>
                        <p className="font-semibold">{record.category}</p>
                        <p className="text-sm text-gray-500">{record.time}</p>
                      </div>
                    </div>
                    <div className="text-red-500 font-bold">
                      - $ {record.amount}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {yesterdayRecords.length > 0 && (
            <>
              <h2 className="text-lg font-bold mt-6">Yesterday</h2>
              <div className="flex flex-col gap-4 mt-2">
                {yesterdayRecords.map((record, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-4 bg-gray-100 rounded-md"
                  >
                    <div className="flex items-center gap-4">
                      <span className="bg-red-500 text-white p-2 rounded-full">
                        🍽️
                      </span>
                      <div>
                        <p className="font-semibold">{record.category}</p>
                        <p className="text-sm text-gray-500">{record.time}</p>
                      </div>
                    </div>
                    <div className="text-red-500 font-bold">
                      - $ {record.amount}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
