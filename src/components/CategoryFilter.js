import React from 'react';

const Categories = [ 'Bussiness', 'Tecnology', 'Entertainment' ]

const CategoryFilter = ({ selectedCategory, onSelectCategory }) => {
    return (
        <div className="flex justify-center my-4">
            {Categories.map(category => (
                <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={`px-4 py-2 mx-1 ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}
                    rounded-lg`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;