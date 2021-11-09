import React from 'react';

const Filter = ({
    onCheckGreased, 
    showGreased,
    onChangeSortBy,
    sortBy
    }) => {
    return (
        <div className="ui menu">
            <div className="ui item">
                <label>Sort by</label>
            </div>
            <div className="ui item">
                <select 
                    className="ui selection dropdown"
                    name="sort"
                    onChange={(e) => onChangeSortBy(e.target.value)}
                    value={sortBy}
                >
                    <option value="name">Name</option>
                    <option value="weight">Weight</option>
                    
                </select>
            </div>
            <div className="ui item">
                <label>Greased Pigs Only?</label>
            </div>
            <div className="ui item">
                <input
                    className="ui toggle checkbox"
                    checked={showGreased}
                    onChange={(e) => onCheckGreased(e.target.checked)}
                    type="checkbox"
                />
            </div>
        </div>
    );
}

export default Filter;
