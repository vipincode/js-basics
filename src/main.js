const countries = ['Nigeria', 'UK', 'Netherlands', 'Canada', 'USA', 'Norway'];

const countriesThatStartWithN = countries.filter((country) => !country.startsWith('N'));

console.log(countriesThatStartWithN);
