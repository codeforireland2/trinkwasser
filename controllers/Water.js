 (function Water() {
    'use strict'
    var company = require('../models/Company.js')
    var product = require('../models/Product.js')
    var observation = require('../models/Observation.js')
    var Uom = require('../models/Uom.js').schema
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


}
) Water()
module.exports = Water

