var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});


document.querySelector('#scrollTop').addEventListener('click', function(e){
    e.preventDefault();
    fullpage_api.moveTo(1);
});

typewriter
    .changeDelay(40)
    .typeString('I hope you continue growing into an even better version of yourself a better daughter, a better sister, a better friend. I know the path won’t always be easy, but I hope you’re strong enough to walk through it, sweetheart 💛')
    .pauseFor(7500)
    .deleteAll(10)
    .typeString('I hope you learn to love yourself more. To take care of your heart, to be gentle with your thoughts, and to put yourself first when you need to. Because someone like you deserves that kind of love even from yourself. 🌿💗')
    .pauseFor(7500)
    .deleteAll(10)
    .typeString('I hope your life keeps getting brighter. That you become happier, healthier, and that your career becomes lighter and more fulfilling. I hope you grow wiser with every challenge that comes your way because you’re capable of so much more than you realize. ✨')
    .pauseFor(7500)
    .deleteAll(10)
    .typeString('I hope you always find the strength to stand back up whenever life feels heavy. You’re stronger than you think, love please never forget that. 💪❤️')
    .pauseFor(7500)
    .deleteAll(10)
    .typeString('I hope your heart finds peace, even on the days that feel overwhelming. I hope you always have a quiet place inside yourself to rest and breathe. 🍃❤️')
    .pauseFor(7500)
    .deleteAll(10)
    .typeString('I hope your dreams keep growing, and that you never lose the courage to chase them. I believe in you—deeply, fully, and honestly. 🌙💫')
    .pauseFor(7500)
    .deleteAll(10)
    .typeString('I hope you always feel loved, not just by me, but by the world around you. Because someone as kind and soft as you deserves to be loved loudly. 💘')
    .pauseFor(7500)
    .deleteAll(10)
    .typeString('I hope you never lose the softness in your heart. The world needs more people like you, gentle, warm, and full of kindness. 🌷✨')
    .pauseFor(7500)
    .deleteAll(10)
    .typeString('I hope your future is filled with moments that make you smile without even noticing it— the kind of happiness that feels calm, safe, and quietly beautiful. ☀️')
    .pauseFor(7500)
    .deleteAll(10)
    .typeString('I hope our relationship stays this beautiful. That we keep laughing together, talking about everything, being honest about anything, and walking side by side through every season. As long as we choose each other, I think we’ll always be okay. 💞')
    .pauseFor(7500)
    .deleteAll(10)
    .start();