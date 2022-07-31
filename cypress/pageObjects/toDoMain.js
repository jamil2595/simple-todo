import { inputBox, submitButton, addTask, completeTask, addedTask, toDoList } from '../support/selectors.js'

class TodoMainPage {

    toDoInputBox() {
        return cy.get(inputBox)
    }

    toDoSubmitButton(){
        return cy.get(submitButton)
    }
    toDoAddTask(){
        return cy.get(addTask)
    }

    toDoCompleteTask(){
        return cy.get(completeTask)
    }

    toDoTask(){
        return cy.get(addedTask)
    }

    toDoList(){
        return cy.get(toDoList)
    }
}

export default TodoMainPage
