document.addEventListener('DOMContentLoaded', () => {
    const entryForm = document.getElementById('entry-form');
    const entryText = document.getElementById('entry-text');
    const journalEntries = document.getElementById('journal-entries');

    entryForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const newEntry = document.createElement('div');
        newEntry.classList.add('entry');
        newEntry.textContent = entryText.value;
        journalEntries.appendChild(newEntry);
        entryText.value = '';
    });

    // Update to work with routing
    document.body.addEventListener('click', (event) => {
        if (event.target.tagName === 'A' && event.target.href.startsWith(window.location.origin)) {
            event.preventDefault();
            history.pushState(null, '', event.target.href);
            router();
        }
    });

    router(); // Initialize routing on page load
});
