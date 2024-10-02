function countLetter(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i).toLowerCase() === letter.toLowerCase()) {
        count++;
      }
    }
    return count;
  }
  
  function getRowWithMoreLetters(firstRow, secondRow, letter) {
    const count1 = countLetter(firstRow, letter);
    const count2 = countLetter(secondRow, letter);
  
    if (count1 > count2) {
      return firstRow;
    } else if (count2 > count1) {
      return secondRow;
    } else {
      return "Кількість літер однакова в обох рядках";
    }
  }
  
  document.getElementById("task1Button").addEventListener("click", function() {
    const firstRow = prompt("Введіть перший рядок:");
    const secondRow = prompt("Введіть другий рядок:");
    const letter = prompt("Введіть літеру для підрахунку:");
  
    const result = getRowWithMoreLetters(firstRow, secondRow, letter);
    alert(result);
  });
  
  // Завдання 2
  function formattedPhone(phone) {
    // Видалення всіх символів, окрім цифр
    phone = phone.replace(/[^0-9]/g, '');
  
    // Перевірка довжини та форматування
    if (phone.length === 10) {
      return `+38 (${phone.substring(0, 3)}) ${phone.substring(3, 6)}-${phone.substring(6, 8)}-${phone.substring(8, 10)}`;
    } else if (phone.length === 12 && phone.startsWith("80")) {
      return `+${phone.substring(0, 2)} (${phone.substring(2, 5)}) ${phone.substring(5, 8)}-${phone.substring(8, 10)}-${phone.substring(10, 12)}`;
    } else {
      return "Невірний формат номеру телефону";
    }
  }
  
  document.getElementById("task2Button").addEventListener("click", function() {
    const phone = prompt("Введіть номер телефону (наприклад, +380664567890, 80664567890, 0664567890):");
    const formatted = formattedPhone(phone);
    alert(formatted);
  });