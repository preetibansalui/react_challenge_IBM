import * as React from 'react'
import { Tile } from '@carbon/react';
import { useToppings } from './topping-utils';

export default function Category(props) {

    const { data } = props
    const toppings = useToppings(data)
    const groupedItems = toppings ? toppings.reduce((acc, item) => {
        if (item.category) {
            if (!acc[item.category]) {
                acc[item.category] = [];
            }
            acc[item.category].push(item);
        }
        return acc;
    }, {}) : {};

    const sortItemsAndCategories = (groupedItems) => {
        // Sort items alphabetically based on text
        for (const category in groupedItems) {
            groupedItems[category].sort((a, b) => a.text.localeCompare(b.text));
        }

        // Sort categories alphabetically
        return Object.entries(groupedItems)
            .sort((a, b) => a[0].localeCompare(b[0]))
            .reduce((acc, [category, items]) => {
                acc[category] = items;
                return acc;
            }, {});
    };

    const sortedData = sortItemsAndCategories(groupedItems)

    const isEmpty = Object.keys(groupedItems).length === 0

    return (
        <div className="categories-container">
            {isEmpty ? <div>No toppings selected</div> :
                Object.entries(sortedData).map(([category, items]) => (

                    <Tile key={category} id={category} className="category-column">
                        <h3>{category}</h3>
                        <ul>
                            {items.map(item => (
                                <li key={item.id}>{item.text}</li>
                            ))}
                        </ul>
                    </Tile>

                ))}
        </div>
    )
}