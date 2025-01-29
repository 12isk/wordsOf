document.addEventListener('DOMContentLoaded', function() {
    // Code to run after the DOM is fully loaded
    const dm = document.querySelector('.dm');
    
    dm.addEventListener('touchstart', () => {
        dm.classList.add('transformed');
        console.log("touch")
    })
    // Now you can perform operations on dmElement
});

// dm.addEventListener('click', function() {
//     dm.classList.add('transformed');
//     console.log("touch")
// })
