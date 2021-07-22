import './App.css';
import Jobs from './components/Jobs';

const jobDatas = [{
  title: "Full Time Sales Associate - Sydney Boutique",
  contractType: "CDI",
  country: "Australie",
  city: "Sydney",
  color: "red"
}, {
  title: "Agent de sécurité - Pantin",
  contractType: "CDI",
  country: "France",
  city: "Pantin",
  color: "green"
}, {
  title: "Responsable d'Atelier (H/F)",
  contractType: "CDD",
  country: "France",
  city: "Paris",
  color: "yellow"
}, {
  title: "Chef de Projets",
  contractType: "CDD",
  country: "France",
  city: "Paris",
  color: "blue"
}, {
  title: "Développeur React.js",
  contractType: "CDI",
  country: "France",
  city: "Paris",
  color: "pink"
}, {
  title: "Sales Associate Stockholm",
  contractType: "CDI",
  country: "Suède",
  city: "Stockholm",
  color: "red"
}, {
  title: "Vendeur/se - Crans Montana",
  contractType: "CDI",
  country: "Suisse",
  city: "Crans-Montana",
  color: "green"
}, {
  title: "CRM & Data Quality Analyst",
  contractType: "CDI",
  country: "USA",
  city: "New York",
  color: "yellow"
}, {
  title: "Infirmer (H/F)",
  contractType: "CDI",
  country: "France",
  city: "pantin",
  color: "blue"
},
]

const App = () => {
  return (
    <div className="App">
      <header><h1>The Job Board</h1></header>
      <Jobs jobDatas={jobDatas} />
      <footer>Made with React at Le Reacteur By Jojo</footer>
    </div>
  );
}

export default App;
