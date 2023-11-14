// Завдання Зробити запит до https://swapi.py4e.com/api/ і отримати список планет, вивести у консоль.
// Результат: вивести у консоль список планет у форматі:
// [{ name: 'Tatooine', rotation_period: '23', ... }, { name: 'Alderaan', rotation_period: '24', ... }, ... ]

async function getPlanets() {
    try {
        const response = await fetch('https://swapi.py4e.com/api/planets');

        if (!response.ok) {
            throw new Error(`Failed with status code: ${response.status}`);
        }

        const data = await response.json();
        const planets = data.results.map(planet => {
            const { name, rotation_period, orbital_period, diameter, climate, gravity, terrain, population } = planet;
            return { name, rotation_period, orbital_period, diameter, climate, gravity, terrain, population };
        });

        console.log('List of planets:', planets);
    } catch (error) {
        console.error('Request Error:', error);
    }
}

getPlanets();
