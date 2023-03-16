const userName = (prompt('введите Ваше имя:'));
greetings(userName);
function greetings(name) {
    console.log(`Доброго времени суток, ${name}`);
}