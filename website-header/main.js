'use strict';
const toggleBtn = document.querySelector('.toggleBtn');
const Tab = document.querySelector('.Tab');
const icon = document.querySelector('.icon');

toggleBtn.addEventListener('click', () => {
    Tab.classList.toggle('active');
    icon.classList.toggle('active');
});
