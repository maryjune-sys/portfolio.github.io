document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburgerbtn");
    const navPanel = document.querySelector(".navbar_hamburger");
    const navbarButtons = document.querySelectorAll(".navbarbtn2");

    hamburger.addEventListener("click", function() {
        navPanel.classList.toggle("show");
        document.body.classList.toggle("menu-open", isOpen);
    });

    navbarButtons.forEach(button => {
        button.addEventListener("click", function() {
            navPanel.classList.remove("show"); 
            document.body.classList.remove("menu-open");
            
            const targetId = button.getAttribute("href"); 
            if (targetId) {
                window.location.href = targetId; 
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const navbarButtons = document.querySelectorAll(".navbarbtn");

    navbarButtons.forEach(button => {
        button.addEventListener("click", function() {
            
            navbarButtons.forEach(btn => btn.classList.remove("active"));
            
            button.classList.add("active");

            setTimeout(() => {
                button.classList.remove("active"); 
            }, 1000); 
        });
    });
});

window.addEventListener('scroll', function() {
    var element = this.document.querySelector('.about')
    var position = element.getBoundingClientRect()

    if (position.top < this.window.innerHeight && position.bottom >= 0) {
        element.classList.add('visible')
    } else {
        element.classList.remove('visible')
    }
});

window.addEventListener('scroll', function() {
    var element = this.document.querySelector('.about2')
    var position = element.getBoundingClientRect()

    if (position.top < this.window.innerHeight && position.bottom >= 0) {
        element.classList.add('visible')
    } else {
        element.classList.remove('visible')
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const card = document.querySelector('.card1');
    card.addEventListener('click', function() {
        card.classList.toggle('flipped');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const card = document.querySelector('.card2');
    card.addEventListener('click', function() {
        card.classList.toggle('flipped');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const card = document.querySelector('.card3');
    card.addEventListener('click', function() {
        card.classList.toggle('flipped');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#p1").addEventListener("click", (e) => {
        e.stopPropagation();
        window.open("p1/index.html", "_blank");
        setTimeout(() => {
            document.querySelector(".card1").classList.remove('flipped');
        }, 300);
});
    document.querySelector("#p2").addEventListener("click", (e) => {
        e.stopPropagation();
        window.open("p2/index.html", "_blank");
        setTimeout(() => {
            document.querySelector(".card2").classList.remove('flipped');
        }, 300);
});

    document.querySelector("#p3").addEventListener("click", (e) => {
        e.stopPropagation();
        window.open("p3/index.html", "_blank");
        setTimeout(() => {
            document.querySelector(".card3").classList.remove('flipped');
        }, 300);
        
});
});

window.addEventListener('scroll', function() {
    const card = document.querySelectorAll('.card1');

    card.forEach(card => {
        const rect = card.getBoundingClientRect();

        if (rect.bottom < 0 || rect.top > this.window.innerHeight || rect.right < 0 || rect.left > window.innerWidth) 
        {
            card.classList.remove('flipped');
        }
    });
});

window.addEventListener('scroll', function() {
    const card = document.querySelectorAll('.card2');

    card.forEach(card => {
        const rect = card.getBoundingClientRect();

        if (rect.bottom < 0 || rect.top > this.window.innerHeight || rect.right < 0 || rect.left > window.innerWidth) 
        {
            card.classList.remove('flipped');
        }
    });
});

window.addEventListener('scroll', function() {
    const card = document.querySelectorAll('.card3');

    card.forEach(card => {
        const rect = card.getBoundingClientRect();

        if (rect.bottom < 0 || rect.top > this.window.innerHeight || rect.right < 0 || rect.left > window.innerWidth) 
        {
            card.classList.remove('flipped');
        }
    });
});

window.addEventListener('scroll', function() {
    var element = this.document.querySelector('.skills_bg')
    var position = element.getBoundingClientRect()

    if (position.top < this.window.innerHeight && position.bottom >= 0) {
        element.classList.add('visible')
    } else {
        element.classList.remove('visible')
    }
})

window.addEventListener('scroll', function() {
    var element = this.document.querySelector('.interest_bg')
    var position = element.getBoundingClientRect()

    if (position.top < this.window.innerHeight && position.bottom >= 0) {
        element.classList.add('visible')
    } else {
        element.classList.remove('visible')
    }
})








