import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import Stats from "./components/Stats";
import Checklist from "./components/Checklist";

function App() {
    const [listItems, setListItems] = useState([]);

    function handleAddItem(item) {
        setListItems((prev) => [...prev, item]);
    }

    function handleDeleteItem(id) {
        setListItems((prev) => prev.filter((item) => item.id !== id));
    }

    function handleToogleItem(id) {
        setListItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, done: !item.done } : item
            )
        );
    }

    function handleClearItems() {
        const confirm = window.confirm(
            "Kamu yakin ingin menghapus semua catatan?"
        );

        if (!confirm) return;

        setListItems([]);
    }

    return (
        <div className="App">
            <Logo />
            <Form onAddItem={handleAddItem} />
            <Checklist
                items={listItems}
                onDeleteItem={handleDeleteItem}
                onToggleItem={handleToogleItem}
                onClearItems={handleClearItems}
            />
            <Stats items={listItems} />
        </div>
    );
}

export default App;
