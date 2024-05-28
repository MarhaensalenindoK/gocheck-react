import { useState } from "react";
import Item from "./Item";

function Checklist({
    items: listItems,
    onDeleteItem,
    onToggleItem,
    onClearItems,
}) {
    const [sortBy, setSortBy] = useState("input");

    function sortItems() {
        switch (sortBy) {
            case "title":
                return [...listItems].sort((a, b) =>
                    a.title.localeCompare(b.title)
                );
            case "status":
                return [...listItems].sort(
                    (a, b) => Number(a.done) - Number(b.done)
                );
            case "input":
            default:
                return [...listItems];
        }
    }

    const items = sortItems();

    return (
        <div className="list">
            <ul>
                {items.map((item) => (
                    <Item
                        key={item.id}
                        item={item}
                        onDeleteItem={onDeleteItem}
                        onToggleItem={onToggleItem}
                    />
                ))}
            </ul>
            <div className="actions">
                <select
                    name="filter"
                    id="filter"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="input">Urutkan berdasarkan input</option>
                    <option value="title">Urutkan berdasarkan title</option>
                    <option value="status">Urutkan berdasarkan status</option>
                </select>
                {listItems.length > 0 && (
                    <button onClick={onClearItems}>Hapus</button>
                )}
            </div>
        </div>
    );
}

export default Checklist;
