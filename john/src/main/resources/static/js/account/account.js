const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelector('.open-modal');
const leaderboard = document.getElementById('leaderboard')
const mainElement = document.querySelector('.friends-list-container');

const openModal = function () {
  modal.classList.remove('hidden');
  for(let i = 1; i <= 10; i++){
    const newDiv = document.createElement('div')
    newDiv.textContent = `Friend ${i}`
    newDiv.id = `Friend ${i}`
    newDiv.classList.add('friendslist-item')
    mainElement.appendChild(newDiv)
}
};

const closeModal = function () {
  modal.classList.add('hidden');
};

btnsOpenModal.addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);

leaderboard.addEventListener('click', ()=>{
  window.location.href = "http://localhost:8080/leaderboard"
})

document.addEventListener('keydown', function (e) {

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});