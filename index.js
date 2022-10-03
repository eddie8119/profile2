// make navbar visible only scroll pass some threshold
const welcome = document.querySelector('#welcome-section');
let navBar = document.getElementById('navbar');

const options = { threshold: 0.1 };

const observer = new IntersectionObserver(function (entries, observer) {
	entries.forEach(entry => {
		console.log(entry);
		if (!entry.isIntersecting) {
			navBar.style.display = 'flex';
		} else {
			navBar.style.display = 'none';
		}
	});
}, options);

observer.observe(welcome);

// make projects img visible only scroll pass some threshold
const project = document.querySelectorAll('#project-item');

const options2 = { threshold: 0.35 };

const observer2 = new IntersectionObserver(function (entries, observer2) {
	entries.forEach(entry => {
		if (entry && entry.isIntersecting) {
			const nodeLength = entry.target.childNodes.length;
			const nodeList = entry.target.childNodes;
			for (let i = 0; i < nodeLength; i++) {
				if (nodeList[i].id === 'img') {
					nodeList[i].style.animationPlayState = 'running';
					return;
				}
			}
		}
	});
}, options2);

project.forEach(project => observer2.observe(project));

