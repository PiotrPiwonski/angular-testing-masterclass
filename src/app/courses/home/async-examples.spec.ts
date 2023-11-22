import {fakeAsync, flush, tick} from "@angular/core/testing";


describe('Async Testing Examples', () => {

  it('Asynchronous test example with Jasmine done()',
    (done: DoneFn) => {
    let test = false;
    setTimeout(() => {
      console.log('running assertions');
      test = true;
      expect(test).toBeTruthy();
      done();
    }, 1000);
    expect(test).not.toBeTruthy();
  });

  it('Asynchronous test example - setTimeout()',
    fakeAsync( () => {
    let test = false;
    setTimeout(() => {
      console.log('running assertions setTimeout()');
      test = true;
      expect(test).toBeTruthy();
    }, 1000);
    // tick(1000);
    flush();
    expect(test).toBeTruthy();
  }) );

  fit('Asynchronous test example - plain Promise', () => {
    let test = false;
    console.log('Creating promise');
    Promise.resolve().then(() => {
      console.log('Promise first then() evaluated successfully');
      // test = true;
      return Promise.resolve();
    })
      .then(() => {
        console.log('Promise second then() evaluated successfully');
        test = true;
      });
    console.log('Running test assertions');
    expect(test).toBeTruthy();
  });

});
