import pages from '~/data/paths.json';

// /* a function that generate unique id string of 16 chars including symbols*/
// function generateId() {
//   return Math.random().toString(36).slice(2, 16);
// }
// function generateList() {
//   let list = [...pages];
//   for (var i = 0; i < list.length; i++) {
//     list[i].id = generateId();
//   }
//   console.log('pages', JSON.stringilist);
//   return list;
// }

export function getPages() {
  return pages;
}

export function getPage(slug) {
  return pages.find((p) => p.slug === slug);
}
