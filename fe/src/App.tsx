import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { HomePage } from './pages/HomePage';

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden">
      <SiteHeader />
      <HomePage />
      <SiteFooter />
    </main>
  );
}
