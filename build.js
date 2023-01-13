const scriptToReplace = "https://cdn.i-ready.com/instruction/student-dashboard/release-13.4.x/2/static/js/app-12.chunk.js"

// Check if the script has already been loaded on the page
if (document.scripts[15].src === scriptToReplace) { 
    alert('The lesson has already been loaded. Please refresh the page and run the script before going into your lesson.')
} else {
    // Override the script with a new one
    fetch("https://raw.githubusercontent.com/AltasPW/i-Ready-Overload/main/main.script").then(response => response.text()).then(script => eval(script))
}
