const getStoredBook = () => {
    const storedBook = localStorage.getItem('book-item');
    if (storedBook) {
        return JSON.parse(storedBook);
    }
    return [];
}

const saveBook = id => {
    const storedBook = getStoredBook();
    const exists = storedBook.find(bookId => bookId === id);
    if (!exists) {
        storedBook.push(id);
        localStorage.setItem('book-item', JSON.stringify(storedBook)); // Corrected line
    }
}

export { getStoredBook, saveBook };
