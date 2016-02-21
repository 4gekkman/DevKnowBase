/**
 * Как получить URL текущей страницы?
 *
 * ------------------------------------
 * Оглавление
 *
 *    - Доменное имя                | "google.ru"
 *    - Полный URL                  | "http://google.ru/stat?ivan=1&pert=2"
 *    - URL без query string        | "http://google.ru/stat"
 *    - Query string без URL        | "ivan=1&pert=2"
 *    - Полный URI                  | "/stat?ivan=1&pert=2"
 *    - Полный URI без \ в начале   | "stat?ivan=1&pert=2"
 *
 * ------------------------------------
 *
 *
**/

// Доменное имя                | "google.ru"
console.log( window.location.host );

// Полный URL                  | "http://google.ru/stat?ivan=1&pert=2"
console.log( window.location.href );

// URL без query string        | "http://google.ru/stat"
console.log( window.location.href.split('?')[0] );

// Query string без URL        | "ivan=1&pert=2"
console.log( window.location.search.slice(1) );

// Полный URI                  | "/stat?ivan=1&pert=2"
console.log( window.location.pathname + window.location.search );

// Полный URI без \ в начале   | "stat?ivan=1&pert=2"
console.log( (window.location.pathname + window.location.search).slice(1) );

