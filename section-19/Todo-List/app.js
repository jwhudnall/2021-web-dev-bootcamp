// Command line based to-do list
// Ask user what they would like to do.
// 4 options:
//  - new - add a todo. After input, update console confirming the list addition.
//  - list - list all todos
//  - delete - remove specific todo, based on the items index. Ack with "todo removed"
//  - quit - quit app

// Tips:
// 1. Ask for input. While input is not equal to quit, take action as outlined above. 
//      (implement quit first)
// 2. Store todos in an array.
// 3. Use splice to remove items from array.

let action = prompt('What would you like to do? Try "new", "list", "delete" or "quit": ');
const todoList = [];

while (action !== "quit" && action !=='q') {
    // if "new", ask what task should be added.
    // if "list", display list, including index.
    // if "delete", ask what index should be deleted.
    if (action === "new") {
        const item = prompt("Enter a task: ");
        todoList.push(item);
        console.log(`${item} added to the list.`)
    } else if (action === "list") {
        console.log("**********");
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${i}: ${todoList[i]}`);
        }
        console.log("**********");
    } else if (action === "delete") {
        const indexToDelete = parseInt(prompt("Enter the index of the item you want to delete: "));
        // Verifies indexToDelete is a number & within a valid range
        if (!Number.isNaN(indexToDelete) && indexToDelete < todoList.length) {
            todoList.splice(indexToDelete,1);
            console.log(`Todo Removed`);
        } else {
            console.log('Unknown Index');
        }
        
        // Delete an item at index i with array.splice(startIndex, deleteCount)

    }
    action = prompt('What would you like to do? Try "new", "list", "delete" or "quit": ');
}

console.log("You quit!");