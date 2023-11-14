// Отримати список вказаних альбомів, вказуючи їхні id.
// Для цього потрібно використати ресурс /albums.
// Щоб отримати альбом з id - 5, можна використати ендпоінт /albums/5
// Але дане API не надає можливості вказати декілька id альбомів щоб отримати ці альбоми в одному запиті
// Тому потрібно робити декілька запитів якщо хочемо отримати декілька альбомів
// Написати функцію getAlbum(id), яка буде приймати id альбому який потрібно отримати.
// функція getAlbum повинна повертати проміс, який у разі успішного виконання повертає дані альбому
// Написати функцію getSpecifiedAlbums(ids = []), яка буде приймати масив ids з значеннями 
// id для альбомів які потрібно отримати функція getSpecifiedAlbums() повинна повертати проміс,
// який у разі успішного виконання повертає масив вказаних альбомів
// Щоб getSpecifiedAlbums виконувалась швидше, усі запити на отримання певного альбому повинні 
// виконуватись паралельно
// У разі успішного виконання промісу з getSpecifiedAlbums, вивести у консоль результат.

const baseUrl = "https://jsonplaceholder.typicode.com";

function getAlbum(id) {
    const albumUrl = `${baseUrl}/albums/${id}`;
    return fetch(albumUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        });
}

function getSpecifiedAlbums(ids = []) {
    const albumPromises = ids.map(id => getAlbum(id));
    return Promise.all(albumPromises);
}

const albumIds = [1, 2, 3, 4, 5];

getSpecifiedAlbums(albumIds)
    .then(albums => {
        console.log('Specified albums:', albums);
    })
    .catch(error => {
        console.error('Error getting specified albums:', error);
    });
