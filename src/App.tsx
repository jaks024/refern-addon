import { QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './features/auth/AuthProvider';
import { queryClient } from './libs/reactQuery';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative w-80 h-80 overflow-hidden bg-neutral-900 text-amber-50">
        <AuthProvider />
      </div>
    </QueryClientProvider>
  );
}

export default App;
