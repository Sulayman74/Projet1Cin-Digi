function getCookieFav() {
  const value = `; ${document.cookie}`;
  console.log(value);
  const parts = value.split(`; MesFavoris=`);

  if (parts.length > 1) {
    const object = JSON.parse(parts.pop().split(";").shift());
    return object;
  } else {
    return [];
  }
}

function setCookie(value) {
  const d = new Date();

  let currentArray = getCookieFav();

  d.setTime(d.getTime() + 30 * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();

  currentArray.push(value);
  document.cookie =
    "MesFavoris=" +
    JSON.stringify(currentArray) +
    ";" +
    expires +
    ";path=/;Secure";
}

function clearCookie() {
  const d = new Date();

  d.setTime(d.getTime() + 30 * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie =
    "MesFavoris=" + JSON.stringify([]) + ";" + expires + ";path=/;Secure";
}

let Hearts = document.querySelectorAll(".Coeur");
// console.log(Hearts);

// let myFavs = document.getElementsByName('Heart');
// console.log(myFavs);

// Hearts.forEach(MonFavoris => {
//     MonFavoris.addEventListener('click',() => {
// Hearts.classList.add("ActiveJs");
//     });

// });

Hearts.forEach((Heart) => {
  Heart.addEventListener("click", () => {
   setCookie(Heart.getAttribute('nbVignette'));
   Heart.classList.add("ActiveJs");
console.log(Heart);
  });
});

const btnArrow = document.querySelector('.BtnUp');
// const DesactiveArrow = document.querySelector('.Menu_Burger')
btnArrow.addEventListener('click', () => {
  btnArrow.classList.add("Active")
  window.scrollTo({
    top: 200,
    behavior: "smooth"
  });
});
btnArrow.addEventListener('mouseleave', () => {
  btnArrow.classList.remove("Active")
});


// nextElementSibling
// previousElementSibling
//

// Hearts.addEventListener ('click', (e) => {
//     console.log(e.target.getAttribute('nbVignette'));
//     // setCookie(e.target.getAttribute('nbVignette'));

// });

// if (condition) {

// }
// console.log(getCookieFav());
//
