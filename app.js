const imageUrls = [
    'https://t3.ftcdn.net/jpg/01/35/13/46/360_F_135134679_Y85F9czGygCPbFymDgRqtBHIURhsPVbn.jpg',
    'https://img.delicious.com.au/UgaSznzd/del/2016/08/neist-point-isle-of-skye-34573-2.jpg',
    'https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2024/06/04/dunrobin-castle--gardens-header.jpg',
    'https://images.contentstack.io/v3/assets/blt00454ccee8f8fe6b/blt6e360e039b884b87/61406dc33ddac33aa484ddc3/UK_Wales_UK_Header.jpg',
];

// Function to change the image
function changeImage() {
    // Get the image element by its ID
    const imageElement = document.getElementById('london');

    // Select a random image URL from the array
    const randomIndex = Math.floor(Math.random() * imageUrls.length);

    // Change the src attribute of the image
    imageElement.src = imageUrls[randomIndex];
}