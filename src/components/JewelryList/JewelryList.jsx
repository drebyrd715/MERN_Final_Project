import styles from './JewelryList.module.css';
import JewelryListItem from '../JewelryListItem/JewelryListItem';

export default function JewelryList({ jewelryItems, handleAddToOrder }) {
  const items = jewelryItems.map(item =>
    <JewelryListItem
      key={item._id}
      handleAddToOrder={handleAddToOrder}
      jewelryItem={item}
    />
  );
  return (
    <main className={styles.JewelryList}>
      {items}
    </main>
  );
}