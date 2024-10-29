import React from 'react';
import { DollarSign, Clock } from 'lucide-react';

interface LunchBalanceProps {
  student: {
    name: string;
    lunchBalance: number;
  };
}

const LunchBalance: React.FC<LunchBalanceProps> = ({ student }) => {
  return (
    <div className="col-span-4 bg-white rounded-xl shadow-sm p-6 border border-gray-200">
      <h3 className="text-xl font-bold mb-6 text-black">Lunch Account</h3>
      
      <div className="bg-[#f8d000] bg-opacity-20 p-4 rounded-lg mb-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-black">Current Balance</p>
            <p className="text-2xl font-bold text-black">${student.lunchBalance.toFixed(2)}</p>
          </div>
          <DollarSign className="w-8 h-8 text-black" />
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-semibold text-black">Recent Transactions</h4>
        {[
          { date: "Mar 15", item: "Lunch", amount: -4.50 },
          { date: "Mar 14", item: "Lunch", amount: -4.50 },
          { date: "Mar 13", item: "Balance Added", amount: 50.00 }
        ].map((transaction, index) => (
          <div key={index} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-gray-400" />
              <div>
                <p className="font-medium text-black">{transaction.item}</p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
            </div>
            <span className={transaction.amount > 0 ? "text-black" : "text-gray-600"}>
              {transaction.amount > 0 ? "+" : ""}{transaction.amount.toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <button className="w-full bg-black text-[#f8d000] py-2 rounded-lg hover:bg-gray-900 transition-colors">
          Add Funds
        </button>
      </div>
    </div>
  );
};

export default LunchBalance;