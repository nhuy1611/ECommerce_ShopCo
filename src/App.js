import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { BrandLogo } from './components/BrandLogo';
import { BrowseByStyle } from './components/BrowseByStyle';
import { Comments } from './components/Comments';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />     
      <BrandLogo />
      <BrowseByStyle />
      <Comments />
      <Footer />
    </div>
  );
}

export default App;