const headers = document.querySelectorAll(".accordion-wrapper .accordion-heading");

headers[1].classList.add("active");
headers[1].nextElementSibling.style.maxHeight = headers[1].nextElementSibling.scrollHeight + "px";

headers.forEach(header => {
    header.addEventListener("click", () => {

        if(header.classList.contains("active")) {
            header.classList.remove("active");
            header.nextElementSibling.style.maxHeight = "0px";
        } else {
            headers.forEach(closeHeader => {
                closeHeader.nextElementSibling.style.maxHeight = "0px";
                closeHeader.classList.remove("active");
            })
            
            let contentHeight = header.nextElementSibling.scrollHeight;
            header.nextElementSibling.style.maxHeight = contentHeight + "px";
            header.classList.add("active");
        }
    });
});