const mornings = ['do some exercises', 'have breakfast', 'read the news', 'morning run'];
const daytimes = ["get one hour's sleep", 'do the cleaning', 'arrange a walk for yourself', 'find an interesting book'];
const evenings = ['watch the movie', 'play board games', 'explore the starry sky'];

const randomNumber = arr => Math.floor(Math.random() * (arr.length));

const randomChoice = (morning, daytime, evening) => {
    return `Morning: ${mornings[morning]} \nDaytime: ${daytimes[daytime]} \nEvenings: ${evenings[evening]}`;
}
console.log(randomChoice(randomNumber(mornings),randomNumber(daytimes),randomNumber(evenings)))