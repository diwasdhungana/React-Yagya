import { Outlet } from 'react-router-dom';

export function ChatLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Outlet />;
    </div>
  );
}
