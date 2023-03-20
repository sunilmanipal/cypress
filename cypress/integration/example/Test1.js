//If you want any method of cypress to get as automcomplete
///<reference types="Cypress"/>

describe('THis is my Test Suite', () => {
    it('This is my Test Case', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/auth/login")
        cy.get('input[name="username"][placeholder="Username"]').type("Admin")
        cy.get('input[name="password"][placeholder="Password"]').type("admin123")
        cy.get('.oxd-button').click()  
        //This is to verify  the login name using framework 
        //cy.get('.oxd-userdropdown-name').should('have.text','ankita22cevtl6 46QPa')  
        //why i am getting error
    //    cy.contains('Admin').click()
    //    cy.get('input[placeholder="Type for hints..."]').type('L')
    //    cy.wait(8000)
      //cy.get('.oxd-autocomplete-dropdown > :nth-child(3) > span').click()
      // cy.get('.oxd-autocomplete-dropdown > * > span').each(($el,index,$list)=>{
        //oxd-autocomplete-text-input oxd-autocomplete-text-input--active
       //.oxd-autocomplete-dropdown
        // const prod = $el.text();
        // const productToSelect = 'Linda Jane Anderson';
        // cy.log("Index: " + index + " : " + $el.text())
        // if($el.text() === "Lisa  Andrews") {
        //     cy.wrap($el).click();
        // }
    //    })
            cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
    //     //Task for day
    //     //This concept in java script is called chaining
    //     cy.get('.oxd-dropdown-menu').find('.oxd-userdropdown-link').should('have.length',4)
    //     //Promise //rejected
        cy.get('.oxd-dropdown-menu').find('.oxd-userdropdown-link')
        .eq(3).contains('Logout').then((lastlink)=>{

            const linkname =lastlink.text()
            //you want me to print this where
            cy.log(linkname)
            cy.wrap(lastlink).click()
       })

    })
})
