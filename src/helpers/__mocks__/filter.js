const fakeData = [
  {
    "id": 1,
    "name": "Mr. Meeseeks",
  }
];


export default async function filterByName(keyword = "") {
  return await new Promise(resolve => {
    resolve(fakeData.filter(user => user.name.toLowerCase().includes(keyword.toLowerCase())))
  });
}