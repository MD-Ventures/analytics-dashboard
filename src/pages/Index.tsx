import { DollarSign, ShoppingBag, Users, TrendingUp } from "lucide-react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import StatsCard from "../components/dashboard/StatsCard";
import RevenueChart from "../components/dashboard/RevenueChart";
import RecentOrders from "../components/dashboard/RecentOrders";

const Index = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$54,239",
      change: "+12.5% from last month",
      isPositive: true,
      icon: DollarSign
    },
    {
      title: "Total Orders",
      value: "1,759",
      change: "+8.1% from last month",
      isPositive: true,
      icon: ShoppingBag
    },
    {
      title: "Total Customers",
      value: "978",
      change: "+15.3% from last month",
      isPositive: true,
      icon: Users
    },
    {
      title: "Conversion Rate",
      value: "2.4%",
      change: "-3.2% from last month",
      isPositive: false,
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <Sidebar />
      <div className="pl-64">
        <Header />
        <main className="p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold mb-2">Dashboard</h1>
            <p className="text-secondary">Welcome back, John!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
          
          <div className="mb-8">
            <RevenueChart />
          </div>
          
          <div>
            <RecentOrders />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;