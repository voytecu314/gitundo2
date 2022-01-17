//Create an array to store all todos:
let toDoList = [];


//Create a function to push todo items as objects into array

const creatToDo = () => {
    let display = `${getToDoList().split(`
    `).reverse().join('\n')}`;
    let task = prompt(display,'Type your task here');
    if(task===null) return 0;
    else {
        toDoList.push( {task, isDone:false} );
        creatToDo();
        }
    }

//Function to read from array and prepare a list to show on prompt msg

const getToDoList = () => {
    let list = '';
    toDoList.forEach((element, index) => {
        list += `
        ${index}: ${element.task} - ${element.isDone?'DONE':'TODO'}
        `
    });
    return list;
}

//Function to find objects in toDoList array
//uses getToDoList to have list of todos
//uses index number that prompted by user
//calls switchDone function to switch value of toDoItem.isDone

const getItemToSwitchDone = () => {
    let msg =`
    ${getToDoList()}
    Please type a number of the item to switch status
    `;
    let itemIndex=checkIndex(msg);
    if(itemIndex===null) return 0;
    else switchDone(toDoList[itemIndex]);//??
}


//Func. to switch isDone property value
const switchDone = (item) => {
item.isDone = !item.isDone;
// !item.isDone would work on its own
}

//check if inputed index is valid

const checkIndex = (display) => {
    let itemIndex;
    do{
        itemIndex = prompt(display,`Type integer numbers from 0 to ${toDoList.length - 1}`);
        if(itemIndex===null) break;
    }while(!Number.isInteger(parseFloat(itemIndex)) || itemIndex < 0 || itemIndex > toDoList.length-1 || isNaN(parseInt(itemIndex)))
    return itemIndex;
}

//Edit item function
const editItem = () => {
    let msg =`
    ${getToDoList()}
    Please type a number of the item to edit
    `;
    let itemIndex = checkIndex(msg);
    if(itemIndex===null) return 0;
    let newText = prompt('Please update the task',toDoList[itemIndex].task);
    toDoList[itemIndex].task = newText;
    let doneQuestion;
    do{
        doneQuestion = prompt('Is this task done or undone?','UNDONE');
        if(doneQuestion.toUpperCase()==='UNDONE')
        toDoList[itemIndex].isDone=false;//make undone 
        else if(doneQuestion.toUpperCase()==='DONE') 
        toDoList[itemIndex].isDone=true;
    }while(doneQuestion.toUpperCase() !=='DONE' && doneQuestion.toUpperCase() !=='UNDONE' )
}

//delete todo from array

const deleteItem = () => {
    let msg =`
    ${getToDoList()}
    Please type a number of the item to delete
    `;
    let itemIndex=checkIndex(msg);
    if(itemIndex===null) return 0;
    else toDoList.splice(itemIndex,1);
}

//Menu on prompt:

let menu =`MENU:
0. Create To-Do task
1. Make any item done or undone
2. Edit any item on the list
3. Delete any item
4. Show the list
q. Quit.
`;
//Manage toDo via prompt

let toDoItem;
do {
    toDoItem = prompt(menu);

    switch(toDoItem){
        case '0':
            creatToDo(); 
            break;

        case '1':
            if(toDoList.length==0) alert('Your ToDoList is EMPTY')
            else getItemToSwitchDone();
            break;
            
        case '2':
            if(toDoList.length==0) alert('Your ToDoList is EMPTY')
            else editItem();
            break;

        case '3':
            if(toDoList.length==0) alert('Your ToDoList is EMPTY')
            else deleteItem();
            break;

        case '4':
            if(toDoList.length==0) alert('Your ToDoList is EMPTY')
            else alert(getToDoList());
            break;
        case null: 
        case 'q':
            break;
        default:
            alert('Please choose an option from the menu');
            break;
        }
        
} while(toDoItem !== 'q' && toDoItem !== null)

console.log(toDoList);

