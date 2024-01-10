export const getUniqueCategories = (posts) => {
  const categorySet = new Set();
  posts.forEach(({ categories }) => categories.forEach((category) => categorySet.add(category)));
  return [...categorySet].sort((a, b) => {
    if (a === 'Önerilen') return -1;
    if (b === 'Önerilen') return 1;
    return 0;
  });
};
