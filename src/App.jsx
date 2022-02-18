import ShoppingList from './views/ShoppingList/ShoppingList';
import ItemsProvider from './context/ItemsContext';
import Header from './components/Header/Header';
import styles from './App.css';

const { mainContainer } = styles;

export default function App() {
  return (
    <div className={mainContainer}>
      <ItemsProvider>
        <Header />
        <ShoppingList />
      </ItemsProvider>
    </div>
  );
}
