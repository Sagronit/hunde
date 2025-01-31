import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App2 from "./components/AppContent";
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <App2 />
    </QueryClientProvider>
  );
}
