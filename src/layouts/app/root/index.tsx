import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Outlet } from 'react-router-dom';

export function DashboardLayout() {
  return (
    <div>
      <div className="min-h-screen flex flex-col bg-[#FFFAF0]">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
