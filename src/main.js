import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const imageResults = document.getElementById('image-results');

const API_KEY = '47345734-08f76e4fa789f0ddb3136f311'; // Замініть на ваш унікальний ключ

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const query = searchInput.value.trim();
    const regex = /^[a-zA-Z0-9\s]+$/;
    if (!query || !regex.test(query)) {
        iziToast.error({
            title: 'Error',
            message: 'Invalid search query. Please enter a valid search term.',
        });
        return;
    }

    try {
        const response = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`);
        const data = await response.json();

        if (data.hits.length === 0) {
            iziToast.error({
                title: 'Sorry',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                backgroundColor: 'red',
                position: 'center',
                timeout: 5000,
            });
            return;
        }

        displayImages(data.hits);
    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: `An error occurred: ${error.message}`,
        });
    }
});

function displayImages(images) {
    imageResults.innerHTML = images.map(image => `
        <div class="image-item">
            <img src="${image.webformatURL}" alt="${image.tags}">
        </div>
    `).join('');
}
