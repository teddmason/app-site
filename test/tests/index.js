module.exports = {
  'First test non page container': function (client) {
    client
      .url('http://localhost:3000')
      .waitForElementVisible('body', 1000)
      .assert.containsText('.name', 'TEDD MASON')
      .end()
  },
  'Page container test': function (client) {
    var homePage = client.page.home()

    homePage
      .navigate()
      .waitForElementVisible('@main', 1000)
      .assert.containsText('@title', 'TEDD MASON')

    client.end()
  }
}
