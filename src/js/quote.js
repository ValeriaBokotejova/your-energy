// Функція для отримання цитати з backend'у
async function fetchQuote() {
  try {
    const response = await fetch('https://your-energy.b.goit.study/api/quote');
    if (!response.ok) {
      throw new Error('Failed to fetch the quote');
    }
    const data = await response.json();
    return `${data.quote} — ${data.author}`; // Форматування цитати разом з автором
  } catch (error) {
    console.error('Error fetching quote:', error);
    return 'Помилка завантаження цитати';
  }
}

// Функція для перевірки дати та отримання цитати
async function getQuoteOfTheDay() {
  const today = new Date().toISOString().split('T')[0]; // Поточна дата в форматі YYYY-MM-DD
  const savedQuote = JSON.parse(localStorage.getItem('quoteOfTheDay'));

  if (savedQuote && savedQuote.date === today) {
    return savedQuote.quote;
  }

  const newQuote = await fetchQuote();
  localStorage.setItem('quoteOfTheDay', JSON.stringify({
    date: today,
    quote: newQuote,
  }));

  return newQuote;
}

// Функція для створення блоку з цитатою дня
async function renderQuoteBlock() {
  const quote = await getQuoteOfTheDay();

  const quoteText = document.getElementById('quote-text');
  const quoteAuthor = document.getElementById('quote-author');

  if (quoteText && quoteAuthor) {
    const [text, author] = quote.split('—');
    quoteText.textContent = text.trim();
    quoteAuthor.textContent = author.trim();
  }
}


// Виконання
function initializeFavoritesPage() {
  const favoritesPage = document.createElement('div');
  favoritesPage.classList.add('favorites-page');

  document.body.appendChild(favoritesPage);

  renderQuoteBlock();
  renderStaticInfoBlock();
}

initializeFavoritesPage();
