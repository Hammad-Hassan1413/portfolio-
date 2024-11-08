const count1 = document.querySelector('.count1');
const count2 = document.querySelector('.count2');
const count3 = document.querySelector('.count3');
const target1 = 3;
const target2 = 34;
const target3 = 24;

const duration = 2000;
const increment1 = target1 / (duration / 50);
const increment2 = target2 / (duration / 50);
const increment3 = target3 / (duration / 50);

function animateCountUp(element, target, increment) {
    let count = 0;
    const updateCount = () => {
        count += increment;
        if (count >= target) {
            element.textContent = Math.ceil(target);
        } else {
            element.textContent = Math.ceil(count);
            setTimeout(updateCount, 50);
        }
    };
    updateCount();
}

animateCountUp(count1, target1, increment1);
animateCountUp(count2, target2, increment2);
animateCountUp(count3, target3, increment3);


const skillElement = document.querySelector(".skill");
const texts = ["Web Developer.", "Professional coder.", "HTML CSS JS Expert."];
let textIndex = 0;

function typeAndErase() {
    let text = texts[textIndex];
    let isTyping = true;
    let charIndex = 0;

    const interval = setInterval(() => {
        if (isTyping) {
            skillElement.textContent = text.slice(0, charIndex + 1);
            charIndex++;
            if (charIndex === text.length) {
                isTyping = false;
                setTimeout(() => (isTyping = false), 70);
            }
        } else {
            skillElement.textContent = text.slice(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                skillElement.classList.remove("visible");
                isTyping = true;
                textIndex = (textIndex + 1) % texts.length;
                text = texts[textIndex];
            }
        }
    }, 50);
}

typeAndErase();

document.getElementById('about-link').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('education').scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    });
});

document.getElementById('projects-link').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('brands').scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    });
});
