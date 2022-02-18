import ShoppingList from './views/ShoppingList/ShoppingList';
import ItemsProvider from './context/ItemsContext';
import Header from './components/Header';

export default function App() {
  return (
    <div>
      <ItemsProvider>
        <Header />
        <ShoppingList />
      </ItemsProvider>
    </div>
  );
}
