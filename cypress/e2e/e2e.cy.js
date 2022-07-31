import TodoMainPage from '../pageObjects/toDoMain.js'
import { firstTask, secondTask, thirdTask, placeHolder, longText } from '../support/utils'
import { completeTask } from '../support/selectors.js'


const toDoPage = new TodoMainPage()

describe('Todo App e2e tests', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    context('Element visibility and state checking', () => {

        it('should render primary components and check the states', () => {

            toDoPage.toDoInputBox().should('be.visible').and('be.enabled')
            toDoPage.toDoSubmitButton().should('be.visible').and('be.enabled')
            toDoPage.toDoInputBox().invoke('attr', 'placeholder').should('contain', placeHolder)
        })
    })

    context('Main workflow with one task', () => {

        it('should add a task,complete task and check visibility', () => {

            toDoPage.toDoAddTask().type(firstTask)
            toDoPage.toDoInputBox().should('have.value', firstTask)
            toDoPage.toDoSubmitButton().click()
            toDoPage.toDoCompleteTask().should('be.visible').and('be.enabled')
            toDoPage.toDoTask().should('contain', firstTask)
            toDoPage.toDoCompleteTask().click()
            toDoPage.toDoList().should('have.length', 0)
        })
    })


    context('Main workflow with multiple tasks and large text', () => {

        it('should add multiple tasks and complete tasks', () => {

            toDoPage.toDoAddTask().type(firstTask)
            toDoPage.toDoInputBox().should('have.value', firstTask)
            toDoPage.toDoSubmitButton().click()
            toDoPage.toDoAddTask().type(secondTask)
            toDoPage.toDoInputBox().should('have.value', secondTask)
            toDoPage.toDoSubmitButton().click()
            toDoPage.toDoAddTask().type(thirdTask)
            toDoPage.toDoInputBox().should('have.value', thirdTask)
            toDoPage.toDoSubmitButton().click()
            toDoPage.toDoList().should('have.length', 3)
            toDoPage.toDoList().last().find(completeTask).click()
            toDoPage.toDoList().should('have.length', 2)
            toDoPage.toDoList().last().find(completeTask).click()
            toDoPage.toDoList().should('have.length', 1)
            toDoPage.toDoList().last().find(completeTask).click()
            toDoPage.toDoList().should('have.length', 0)

        })

        it('should take a large input',()=>{
            toDoPage.toDoAddTask().type(longText)
            toDoPage.toDoInputBox().should('have.value', longText)
            toDoPage.toDoSubmitButton().click()
        })
    })
})
