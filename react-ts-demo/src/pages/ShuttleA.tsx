import { useState } from 'react';
// 接口数据类型定义
interface Item {
    id: number;
    name: string;
}
const ShuttleA = () => {
    // 存放选择后的数据
    const [selectedItems, setSelectedItems] = useState<Item[]>([]);
    const [allItems, setAllItems] = useState<Item[]>([
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
        { id: 5, name: 'Item 5' },
    ]);
// 当前选择后的数据
    const handleSelectItem = (item: Item) => {
        setSelectedItems([...selectedItems, item]);
        setAllItems(allItems.filter((i) => i.id !== item.id));
    };
// 回退后的数据
    const handleDeselectItem = (item: Item) => {
        setSelectedItems(selectedItems.filter((i) => i.id !== item.id));
        setAllItems([...allItems, item]);
    };

    return (
        <div style={{display:'flex',justifyContent:'center'}}>
            <div>
                <h3>未选</h3>
                <ul>
                    {allItems.map((item) => (
                        <li key={item.id}>
                            {item.name}
                            <button onClick={() => handleSelectItem(item)}>选择</button>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3>已选</h3>
                <ul>
                    {selectedItems.map((item) => (
                        <li key={item.id}>
                            {item.name}
                            <button onClick={() => handleDeselectItem(item)}>回退</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default ShuttleA

