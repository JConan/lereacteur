import './App.css';
import AboutMe from './components/AboutMe';
import Item from './components/Item';
import NavigationMenu from './components/NavigationMenu';

const App = () =>
    <div className="App">
        <header className="Header">
            <h1>My Blog</h1>
            <div>An awesome baseline</div>
        </header>
        <NavigationMenu />
        <div className="Content">
            <div className="MainContent">
                <Item />
                <Item />
            </div>
            <div className="SideContent">
                <AboutMe />
            </div>
        </div>
        <footer>Made with <b>React</b> at <b>Le Reacteur</b> By <b>Jojo</b></footer>
    </div>

export default App;
