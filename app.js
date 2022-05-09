class Book{
    constructor(title , author , isbn){
        this.title = title ;
        this.author = author ; 
        this.isbn = isbn ;
    }
}

class UI {
    addBookToList(book){
        const list = document.getElementById("book-list");
        const row = document.createElement("tr");

        row.innerHTML = 
        `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><button class = "delete btn btn-outline-dark">x</button></td>
        `
        list.appendChild(row);
    }
    showAlert(message,className){
        const div = document.createElement("div");
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector(".container");
        const form = document.getElementById("book-form");

        container.insertBefore(div , form);
        setTimeout(()=>{
            document.querySelector(".alert").remove()
        },3000)
    }
    clearFields(){
    document.getElementById("book-title").value  = ""; 
    document.getElementById("book-author").value = ""; 
    document.getElementById("book-isbn").value = ""; 
    }
    deleteBook(target){
        if (target.classList.contains("delete")){
            target.parentElement.parentElement.remove();
        }
    }
    
}

// When Submiting
document.getElementById("book-form").addEventListener("submit",(e)=>{

    const title = document.getElementById("book-title").value ; 
    const author = document.getElementById("book-author").value ; 
    const isbn = document.getElementById("book-isbn").value ; 
    const book = new Book(title , author , isbn)
    const ui = new UI();
    
    if (title === "" , author ==="" , isbn === ""){
        ui.showAlert("please fill in all fields","error");
    }else{
        ui.addBookToList(book)
        ui.showAlert("Book Added","success");
        ui.clearFields();
    }
    e.preventDefault();
    document.querySelector(".delete").addEventListener("click",(e)=>{
        const ui = new UI();
        ui.showAlert("Book Removed","success");
       ui.deleteBook(e.target);
    })
})