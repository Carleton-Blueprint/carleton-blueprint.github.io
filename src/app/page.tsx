import Home from './(pages)/home/page';

export const revalidate = Number(process.env.REVALIDATION_INTERVAL) || 3600;

export default function App() {
  return <Home />;
}
