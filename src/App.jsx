import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';

function App() {
  return (
    <Routes>
      {routes.map(route => {
        const Page = route.component;
        return <Route key={route.path} path={route.path} element={<Page />} />;
      })}
    </Routes>
  );
}

export default App;
