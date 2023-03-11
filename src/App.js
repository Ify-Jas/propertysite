import Footer from './components/footer';
import Home from './pages/home';
import Company from './pages/company';
import Team from './pages/team';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Services from './pages/services';
import Sidebarmain from './components/sidebar';

import { ProSidebarProvider, Sidebar } from 'react-pro-sidebar';
import { Routes, Route } from 'react-router-dom' 

function App() {
  return (
    <ProSidebarProvider>
       <Sidebarmain />

       <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/company'} element={<Company />} />
          <Route path={'/team'} element={<Team />} />
          <Route path={'/services'} element={<Services />} />
          <Route path={'/projects'} element={<Projects />} />
          <Route path={'/contact'} element={<Contact />} />
       </Routes>

       <Footer />
    </ProSidebarProvider>
  );
}

export default App;
