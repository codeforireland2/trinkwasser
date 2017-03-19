/**
 * Contains legal limits per standard regarding water quality
 * For guage.js
 */
  var product = require('../models/Product.js')
  var observation = require('../models/Observation.js')
  var Uom = require('../models/Uom.js').schema
  var mgl = new Uom.model({
    value: 'mg/L',
    label: 'Milligram per liter, Mass concentration unit. Conversion to SI unit: 1 kg/m3 = 10^3 mg/L'
  })
  // var company = require('../models/Company.js')
  // var product = require('../models/Product.js')

  var Code = require('../models/Code.js').schema
  var natrium = new Code.model({standard: 'CAS', value: '7440-23-5', label: 'Sodium'})
  var kalium = new Code.model({standard: 'CAS', value: '7440-09-7', label: 'Potassium'})
  var calcium = new Code.model({standard: 'CAS', value: '7440-70-2', label: 'Calcium'})
  var magnesium = new Code.model({standard: 'CAS', value: '7439-95-4', label: 'Magnesium'})
  var fluorid = new Code.model({standard: 'CAS', value: '16984-48-8', label: 'Fluoride'})
  var chlorid = new Code.model({standard: 'CAS', value: '16887-00-6', label: 'Chloride'})
  var sulfat = new Code.model({standard: 'CAS', value: '14808-79-8', label: 'Sulfate'})
  var hydrogene = new Code.model({standard: 'CAS', value: '1333-74-0', label: 'Hydrogen'})
  var nitrat = new Code.model({standard: 'CAS', value: '14797-55-8', label: 'Nitrate'})
  var bicarbonate = new Code.model({standard: 'CAS', value: '', label: 'Bicarbonate (HCO3)'})
  var silica = new Code.model({standard: 'CAS', value: '3163-01-7', label: 'Silicate'})
  var trihalomethane = new Code.model({standard: 'CAS', value: '', label: 'Trihalomethanes (THMS)'})
  var microbacteria = new Code.model({standard: 'CAS', value: '', label: 'Microbacteria'})

  var uslimit = new product.model({
    name: 'US',
    observations: [
      new observation.model({value: 200, uom: mgl, eqr: natrium}),
      new observation.model({value: null, uom: mgl, eqr: kalium}),
      new observation.model({value: null, uom: mgl, eqr: calcium}),
      new observation.model({value: 50, uom: mgl, eqr: nitrat}),
      new observation.model({value: null, uom: mgl, eqr: magnesium}),
      new observation.model({value: 0, uom: mgl, eqr: fluorid}),
      new observation.model({value: 250, uom: mgl, eqr: chlorid}),
      new observation.model({value: 250, uom: mgl, eqr: sulfat}),
      new observation.model({value: null, uom: mgl, eqr: hydrogene})
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
