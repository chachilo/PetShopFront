import React, { useState, useMemo } from 'react';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Footer from './components/Footer';
import FilterSidebar from './components/FilterSidebar';
import { products } from './data/products';
import { Product } from './types';
import { Filter } from 'lucide-react';

type ViewMode = 'home' | 'products' | 'product-detail';

function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.reverse();
        break;
      default:
        // Featured - keep original order
        break;
    }

    return filtered;
  }, [products, searchQuery, selectedCategory, priceRange, sortBy]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setViewMode('product-detail');
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setViewMode('products');
  };

  const handleShopNowClick = () => {
    setViewMode('products');
  };

  const handleBackToHome = () => {
    setViewMode('home');
    setSelectedCategory('');
    setSearchQuery('');
  };

  const handleCloseProductDetail = () => {
    setViewMode('products');
    setSelectedProduct(null);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header
          onCartClick={() => setIsCartOpen(true)}
          onSearchChange={setSearchQuery}
          searchQuery={searchQuery}
          isMenuOpen={isMenuOpen}
          onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
        />

        {viewMode === 'home' && (
          <>
            <Hero onShopNowClick={handleShopNowClick} />
            <CategoryGrid onCategoryClick={handleCategoryClick} />
            
            {/* Featured Products */}
            <div className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    Featured Products
                  </h2>
                  <p className="mt-4 text-lg text-gray-600">
                    Discover our most popular items loved by pets and their owners
                  </p>
                </div>
                <ProductGrid
                  products={products.slice(0, 8)}
                  onProductClick={handleProductClick}
                />
                <div className="text-center mt-12">
                  <button
                    onClick={handleShopNowClick}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    View All Products
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {viewMode === 'products' && (
          <div className="py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <button
                    onClick={handleBackToHome}
                    className="text-blue-600 hover:text-blue-800 font-medium mb-2"
                  >
                    ← Back to Home
                  </button>
                  <h1 className="text-3xl font-bold text-gray-900">
                    {selectedCategory ? 
                      `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Products` : 
                      'All Products'
                    }
                  </h1>
                  <p className="text-gray-600 mt-1">{filteredProducts.length} products found</p>
                </div>
                <button
                  onClick={() => setIsFilterOpen(true)}
                  className="lg:hidden flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </button>
              </div>

              <div className="flex gap-8">
                {/* Desktop Filters */}
                <div className="hidden lg:block w-64 flex-shrink-0">
                  <FilterSidebar
                    isOpen={true}
                    onClose={() => {}}
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                    priceRange={priceRange}
                    onPriceRangeChange={setPriceRange}
                    sortBy={sortBy}
                    onSortByChange={setSortBy}
                  />
                </div>

                {/* Products Grid */}
                <div className="flex-1">
                  <ProductGrid
                    products={filteredProducts}
                    onProductClick={handleProductClick}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Product Detail Modal */}
        {viewMode === 'product-detail' && selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            onClose={handleCloseProductDetail}
          />
        )}

        {/* Cart Sidebar */}
        <Cart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
        />

        {/* Mobile Filter Sidebar */}
        <FilterSidebar
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
          sortBy={sortBy}
          onSortByChange={setSortBy}
        />

        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;