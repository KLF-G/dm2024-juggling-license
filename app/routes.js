//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

//JUGGLING-BALLS PAGE
// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/NUNJUCKS/juggling-balls-answer', function (req, res) {

    // Make a variable and give it the value from 'how-many-balls'
    var howManyBalls = req.session.data['how-many-balls']
  
    // Check whether the variable matches a condition
    if (howManyBalls == "3 or more"){
      // Send user to next page
      res.redirect('/NUNJUCKS/juggling-trick')
    } else {
      // Send user to ineligible page
      res.redirect('/NUNJUCKS/ineligible')
    }
  
  })
