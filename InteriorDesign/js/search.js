// Sample data for your home decor items
let items = [
    { name: "Sofa Set", url: "../htmlpages/product.html" },
    { name: "Dining Table", url: "dining_table.html" },
    { name: "Coffee Table", url: "coffee_table.html" },
    { name: "Recliner Chair", url: "recliner_chair.html" },
    { name: "Bookshelf", url: "bookshelf.html" },
    { name: "TV Stand", url: "tv_stand.html" },
    { name: "Bed Frame", url: "bed_frame.html" },
    { name: "Armchair", url: "armchair.html" },
    { name: "Wardrobe", url: "wardrobe.html" },
    { name: "Outdoor Patio Set", url: "patio_set.html" }
];

function searchFunction() {
    // Get the input value
    let input = document.getElementById('searchBar').value.toLowerCase();
    
    // Get the results container
    let resultsContainer = document.getElementById('searchResults');
    
    // Clear previous results
    resultsContainer.innerHTML = '';

    // Filter and display matching items
    let filteredItems = items.filter(item => item.name.toLowerCase().includes(input));

    // Show results or a message if no matches found
    if (filteredItems.length > 0) {
        filteredItems.forEach(item => {
            let resultDiv = document.createElement('div');
            resultDiv.classList.add('result-item');
            resultDiv.textContent = item.name;
            resultDiv.onclick = () => window.location.href = item.url; // Redirect to the specific page
            resultsContainer.appendChild(resultDiv);
        });
    } else if (input !== '') {
        resultsContainer.innerHTML = '<p>No matching items found</p>';
    }
}
