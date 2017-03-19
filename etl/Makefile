
all: water.json

water.csv:
	curl -o $@ http://datasd-prod.s3.amazonaws.com/water_testing/parameter_tests_datasd.csv

water.json: water.csv
	csvjson $< | jq 'import "./keys" as $$P;[group_by(.filtration_plant) | .[] | group_by(.sample_date) | .[] | map({($$P::P[0][(.parameter)]): .result_value | gsub("([^\\d\\.])";""), plant: .filtration_plant, sample_date: .sample_date}) | add]' > $@

water_plant.json: water.json
	jq "[.[] | {(.plant): .}]" $< > $@

water_plant_april.json: water.json
	 jq '.[] | select(.sample_date == "2016-04-04") | {(.plant): .}' $< > $@
