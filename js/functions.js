// Функция для проверки длины строки. Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true, если строка меньше или равна указанной длине, и false, если строка длиннее.

function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

checkStringLength('простая строка', 10);
checkStringLength('простая строка', 14);
checkStringLength('простая строка', 23);

// Функция для проверки, является ли строка палиндромом. Палиндром — это слово или фраза, которые одинаково читаются и слева направо и справа налево.

function isPalindrome(string) {
  const normalizeString = string.toLowerCase().replaceAll(' ', '');
  let result = '';

  for (let i = 0; i < normalizeString.length; i++) {
    result = normalizeString[i] + result;
  }

  return result === normalizeString;
}

isPalindrome('топот');
isPalindrome('Искать такси');
isPalindrome('Доводчик');

// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN.

function getNumberOfString(string) {
  const normalizeString = isNaN(string) ? string : string.toString();
  let result = '';

  for (let i = 0; i < normalizeString.length; i++) {
    if (!isNaN(parseInt(normalizeString[i], 10))) {
      result += normalizeString[i];
    }
  }
  result = parseInt(result, 10);

  return result;
}

getNumberOfString('отряд из 0 ребят с 54й школы');
getNumberOfString('агент 007');
getNumberOfString('а я томат');
getNumberOfString(2025);
getNumberOfString(-13.6);

// Функция, которая принимает время начала и конца рабочего дня,
// а также время старта и продолжительность встречи в минутах

function convertTimeToMinutes (time) {
  const [hour, minute] = time.split(':');

  const normalizeHour = Number(hour);
  const normalizeMinute = Number(minute);

  return normalizeHour * 60 + normalizeMinute;
}

function isMeetingValid (dayStart, dayEnd, meetingStart, meetingDuration) {
  const start = convertTimeToMinutes(dayStart);
  const end = convertTimeToMinutes(dayEnd);
  const meeting = convertTimeToMinutes(meetingStart);

  return start <= meeting && (meeting + meetingDuration) <= end;
}

console.log(isMeetingValid('08:00', '17:30', '14:00', 90)); // true
console.log(isMeetingValid('8:0', '10:0', '8:0', 120)); // true
console.log(isMeetingValid('08:00', '14:30', '14:00', 90)); // false
console.log(isMeetingValid('14:00', '17:30', '08:0', 90)); // false
console.log(isMeetingValid('8:00', '17:30', '08:00', 900)); // false
