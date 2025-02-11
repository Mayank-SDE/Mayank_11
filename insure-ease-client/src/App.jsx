import AppRoutes from './routes/AppRoutes';
import Navbar from './components/common/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRoutes />
    </div>
  );
};

export default App;
