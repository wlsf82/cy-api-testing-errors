describe('Typeform public API', () => {
  it('fails with 401 (Unauthorized) status code when access token is missing', () => {
    cy.request({
      method: 'GET',
      url: 'https://api.typeform.com/me',
      failOnStatusCode: false
    }).should(({ status, body }) => {
      expect(status).to.equal(401)
      expect(body).includes('AUTHENTICATION_FAILED')
      expect(body)
        .includes('Authentication credentials not found on the Request Headers')
      // Or
      const bodyObj = JSON.parse(body)
      const { code, description } = bodyObj
      expect(code).to.equal('AUTHENTICATION_FAILED')
      expect(description)
        .to.equal('Authentication credentials not found on the Request Headers')
    })
  })
})
