//  describe('BMI_UI - index.html', function() {
//     beforeEach(function() {
//         jasmine.getFixtures().fixturesPath = '.';
//         loadFixtures('index.html');
//         $.holdReady(false);
//     });
// });

describe('BMI_UI - index.html', function() {
    beforeEach(function() {
      jasmine.getFixtures().fixturesPath = '.';
      loadFixtures('index.html');
      $.holdReady(false);
      $('#metric_true').trigger('click');
      $('#weight').val('90');
      $('#height').val('186');
      $('#calculate').trigger('click');
    });

    // it('expect weight field to show', function() {
    //   // debugger;
    //   expect($('#weight')).not.toBeVisible();
    // });

    it('captures weight as 90', function() {
      // $('#weight').val('90');
      expect($('#weight').val()).toEqual('90');
    });



  it('display BMI Value', function() {
    expect($('#display_value').text()).toEqual('Your BMI is 26.01');
  });

  it('displays BMI Message', function() {
    expect($('#display_message').text()).toEqual('and you are Overweight (your BMI is between 25 and 30)');
  });
});

describe('BMI_UI (imp) - index.html', function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
    $('#imperial_true').click();
    $('#weight_lb').val('170');
    $('#height_ft').val('6');
    $('#height_in').val('3');
    $('#calculate').trigger('click');
  });

  it('display BMI Value (imp)', function() {
    expect($('#display_value').text()).toBe('Your BMI is 21.25');
  });

  it('displays BMI Message (imp)', function() {
    expect($('#display_message').text()).toBe('and you are Normal (your BMI is between 18.5 and 25)');
  });
});

describe('BMI_UI (metric) - take 2 - index.html', function() {



  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
    $('#metric_true').click(); //.trigger('click');
    $('#weight').val('90');
    $('#height').val('186');
    $('#calculate').trigger('click');
  });

  it('expect weight field to show', function() {
    expect($('#weight')).toExist();
  });

  it('captures weight as 90', function() {
    $('#weight').val('90');
    expect($('#weight').val()).toEqual('90');
  });

  it('display BMI Value', function() {
    expect($('#display_value').text()).toEqual('Your BMI is 26.01');
  });

  it('displays BMI Message', function() {
    expect($('#display_message').text()).toEqual('and you are Overweight (your BMI is between 25 and 30)');
  });
});
