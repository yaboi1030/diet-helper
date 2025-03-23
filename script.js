async function getInfo(barcodeId) {
    const url = `https://world.openfoodfacts.org/api/v0/product/${barcodeId}.json`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Example usage
getInfo("1234567890123").then(data => console.log(data));
