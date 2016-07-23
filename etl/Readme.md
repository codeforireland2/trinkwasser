# Makefile Readme

## What does this do?

It gets the file from the SD Open Data Portal and transforms the csv file to a json file, grouped by plant and date and aggregates the parameters for each plant.

### Specifics in the jq string
`import "./keys" as $$P;` import the mapping keys
`group_by(.filtration_plant) ` Group by plant
`group_by(.sample_date) ` Group by date
`map({(.parameter): .result_value ` map each entry as a value of parameter name (the actual name) and the other varaibles plant and date
`($$P::P[0][(.parameter)]` replace the name of the parameter with the name of the keys.json (short names for later usage in app)
`.result_value | gsub("([^\\d\\.])";"")` replace each non digit or dot with empty strings, remove all other characters esentially (whitespace and <> characters)
`| add` add these mapped items into one object for each plant and date combination
