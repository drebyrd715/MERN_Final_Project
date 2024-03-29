import styles from './JewelryListItem.module.css'

export default function JewelryListItem({ jewelryItem, handleAddToOrder }) {
  return (
    <div className={styles.JewelryListItem}>
      <div className={styles.image + ' ' + 'flex-ctr-ctr'}><img src = {jewelryItem.image}
      className={styles.JewlsPic}/></div>
      <div className={styles.name}>{jewelryItem.name}</div>
      <div className={styles.buy}>
        <span>${jewelryItem.price.toFixed(2)}</span>
        <button className="add" onClick={() => handleAddToOrder(jewelryItem._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}