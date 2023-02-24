const totalCategories = document.querySelectorAll(`#categories .item`);
console.log(`Number of categories: ${totalCategories.length}`); 
// console.log('Number of categories:', totalCategories.length);

const categories = totalCategories.forEach(category => {
    const titleName = category.children;
    console.log('Category:', titleName[0].textContent);
    console.log('Elements:', titleName[1].children.length);
});


