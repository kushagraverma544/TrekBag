import BackgroundImage from "./component/BackgroundImage";
import Footer from "./component/Footer";
import HeaderComponent from "./component/Header/HeaderComponent";
import ItemListComponent from "./component/ItemList/ItemListComponent";
import SidebarComponent from "./component/Sidebar/SidebarComponent";
import ItemListContextProvider from "./contexts/ItemListContextProvider";
import "./resources/index.css";

function App() {
  return (
    <>
      <BackgroundImage />

      <ItemListContextProvider>
        <main>
          <HeaderComponent />
          <ItemListComponent />
          <SidebarComponent />
        </main>
      </ItemListContextProvider>

      <Footer />
    </>
  );
}

export default App;
