const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const createImageItemsList = document.querySelector("#gallery");

// const imagesItems = images.map((option) => {
//   const imageEl = document.createElement("img");

//   imageEl.src = option.url;
//   imageEl.alt = option.alt;

//   createImageItemsList.insertAdjacentHTML(
//     "afterbegin",
//     "<li>`${imageEl}`</li>"
//   );
// });

// console.log(imagesItems);

// createImageItemsList.append(...imagesItems);

const addList = function (items) {
  return items.map((item) => {
    return `<li><img src=${item.url} alt=${item.alt} width=800 height=600/></li>`;
  });
};

// createImageItemsList.insertAdjacentHTML(
//   "afterbegin",
//   "<li>`${imagesItems}`</li>"
// );

// console.log(insertInLi(imagesItems));
// console.log(imagesItems);
// var text = liItems(images);
// createImageItemsList.append(...imagesItems);
createImageItemsList.insertAdjacentHTML("afterbegin", addList(images));
