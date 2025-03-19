document.getElementById('generate-joke').addEventListener('click', function () {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://v2.jokeapi.dev/joke/Any?type=single', true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById('joke-container').textContent = response.joke || 'No joke available!';
        } else {
            document.getElementById('joke-container').textContent = 'Failed to fetch joke. Please try again.';
        }
    };

    xhr.onerror = function () {
        document.getElementById('joke-container').textContent = 'Network error. Please check your connection.';
    };

    xhr.send();
});