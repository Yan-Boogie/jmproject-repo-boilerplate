import { someUtils } from './another.js';

document.body.innerHTML += '<p class="text-red-500">This is a paragraph added by JavaScript from src/index.js</p>';
document.body.innerHTML += someUtils();
