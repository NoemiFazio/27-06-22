const newEl = (el) => document.createElement(el);
const nomeUtente = prompt("Inserire nome utente");
const navbarEl = newEl("nav");
const titleEl = newEl("h4");
const contentEl = newEl("p");
titleEl.innerText = "Nome utente: ";
// document.body.append(navbarEl);    ESERCIZI 1 E 2
// navbarEl.append(titleEl, contentEl);
// localStorage.setItem("username", nomeUtente);
// contentEl.innerText = nomeUtente;

navbarEl.style = `width: 500px; height: 30px; border-style: 1px solid; background-color: pink; `;
navbarEl.style.display = "flex";

titleEl.style = `margin-top: 0px; padding-top: 5px`;

contentEl.style = `margin-top: 0px; padding: 5px 0 0 10px;`;

try {
  if (localStorage.getItem("username") !== nomeUtente) {
    localStorage.setItem("username", nomeUtente);
    document.body.append(navbarEl);
    navbarEl.append(`L'utente ${nomeUtente} è stato appena inserito.`);
  } else {
    throw new error();
  }
} catch (error) {
  document.body.append(navbarEl);
  navbarEl.append(`${nomeUtente}, bentornato/a!`);

  throw new Error("Nuovo utente: aggiunto.");
}
