const orders = [
  {
    id: '#12345',
    customer: 'John Smith',
    product: 'Nike Air Max',
    amount: '$299.00',
    status: 'Completed'
  },
  {
    id: '#12346',
    customer: 'Sarah Johnson',
    product: 'Adidas Ultra Boost',
    amount: '$189.00',
    status: 'Pending'
  },
  {
    id: '#12347',
    customer: 'Michael Brown',
    product: 'Puma RS-X',
    amount: '$129.00',
    status: 'Processing'
  },
];

const RecentOrders = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Recent Orders</h2>
        <button className="text-primary text-sm">View All</button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-secondary border-b">
              <th className="pb-4">Order ID</th>
              <th className="pb-4">Customer</th>
              <th className="pb-4">Product</th>
              <th className="pb-4">Amount</th>
              <th className="pb-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b last:border-b-0">
                <td className="py-4">{order.id}</td>
                <td className="py-4">{order.customer}</td>
                <td className="py-4">{order.product}</td>
                <td className="py-4">{order.amount}</td>
                <td className="py-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    order.status === 'Completed' ? 'bg-green-100 text-green-600' :
                    order.status === 'Pending' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-blue-100 text-blue-600'
                  }`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;