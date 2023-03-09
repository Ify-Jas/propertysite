import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Company from './pages/company';
import Team from './pages/team';
import Projects from './pages/projects';
import Contact from './pages/contact';

import { ProSidebarProvider } from 'react-pro-sidebar';
import { Routes, Route } from 'react-router-dom' 

function App() {
  return (
    <ProSidebarProvider>
       <Header />

       <Routes>
          <Route path={'/home'} element={<Home />} />
          <Route path={'/company'} element={<Company />} />
          <Route path={'/team'} element={<Team />} />
          <Route path={'/projects'} element={<Projects />} />
          <Route path={'/contact'} element={<Contact />} />
       </Routes>

       <Footer />
    </ProSidebarProvider>
  );
}

export default App;
