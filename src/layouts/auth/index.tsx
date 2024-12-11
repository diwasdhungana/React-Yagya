import { PiArrowLeft as GoBackIcon } from 'react-icons/pi';
import { Outlet, useNavigate } from 'react-router-dom';
import demoImg from '@/assets/app-demo.webp';

export function AuthLayout() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Outlet />;
    </div>
  );
}
