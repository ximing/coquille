import alfy from 'alfy';

const data: any = await alfy.fetch('https://jsonplaceholder.typicode.com/posts');
console.log('data',data)
const items = alfy.inputMatches(data, 'title').map((element) => ({
  title: element.title,
  subtitle: element.body,
  arg: element.id,
  query: element.title,
}));

alfy.output(items);
