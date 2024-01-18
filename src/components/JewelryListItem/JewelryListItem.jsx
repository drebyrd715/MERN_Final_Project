import styles from './JewelryListItem.module.css'

export default function JewelryListItem({ jewelryItem, handleAddToOrder }) {
  return (
    <div className={styles.JewelryListItem}>
      <div className={styles.emoji + ' ' + 'flex-ctr-ctr'}>{jewelryItem.emoji}</div>
      <div className={styles.name}>{jewelryItem.name}</div>
      <div className={styles.buy}>
        <span>${jewelryItem.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(jewelryItem._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}