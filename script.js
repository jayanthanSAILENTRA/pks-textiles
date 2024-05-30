document.addEventListener('DOMContentLoaded', () => {
  // Select category links and product elements
  const categoryLinks = document.querySelectorAll('#categories ul li a');
  const products = document.querySelectorAll('.product');

  // Add click event listeners to category links
  categoryLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const category = this.textContent.toLowerCase();
      filterProducts(category);
    });
  });

  // Function to filter products by category
  function filterProducts(category) {
    products.forEach(product => {
      const productCategory = product.dataset.category;
      if (category === 'all' || productCategory === category) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  }

  // Product detail alert
  products.forEach(product => {
    product.addEventListener('click', () => {
      const productName = product.querySelector('h3').textContent;
      const productDescription = product.querySelector('p').textContent;
      alert(`Product: ${productName}\nDescription: ${productDescription}`);
    });
  });
});
