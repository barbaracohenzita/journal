const routes = {
    '/': 'home',
    '/entry': 'journal entry',
    '/settings': 'settings'
};

function router() {
    const path = window.location.pathname;
    const route = routes[path] || 'home';
    renderRoute(route);
}

function renderRoute(route) {
    const main = document.querySelector('main');
    main.innerHTML = `<h2>${route}</h2>`;
}

window.addEventListener('popstate', router);
window.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (event) => {
        if (event.target.tagName === 'A' && event.target.href.startsWith(window.location.origin)) {
            event.preventDefault();
            history.pushState(null, '', event.target.href);
            router();
        }
    });
    router();
});
