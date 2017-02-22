import api from 'db/api/movie';

async function test() {
  for (let key in api) {
    const { subjects } = await api[key]();
    console.log(key, subjects);
  }
}

test();
