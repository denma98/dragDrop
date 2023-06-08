let lists = document.getElementsByClassName("list");

let rightbox = document.getElementById("destination");

let leftbox = document.getElementById("source");

let initialOrder = Array.from(leftbox.children); // Store the initial order of items

for(let list of lists) {
    // Event listener for dragstart event
    list.addEventListener("dragstart", function(e) {
        let selected = e.target;

        // Allow dropping on the rightbox
        rightbox.addEventListener("dragover", function(e) {
            e.preventDefault();
        });

        // Handle drop event on the rightbox
        rightbox.addEventListener("drop", function(e) {
            rightbox.appendChild(selected);
            selected = null;
        });

        // Allow dropping on the leftbox
        leftbox.addEventListener("dragover", function(e) {
            e.preventDefault();
        });

        // Handle drop event on the leftbox
        leftbox.addEventListener("drop", function(e) {
            leftbox.appendChild(selected);
            selected = null;
        });
    });
}

let resetButton = document.getElementById("resetButton");

resetButton.addEventListener("click", function() {
    // Move all items from rightbox back to leftbox
    while(rightbox.firstChild) {
        leftbox.appendChild(rightbox.firstChild);
    }

    // Reset the order of items to the initial state
    for (let item of initialOrder) {
        leftbox.appendChild(item);
    }
});
