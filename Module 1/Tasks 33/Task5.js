// Написати функцію яка буде використовувати попередньо написану функцію fetchSWAPI,
// ця функція повинна робити запити щоб отримати дані людини з вказаним ім'ям,
// після цього на основі отриманої відповіді паралельно отримати деталі фільмів у яких людина з'явилась.
// Функція повинна повертати об'єкт з ім'ям людини та списком з деталями фільмів у форматі:
//  {name: ‘’, films: [{title: ‘’, episode_id: ‘’, ...}, ...]}

// Приклад результату:

// lukeFilms  { name: "Luke Skywalker", films: [{ title: "A New Hope", episode_id: 4, ... }] }
// kenobiFilms  { name: "Obi-Wan Kenobi", films: [{ title: "A New Hope", episode_id: 4, ... }] }

async function fetchSWAPI(resource, throwError = false) {
    const rootUrl = 'https://swapi.py4e.com/api/';

    try {
        const apiUrl = resource.startsWith('http') ? resource : rootUrl + resource;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Failed with status code: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`${resource}  fetchSWAPI error `, error);

        if (throwError) {
            throw error;
        }

        return undefined;
    }
}

async function getPersonFilms(name) {
    try {
        const personData = await fetchSWAPI(`people/?search=${name}`);
        if (!personData || personData.results.length === 0) {
            throw new Error(`Person with name '${name}' not found`);
        }

        const person = personData.results[0];
        const filmsPromises = person.films.map(filmUrl => fetchSWAPI(filmUrl));

        const films = await Promise.all(filmsPromises);

        const filmsDetails = films.map(film => ({
            title: film.title,
            episode_id: film.episode_id,
        }));

        return { name: person.name, films: filmsDetails };
    } catch (error) {
        console.error(`Error getting films for ${name}`, error);
        return undefined;
    }
}

async function testGetPersonFilms() {
    try {
        const lukeFilms = await getPersonFilms("Luke");
        console.log("lukeFilms ", lukeFilms);

        const kenobiFilms = await getPersonFilms("Kenobi");
        console.log("kenobiFilms ", kenobiFilms);
    } catch (error) {
        console.error("testGetPersonFilms error ", error);
    }
}

testGetPersonFilms();
