

describe('hellotest',()=> {

    it ('checks if hellotest is hellotest' , ()=> expect('hellotest').toBe('hellotest')
    );


    it ('checks if hellotest is not  hellotest' , ()=> expect('hellotest').not.toBe('hellotest1')
    );

});