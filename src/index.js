const init = () => {
    const inputForm = document.querySelector("form");

    inputForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const userInput = document.getElementById("searchByID");

        console.log(userInput.value);

        fetch(`http://localhost:3000/movies/${userInput.value}`)
        .then((response) => response.json())
        .then((data) => {
            
            const title = document.querySelector("section#movieDetails h4");
            title.textContent = data.title;

            const summary = document.querySelector("section#movieDetails p");
            summary.textContent = data.summary;
        });
    });
};

document.addEventListener("DOMContentLoaded", init);