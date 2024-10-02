const homeDOM = document.getElementsByTagName('a')[0];
const aboutDOM = document.getElementsByTagName('a')[1];
const contactDOM = document.getElementsByTagName('a')[2];
const contentDOM = document.getElementById('content');

window.onload = fetchPage('home.html');

window.addEventListener('popstate', async () => {
    switch(history.state.page) {
        case 0:
            await fetchPage('home.html')
            break;
        case 1:
            await fetchPage('about.html')
            break;
        case 2:
            await fetchPage('contact.html')
            break;
        default:
            await fetchPage('home.html')
    }
})

homeDOM.addEventListener('click', async (event) => {
    history.pushState({page: 0}, "", "/home");
    await fetchPage('home.html');
})

aboutDOM.addEventListener('click', async (event) => {
    history.pushState({page: 1}, "", "/about");
    await fetchPage('about.html');
})

contactDOM.addEventListener('click', async (event) => {
    history.pushState({page: 2}, "", "/contact");
    await fetchPage('contact.html');
})


async function fetchPage(filename) {
    if(typeof filename != 'string') return; //guard clause

    // sätt in progressbar animation
    const spinner = createpinnerImg();
    contentDOM.appendChild(spinner);

    fetch(filename)
        .then((result) => {
            console.log(result);
            return result.text();
        }).then((data) => {
            contentDOM.innerHTML = data;
        }).catch(error => {
            contentDOM.innerHTML = `Error fetching data`;
            console.log(error);    
        }).finally(() => {
            spinner.remove();
        })
}

function createpinnerImg() {
    const img = document.createElement('img')
    img.src = 'https://reactnativeexample.com/content/images/2019/02/android-spinner.gif';
    return img;
}