// data
const asabenehChallenges2020 = {
    description: 'Asabeneh Yetayeh challenges',
    challengeTitle: 'Asabeneh Yetayeh challenges',
    challengeSubtitle: '30DaysOfJavaScript Challenge',
    challengeYear: 2020,
    keywords: [
        'HTML',
        'HTML5',
        'CSS',
        'CSS3',
        'JS',
        'JavaScript',
        'ES6',
        'Promise',
        'async await',
        'Database',
        'React',
        'React Hooks',
        'Context API',
        'React Router',
        'Web Storage',
        'localStorage',
        'sessionStorage',
        'Redux',
        'Node',
        'MongoDB',
        'SQL',
        'API',
        'DOM',
        'data science',
        'MERN',
        'Python',
        'Flask',
        'Statistics',
        'Linear Algebra',
        'Numpy',
        'Pandas',
        'Scipy',
        'Scikit-learn',
        'Visualization',
        'D3.js'
    ],
    author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
        titles: [
            ['🌱', 'Educator'],
            ['💻', 'Programmer'],
            ['🌐', 'Developer'],
            ['🔥', 'Motivator'],
            ['📔', 'Content Creator']
        ],
        qualifications: [
            'MSc. Computer Science Ongoing',
            'BSc. Information and Communication Eng.',
            'MSc. Food Technology',
            'BSc.Food Technology'
        ],
        socialLinks: [
            {
                social: 'LinkedIn',
                url: 'https://www.linkedin.com/in/asabeneh/',
                fontawesomeIcon: '<i class="fab fa-linkedin">'
            },
            {
                social: 'Twitter',
                url: 'https://twitter.com/Asabeneh',
                fontawesomeIcon: '<i class="fab fa-twitter-square"></i>'
            },
            {
                social: 'Github',
                fontawesomeIcon: '<i class="fab fa-github-square"></i>',
                url: 'https://github.com/Asabeneh'
            },
            {
                social: 'DEV.to',
                fontawesomeIcon: '',
                url: 'https://dev.to/asabeneh'
            }
        ],
        skills: [
            'Web Development',
            'Data Analysis',
            'Data Visualization',
            'Programming',
            'Databases',
            'Developing API'
        ],
        bio:
            'I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.'
    },
    challenges: [
        {
            name: '30 Days Of Python',
            topics: [
                'Python',
                'Flask',
                'Numpy',
                'Pandas',
                'Statistics',
                'API',
                'MongoDB'
            ],
            days: 30,
            summary: "Python",
            status: 'Done',
            questions: 'Above 500',
            projects: 'Two',
            interviewQns: '',
            githubUrl: 'https://github.com/Asabeneh/30-Days-Of-Python'
        },
        {
            name: '30 Days Of JavaScript',
            topics: ['JavaScript', 'ES6', 'Promise', 'async and await', 'DOM'],
            days: 30,
            summary: "JavaScript",
            status: 'Ongoing',
            questions: 'Above 500',
            projects: 'About 30',
            interviewQns: '',
            githubUrl: 'https://github.com/Asabeneh/30DaysOfJavaScript'
        },
        {
            name: '30 Days Of HTML & CSS',
            topics: ['CSS', 'Flex', 'Grid', 'CSS Animation'],
            days: 30,
            summary: "HTML & CSS",
            status: 'Coming',
            questions: 'Above 500',
            projects: 'Two',
            interviewQns: '',
            githubUrl: ''
        },
        {
            name: '30 Days Of React',
            topics: [
                'React',
                'React Router',
                'Redux',
                'Context API',
                'React Hooks',
                'MERN'
            ],
            days: 30,
            summary: "React",
            status: 'Coming',
            questions: '',
            projects: '',
            interviewQns: '',
            githubUrl: ''
        },
        {
            name: '30 Days Of ReactNative',
            topics: ['ReactNative', 'Redux'],
            days: 30,
            summary: "React Native",
            status: 'Coming',
            questions: '',
            projects: 'Two',
            interviewQns: '',
            githubUrl: ''
        },
        {
            name: '30 Days Of Fullstack',
            topics: ['React', 'Redux', 'MongoDB', 'Node', 'MERN'],
            days: 30,
            summary: "Fullstack",
            status: 'Coming',
            questions: '',
            projects: '',
            interviewQns: '',
            githubUrl: ''
        },
        {
            name: '30 Days Of Data Analysis',
            topics: ['Python', 'Numpy', 'Pandas', 'Statistics', 'Visualization'],
            days: 30,
            summary: "Data Analysis",
            status: 'Coming',
            questions: '',
            projects: '',
            interviewQns: '',
            githubUrl: ''
        },
        {
            name: '30 Days Of Machine Learning',
            topics: [
                'Python',
                'Numpy',
                'Pandas',
                'Scikit-learn',
                'Scipy',
                'Linear Algebra',
                'Statistics',
                'Visualization'
            ],
            days: 30,
            summary: "Machine Learning",
            status: 'Coming',
            questions: '',
            projects: '',
            interviewQns: '',
            githubUrl: ''
        }
    ]
}


// utility function
function getRandomColor() {
    let char = 'abcdef0123456789';
    let hex = '#';
    for (let i = 0; i < 6; i++) {
        hex += char[Math.floor(Math.random() * char.length)];
    }

    return hex;
};

const date = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
}).format(new Date());



const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
wrapper.style.width = '70%';
wrapper.style.marginInline = 'auto';
wrapper.style.textAlign = 'center';
document.body.appendChild(wrapper);

// h1 element to display 
const h1 = document.createElement('h1');
const headingSpan = document.createElement('span');
headingSpan.textContent = `${new Date().getFullYear()}`;
headingSpan.style.fontSize = '4rem';
h1.textContent = 'Asabeneh Yetayeh challenges in ';
h1.style.fontSize = '2rem';
h1.appendChild(headingSpan);

// h2 element to display heading 2
const h2 = document.createElement('h2');
h2.textContent = '30daysOfJavaScript Challenge';
h2.style.textDecoration = 'underline';
h2.style.color = 'gray';
h2.style.fontSize = '1.5rem';

// h3 elemt to display time
const timeH3 = document.createElement('h3');
timeH3.textContent = date;
timeH3.style.width = '30%';
timeH3.style.marginInline = 'auto';
timeH3.style.padding = '0.5rem';

// addint setinterval to get random color
setInterval(() => {
    headingSpan.style.color = getRandomColor();
    timeH3.style.backgroundColor = getRandomColor();
}, 1000);

// creating ul and adding style
const ul = document.createElement('ul');
ul.style.width = '68%';
ul.style.marginInline = 'auto';
ul.style.listStyle = 'none';





// appending elements to wrapper
wrapper.appendChild(h1)
wrapper.appendChild(h2)
wrapper.appendChild(timeH3);
wrapper.appendChild(ul);

// creating list elemetns 
asabenehChallenges2020.challenges.forEach(list => {
    const li = document.createElement('li');

    li.innerHTML = `
        <p>${list.name}</p>
        <details class="details-tag">
            <summary>${list.summary}</summary>
        </details>
        <p>${list.status}</p>
    `;

    li.classList.add(list.status);

    const tag = li.querySelector('.details-tag');
    list.topics.forEach(topic => {
        const paragraph = document.createElement('p');
        paragraph.textContent = topic;

        tag.append(paragraph);
    })

    ul.append(li);
});



// adding styles to the list elements
const lists = document.querySelectorAll('li');
lists.forEach(list => {
    list.style.display = 'flex';
    list.style.alignItems = 'center';
    list.style.justifyContent = 'space-between';
    // list.style.backgroundColor = 'green';
    list.style.padding = '0.3rem 0.8rem';
    list.style.borderBottom = '2px solid #fff';


});
document.querySelector('.Done').style.backgroundColor = 'limegreen';
document.querySelector('.Ongoing').style.backgroundColor = 'lightblue';
document.querySelectorAll('.Coming').forEach(li => {
    li.style.backgroundColor = '#c05757';
})