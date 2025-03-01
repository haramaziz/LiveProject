document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            name: 'Product 1',
            price: '$100',
            rating: '4.5',
            weight: '1kg'
        },
        {
            name: 'Product 2',
            price: '$150',
            rating: '4.0',
            weight: '1.2kg'
        },
        {
            name: 'Product 3',
            price: '$200',
            rating: '5.0',
            weight: '1.5kg'
        }
    ];

    const features = ['price', 'rating', 'weight'];
    const tableBody = document.getElementById('comparisonTableBody');

    features.forEach(feature => {
        const row = document.createElement('tr');
        const featureCell = document.createElement('td');
        featureCell.textContent = feature.charAt(0).toUpperCase() + feature.slice(1);
        row.appendChild(featureCell);

        products.forEach(product => {
            const cell = document.createElement('td');
            cell.textContent = product[feature];
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });
});
