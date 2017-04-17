describe("Person - imperial", function() {
  var person;

  beforeEach(function() {
    person = new Person({weight_lb: 169.76, height_ft: 6, height_in: 3, measure_type: 'imperial'});
  });

  it("should have weight of 77 kg (converted from 169.76 lb)", function() {
    expect(parseFloat(person.weight.toFixed(2))).toEqual(77);
  });

  it("should have a height of 190.5 cm (converted from 6 ft and 3 in)", function() {
    expect(parseFloat(person.height.toFixed(2))).toEqual(190.5);
  });

  it("should calculate BMI valueto 21.22", function() {
    person.calculate_bmi();
    expect(person.bmiValue).toEqual(21.22);
  });

  it("should have a BMI Message 'Normal'", function() {
    person.calculate_bmi();
    expect(person.bmiMessage).toEqual("Normal (your BMI is between 18.5 and 25)");
  });
});
