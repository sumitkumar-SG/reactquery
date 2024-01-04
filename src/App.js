import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Header from './components/Header';
import Home from './components/Home';
import SuperHeroes from './components/SuperHeroes';
import RQSuperHeroes from './components/RQSuperHeroes';
import RQSuperHeroesFetch from './hooks/useFetchList';
import { RQSuperHero } from './components/RQSuperHero';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <Header />
      <Routes>
        <Route path="/rq-super-hero/:heroId" element={<RQSuperHero />} />
        <Route path="/" element={<Home />} />
        <Route path="/super-heroes" element={<SuperHeroes />} />
        <Route path="/rq-super-heroes" element={< RQSuperHeroes/>} />
        <Route path="/fetch-list" element={<RQSuperHeroesFetch />} />
      </Routes>
    </Router>
    <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
  );
}

export default App;
