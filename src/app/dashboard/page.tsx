import LayoutPage from '@/app/dashboard/components/Layout_Page';
import './style.css';
import { FiltersDashboardProvider } from '../../contexts/Filters_Dashboard_Context';

export default function DashboardPage() {
  return (
    <FiltersDashboardProvider>
      <LayoutPage />
    </FiltersDashboardProvider>
  );
}
