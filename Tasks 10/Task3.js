// Дано: Функція яка приймає назва місяця у 
// форматі = "DECEMBER" | "FEBRUARY" | "JULY" і тд.

// Результат: Вивести у консоль назву
//  пори року якій відповідає даний місяць. “summer” | “autumn” | “winter” | “spring”.

function printSeasonByMonth(month) {
    const monthToSeason = {
        "JANUARY": "winter",
        "FEBRUARY": "winter",
        "MARCH": "spring",
        "APRIL": "spring",
        "MAY": "spring",
        "JUNE": "summer",
        "JULY": "summer",
        "AUGUST": "summer",
        "SEPTEMBER": "autumn",
        "OCTOBER": "autumn",
        "NOVEMBER": "autumn",
        "DECEMBER": "winter",
    };

    const season = monthToSeason[month.toUpperCase()];

    if (season) {
        console.log(season);
    } else {
        console.log("Invalid month");
    }
}

printSeasonByMonth("SEPTEMBER");
printSeasonByMonth("NOVEMBER");
printSeasonByMonth("JULY");
printSeasonByMonth("APRIL");