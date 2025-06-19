import React from 'react';
import { categories } from '../data/products';

interface CategoryGridProps {
  onCategoryClick: (category: string) => void;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ onCategoryClick }) => {
  const getCategoryIcon = (iconName: string) => {
    const icons: { [key: string]: string } = {
      dog: '🐕',
      cat: '🐱',
      bird: '🐦',
      fish: '🐠',
      rabbit: '🐰'
    };
    return icons[iconName] || '🐾';
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Shop by Category
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Find exactly what your pet needs from our specialized collections
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryClick(category.id)}
              className="group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 border border-gray-200"
            >
              <div className="text-center">
                <div className="text-4xl mb-3">
                  {getCategoryIcon(category.icon)}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {category.count} products
                </p>
              </div>
              <div className="absolute inset-0 rounded-xl bg-blue-600 opacity-0 group-hover:opacity-5 transition-opacity"></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryGrid;