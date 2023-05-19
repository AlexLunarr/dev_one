
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
}
  
document.addEventListener('DOMContentLoaded', function() {
  // Знаходимо форму за допомогою ідентифікатора або класу
  var form = document.querySelector(".myForm"); // Замініть '#myForm' на відповідний селектор для вашої форми

  // Обробник події відправки форми
  function handleSubmit(event) {
    event.preventDefault(); // Забороняємо стандартну відправку форми

    // Додайте будь-який код, який ви хочете виконати замість відправки форми.
    // Наприклад, можна перевірити дані форми перед відправкою або виконати асинхронний запит.

    // // Приклад перевірки даних форми
    // var input = document.querySelector('.myInput'); // Замініть '#myInput' на відповідний селектор для вашого поля вводу
    // var inputValue = input.value.trim(); // Отримуємо значення поля вводу та обрізаємо пробіли

    // if (inputValue === '') {
    //   alert('Будь ласка, заповніть поле вводу.');
    //   return; // Перериваємо відправку форми, якщо поле вводу порожнє
    // }

    // // Якщо всі перевірки успішні, виконайте потрібні дії, наприклад, відправте дані на сервер або відобразіть повідомлення про успішну відправку.
  }

  // Додаємо обробник події відправки форми
  form.addEventListener('submit', handleSubmit);
});