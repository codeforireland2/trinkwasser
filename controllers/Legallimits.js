/**
 * Contains legal limits per standard regarding water quality
 * For guage.js
 */
  var product = require('../models/Product.js')
  var observation = require('../models/Observation.js')
    var uslimit = new product.model({
      name: 'US',
      observations: [
        new observation.model({value: 200, uom: mg_l, eqr: natrium}),
        new observation.model({value: null, uom: mg_l, eqr: kalium}),
        new observation.model({value: null, uom: mg_l, eqr: calcium}),
        new observation.model({value: 50, uom: mg_l, eqr: nitrat}),
        new observation.model({value: null, uom: mg_l, eqr: magnesium}),
        new observation.model({value: 0, uom: mg_l, eqr: fluorid}),
        new observation.model({value: 250, uom: mg_l, eqr: chlorid}),
        new observation.model({value: 250, uom: mg_l, eqr: sulfat}),
        new observation.model({value: null, uom: mg_l, eqr: hydrogene})
      ],
      sources: ['https://www.epa.gov/dwstandardsregulations/secondary-drinking-water-standards-guidance-nuisance-chemicals',
        'http://www.waterboards.ca.gov/drinking_water/certlic/drinkingwater/Chemicalcontaminants.shtml',
        'http://www.waterboards.ca.gov/drinking_water/certlic/drinkingwater/Documents/EDTlibrary/storlist.xls'],
      vendor: null
    })

/*
US  
  var nutrientLegalLimits = {
    'natrium': '200 mg/l',
    'kalium': '-',
    'calcium': '-',
    'magnesium': '-',
    'chlorid': '250 mg/l',
    'nitrat': '50 mg/l',
    'sulfat': '250 mg/l'
  }
  EU?
    var nutrientLimits = {
    'natrium': 200,
    'kalium': 12,
    'calcium': 400,
    'magnesium': 60,
    'chlorid': 240,
    'nitrat': 60,
    'sulfat': 240
  }
  */

