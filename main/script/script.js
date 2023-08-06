// main
const buttonSignUp = document.getElementById('button-SignUp');

const funcGetValueSignUp = (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const phoneNumber = document.getElementById('number').value;

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('phoneNumber', phoneNumber);
}

buttonSignUp?.addEventListener('click', funcGetValueSignUp);

const buttonSignIn = document.getElementById('button-SignIn');

const funcButtonSignIn = (e) => {
    e.preventDefault();
    const textSignIn = document.getElementById('text-SignIn').value;
    const passwordSignIn = document.getElementById('password-SignIn').value;

    const usernameStorage = localStorage.getItem('username');
    const passwordField = localStorage.getItem('password');

    if (textSignIn === usernameStorage && passwordSignIn === passwordField) {
        let homeIndex = document.createElement("a");
        homeIndex.setAttribute('href', '../home page/index.html');
        document.body.appendChild(homeIndex);
        window.location.href = homeIndex.href;
    } else {
        alert("شما با این حساب کاربری ثبت نام نکرده اید!");
    }
}

buttonSignIn?.addEventListener('click', funcButtonSignIn);

// home page
let svgResize = document.getElementById('svg-search');

const funcSearch = () => {
    const visibleInput = document.querySelector('.input-resize');
    visibleInput.classList.add('show-tooltip');
};
svgResize?.addEventListener('click', funcSearch);

let newProductPage = document.getElementById('new-product-page');

const funcnewProductPage = () => {
    let newProductPageIndex = document.createElement("a");
        newProductPageIndex.setAttribute('href','../import commodity/index.html');
        document.body.appendChild(newProductPageIndex);
        window.location.href = newProductPageIndex.href;
}
newProductPage?.addEventListener('click', funcnewProductPage);

// sub page
const homePage = document.querySelector('.home-page');

const funcHomePage = () => {
    location.reload();
}
homePage?.addEventListener('click', funcHomePage);

function openHomePage() {
    let mainPage = document.createElement("a");
    mainPage.setAttribute('href', '../main/index.html');
    document.body.appendChild(mainPage);
    window.location.href = mainPage.href;
}

const signIn = document.getElementById('sign-in');

const funcSignIn = () => {
    openHomePage();
};
signIn?.addEventListener('click', funcSignIn);

const goToHomePage = document.querySelectorAll('.go-to-home-page');

const funcGoToHomePage = () => {
    openHomePage();
};

goToHomePage.forEach(element => {
    element.addEventListener('click', funcGoToHomePage);
});

// import commodity
const homeproductpage = document.getElementById('home-product-page');

const funcHomeproductpage = () => {
    let toHomePage = document.createElement("a");
    toHomePage.setAttribute('href', '../home page/index.html');
    document.body.appendChild(toHomePage);
    window.location.href = toHomePage.href;
}
homeproductpage.addEventListener('click', funcHomeproductpage)




const dataArray = [];

const funcButtonGetData = () => {
    const inputDataFields = ['cars', 'product-Name', 'product-price', 'number-of-product', 'code-product', 'get-time', 'get-date', 'get-textarea', 'name-of-supplier', 'invoice-number'];
    
    const dataObject = {};
    
    inputDataFields.forEach(field => {
        const fieldValue = document.getElementById(field).value;
        dataObject[field] = fieldValue;
    });

    dataArray.push(dataObject);
    const dataArrayJson = JSON.stringify(dataArray);
    
    fetch('', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: dataArrayJson,
    })
    .then(response => response.json())
    .then(data => {
        console.log('Response from backend:', data);
    })
    .catch(error => {
        console.error('Error sending data to backend:', error);
    });
}

const buttonGetData = document.getElementById('button-get-data');
buttonGetData.addEventListener('click', funcButtonGetData);


