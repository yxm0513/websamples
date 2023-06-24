let pages = document.getElementsByClassName("pagination-item");
let nextBtn = document.querySelector(".btn-next");
let previousBtn = document.querySelector(".btn-previous");
let firstBtn = document.querySelector(".btn-first");
let lastBtn = document.querySelector(".btn-last");

let currentPage = 1;
let totalPages = 5;

const activePage = (event) => {
  /**disable previous and first button if current page value is 1 */
  if (currentPage === 1) disablePreviousAndFirstBtn();

  /**disable next and last button if current page value is 5 */
  if (currentPage === totalPages) disableNextAndLastBtn();

  /**set current page value when clicked on page link*/
  currentPage = event.target.value;

  /**apply 'active' class on clicked page link*/
  addActive(event.target);
};

const prev = () => {
  currentPage--;
  addActive(pages[currentPage - 1]);
};

const next = () => {
  currentPage++;
  addActive(pages[currentPage - 1]);
};

const first = () => {
  enableNextAndLastBtn();
  disablePreviousAndFirstBtn();

  currentPage = 1;
  addActive(pages[currentPage - 1]);
};

const last = () => {
  disableNextAndLastBtn();

  currentPage = totalPages;
  addActive(pages[currentPage - 1]);
};

const removeActive = (list) => {
  if (currentPage === 1) disablePreviousAndFirstBtn();
  else enablePreviousAndFirstBtn();

  if (currentPage === totalPages) disableNextAndLastBtn();
  else enableNextAndLastBtn();

  /**removes 'active' class from all page links*/
  for (l of list) l.classList.remove("active");
};

const addActive = (element) => {
  removeActive(pages);

  /**add 'active' class on current page linkw*/
  element.classList.add("active");
};

const disableNextAndLastBtn = () => {
  nextBtn.disabled = true;
  lastBtn.disabled = true;
};

const enableNextAndLastBtn = () => {
  nextBtn.disabled = false;
  lastBtn.disabled = false;
};

const disablePreviousAndFirstBtn = () => {
  previousBtn.disabled = true;
  firstBtn.disabled = true;
};

const enablePreviousAndFirstBtn = () => {
  previousBtn.disabled = false;
  firstBtn.disabled = false;
};

disablePreviousAndFirstBtn();
