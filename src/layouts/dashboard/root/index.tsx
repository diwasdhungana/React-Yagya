import { Outlet } from 'react-router-dom';

export function DashboardLayout() {
  return (
    <div>
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
