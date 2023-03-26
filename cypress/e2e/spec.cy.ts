describe("Testing add to cart", () => {
  it("Clicks the add to cart message", () => {
    cy.visit("https://comicsworld.vercel.app/")

    cy.contains("Adicionar ao carrinho").click()
    cy.url().should("include", "/carrinho")
  })
})

describe("Testing remove from cart", () => {
  it("Clicks the remove", () => {
    cy.visit("https://comicsworld.vercel.app/")

    cy.contains("Adicionar ao carrinho").click()
    
    cy.contains("Remover").click()
    cy.url().should("include", "/carrinho")
  })
})