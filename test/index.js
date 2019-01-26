const assert = require('assert');
const kat = require('../src/kat');

const options ={
    Fields: {
      Size: 'size',
      Age: 'time_add',
      Seed: 'seeders',
      Leech: 'leechers',
    },
    Order: {
      Ascending: 'asc',
      Descending: 'desc',
    },
  };

  describe('kat.Options', () => {
    it('Checking for kat.options', (done) => {
        var opt=kat.getOptions()
      assert.equal(opt.Fields.Size,options.Fields.Size);
      assert.equal(opt.Fields.Age,options.Fields.Age);
      assert.equal(opt.Fields.Seed,options.Fields.Seed);
      assert.equal(opt.Fields.Leech,options.Fields.Leech);
      assert.equal(opt.Order.Ascending,options.Order.Ascending);
      assert.equal(opt.Order.Descending,options.Order.Descending);
      done();
    })
});

const category = {
    Movies: 'movies',
    TV: 'tv',
    GAMES: 'games',
    MUSIC: 'music',
    Latest: 'new',
    Apps: 'applications',
    XXX: 'xxx',
    Books: 'books',
    Other: 'other',
    Top100: 'top100',
  };
 
  describe('kat.getCategories()', () => {
    it("checking for kat.Categories", (done) => {
        var cat=kat.getCategories();
      assert.equal(cat.Movies,category.Movies);
      assert.equal(cat.TV,category.TV);
      assert.equal(cat.GAMES,category.GAMES);
      assert.equal(cat.MUSIC,category.MUSIC);
      assert.equal(cat.Latest,category.Latest);
      assert.equal(cat.Apps,category.Apps);
      assert.equal(cat.XXX,category.XXX);
      assert.equal(cat.Books,category.Books);
      assert.equal(cat.Other,category.Other);
      assert.equal(cat.Top100,category.Top100);
      done();
    })
});

const movie_test_samples = [
    { parameters:{},expectedResult:{category:"movies",page:1,total_results:20},description:'should return 20 Movie List'},
    { parameters:{page:2,field:'size'},expectedResult:{category:"movies",page:2,total_results:20},description:'should return 20 Movie for page 2 with size in descending order '},
    { parameters:{page:3,field:'time_add',order:'asc'},expectedResult:{category:"movies",page:3,total_results:20},description:'should return 20 Movie for page 3 with age in ascending order'},
    { parameters:{page:4,field:'seeders',order:'desc'},expectedResult:{category:"movies",page:4,total_results:20},description:'should return 20 Movie for page 4 with seeders in descending order'},
    { parameters:{field:'leecher',order:'asc'},expectedResult:{category:"movies",page:1,total_results:20},description:'should return 20 Movie for page 1 field leechers and order asc'},
    { parameters:{},expectedResult:{category:"movies",page:1,total_results:20},description:'should return 20 Movie for page 1'},
    { parameters:{page:null,field:12,order:12},expectedResult:{category:"movies",page:1,total_results:20},description:'should return 20 Movie for page 1 parameters passed as null'},
    ];

describe('getMovies()', () => {
    movie_test_samples.forEach(test=>{
    it(test.description, (done) => {
        const ppage=test.parameters.page;
        const pfield=test.parameters.field;
        const porder=test.parameters.order;
        
        kat.getMovies({page:ppage,field:pfield,order:porder}).then(parsedData=>{
            assert.equal(test.expectedResult.category,parsedData.category);
            assert.equal(test.expectedResult.page,parsedData.page);
            assert.equal(test.expectedResult.total_results,parsedData.total_results);
            done()
        }).catch(err=>done(err));
       
        
      });
 })  
});

const tv_test_samples = [
    { parameters:{},expectedResult:{category:"tv",page:1,total_results:20},description:'should return 20 tv List'},
    { parameters:{page:2,field:'size'},expectedResult:{category:"tv",page:2,total_results:20},description:'should return 20 tv for page 2 with size in descending order '},
    { parameters:{page:3,field:'time_add',order:'asc'},expectedResult:{category:"tv",page:3,total_results:20},description:'should return 20 tv for page 3 with age in ascending order'},
    { parameters:{page:4,field:'seeders',order:'desc'},expectedResult:{category:"tv",page:4,total_results:20},description:'should return 20 tv for page 4 with seeders in descending order'},
    { parameters:{field:'leecher',order:'asc'},expectedResult:{category:"tv",page:1,total_results:20},description:'should return 20 tv for page 1 field leechers and order asc'},
    { parameters:{},expectedResult:{category:"tv",page:1,total_results:20},description:'should return 20 tv for page 1'},
    { parameters:{page:null,field:12,order:12},expectedResult:{category:"tv",page:1,total_results:20},description:'should return 20 tv for page 1 parameters passed as null'},
    ];

describe('getTvTorrents()', () => {
    tv_test_samples.forEach(test=>{
    it(test.description, (done) => {
        const ppage=test.parameters.page;
        const pfield=test.parameters.field;
        const porder=test.parameters.order;
        
        kat.getTvTorrents({page:ppage,field:pfield,order:porder}).then(parsedData=>{
            assert.equal(test.expectedResult.category,parsedData.category);
            assert.equal(test.expectedResult.page,parsedData.page);
            assert.equal(test.expectedResult.total_results,parsedData.total_results);
            done()
        }).catch(err=>done(err));
       
        
      });
 })  
});

const game_test_samples = [
    { parameters:{},expectedResult:{category:"games",page:1,total_results:20},description:'should return 20 games List'},
    { parameters:{page:2,field:'size'},expectedResult:{category:"games",page:2,total_results:20},description:'should return 20 games for page 2 with size in descending order '},
    { parameters:{page:3,field:'time_add',order:'asc'},expectedResult:{category:"games",page:3,total_results:20},description:'should return 20 games for page 3 with age in ascending order'},
    { parameters:{page:4,field:'seeders',order:'desc'},expectedResult:{category:"games",page:4,total_results:20},description:'should return 20 games for page 4 with seeders in descending order'},
    { parameters:{field:'leecher',order:'asc'},expectedResult:{category:"games",page:1,total_results:20},description:'should return 20 games for page 1 field leechers and order asc'},
    { parameters:{},expectedResult:{category:"games",page:1,total_results:20},description:'should return 20 games for page 1'},
    { parameters:{page:null,field:12,order:12},expectedResult:{category:"games",page:1,total_results:20},description:'should return 20 games for page 1 parameters passed as null'},
    ];

    describe('getGames()', () => {
        game_test_samples.forEach(test=>{
        it(test.description, (done) => {
            const ppage=test.parameters.page;
            const pfield=test.parameters.field;
            const porder=test.parameters.order;
            
            kat.getGames({page:ppage,field:pfield,order:porder}).then(parsedData=>{
                assert.equal(test.expectedResult.category,parsedData.category);
                assert.equal(test.expectedResult.page,parsedData.page);
                assert.equal(test.expectedResult.total_results,parsedData.total_results);
                done()
            }).catch(err=>done(err));
           
            
          });
     })  
    });

    const music_test_samples = [
        { parameters:{},expectedResult:{category:"music",page:1,total_results:20},description:'should return 20 music List'},
        { parameters:{page:2,field:'size'},expectedResult:{category:"music",page:2,total_results:20},description:'should return 20 music for page 2 with size in descending order '},
        { parameters:{page:3,field:'time_add',order:'asc'},expectedResult:{category:"music",page:3,total_results:20},description:'should return 20 music for page 3 with age in ascending order'},
        { parameters:{page:4,field:'seeders',order:'desc'},expectedResult:{category:"music",page:4,total_results:20},description:'should return 20 music for page 4 with seeders in descending order'},
        { parameters:{field:'leecher',order:'asc'},expectedResult:{category:"music",page:1,total_results:20},description:'should return 20 music for page 1 field leechers and order asc'},
        { parameters:{},expectedResult:{category:"music",page:1,total_results:20},description:'should return 20 music for page 1'},
        { parameters:{page:null,field:12,order:12},expectedResult:{category:"music",page:1,total_results:20},description:'should return 20 music for page 1 parameters passed as null'},
        ];
    
    describe('getMusic()', () => {
    music_test_samples.forEach(test=>{
    it(test.description, (done) => {
        const ppage=test.parameters.page;
        const pfield=test.parameters.field;
        const porder=test.parameters.order;
        
        kat.getMusic({page:ppage,field:pfield,order:porder}).then(parsedData=>{
            assert.equal(test.expectedResult.category,parsedData.category);
            assert.equal(test.expectedResult.page,parsedData.page);
            assert.equal(test.expectedResult.total_results,parsedData.total_results);
            done()
        }).catch(err=>done(err));
        
        
        });
    })  
});

    const latest_test_samples = [
        { parameters:{},expectedResult:{category:"new",page:1,total_results:50},description:'should return 50 new List'},
        { parameters:{page:2,field:'size'},expectedResult:{category:"new",page:2,total_results:50},description:'should return 50 new for page 2 with size in descending order '},
        { parameters:{page:3,field:'time_add',order:'asc'},expectedResult:{category:"new",page:3,total_results:50},description:'should return 50 new for page 3 with age in ascending order'},
        { parameters:{page:4,field:'seeders',order:'desc'},expectedResult:{category:"new",page:4,total_results:50},description:'should return 50 new for page 4 with seeders in descending order'},
        { parameters:{field:'leecher',order:'asc'},expectedResult:{category:"new",page:1,total_results:50},description:'should return 50 new for page 1 field leechers and order asc'},
        { parameters:{},expectedResult:{category:"new",page:1,total_results:50},description:'should return 50 new for page 1'},
        { parameters:{page:null,field:12,order:12},expectedResult:{category:"new",page:1,total_results:50},description:'should return 50 new for page 1 parameters passed as null'},
        ];

    describe('getLatest()', () => {
        latest_test_samples.forEach(test=>{
        it(test.description, (done) => {
            const ppage=test.parameters.page;
            const pfield=test.parameters.field;
            const porder=test.parameters.order;
            
            kat.getLatest({page:ppage,field:pfield,order:porder}).then(parsedData=>{
                assert.equal(test.expectedResult.category,parsedData.category);
                assert.equal(test.expectedResult.page,parsedData.page);
                assert.equal(test.expectedResult.total_results,parsedData.total_results);
                done()
            }).catch(err=>done(err));
            
            
            });
        })  
    });

    const apps_test_samples = [
        { parameters:{},expectedResult:{category:"applications",page:1,total_results:20},description:'should return 20 applications List'},
        { parameters:{page:2,field:'size'},expectedResult:{category:"applications",page:2,total_results:20},description:'should return 20 applications for page 2 with size in descending order '},
        { parameters:{page:3,field:'time_add',order:'asc'},expectedResult:{category:"applications",page:3,total_results:20},description:'should return 20 applications for page 3 with age in ascending order'},
        { parameters:{page:4,field:'seeders',order:'desc'},expectedResult:{category:"applications",page:4,total_results:20},description:'should return 20 applications for page 4 with seeders in descending order'},
        { parameters:{field:'leecher',order:'asc'},expectedResult:{category:"applications",page:1,total_results:20},description:'should return 20 applications for page 1 field leechers and order asc'},
        { parameters:{},expectedResult:{category:"applications",page:1,total_results:20},description:'should return 20 applications for page 1'},
        { parameters:{page:null,field:12,order:12},expectedResult:{category:"applications",page:1,total_results:20},description:'should return 20 applications for page 1 parameters passed as null'},
        ];

    describe('getApps()', () => {
        apps_test_samples.forEach(test=>{
        it(test.description, (done) => {
            const ppage=test.parameters.page;
            const pfield=test.parameters.field;
            const porder=test.parameters.order;
            
            kat.getApps({page:ppage,field:pfield,order:porder}).then(parsedData=>{
                assert.equal(test.expectedResult.category,parsedData.category);
                assert.equal(test.expectedResult.page,parsedData.page);
                assert.equal(test.expectedResult.total_results,parsedData.total_results);
                done()
            }).catch(err=>done(err));
            
            
            });
        })  
    });

    const xxx_test_samples = [
        { parameters:{},expectedResult:{category:"xxx",page:1,total_results:20},description:'should return 20 xxx List'},
        { parameters:{page:2,field:'size'},expectedResult:{category:"xxx",page:2,total_results:20},description:'should return 20 xxx for page 2 with size in descending order '},
        { parameters:{page:3,field:'time_add',order:'asc'},expectedResult:{category:"xxx",page:3,total_results:20},description:'should return 20 xxx for page 3 with age in ascending order'},
        { parameters:{page:4,field:'seeders',order:'desc'},expectedResult:{category:"xxx",page:4,total_results:20},description:'should return 20 xxx for page 4 with seeders in descending order'},
        { parameters:{field:'leecher',order:'asc'},expectedResult:{category:"xxx",page:1,total_results:20},description:'should return 20 xxx for page 1 field leechers and order asc'},
        { parameters:{},expectedResult:{category:"xxx",page:1,total_results:20},description:'should return 20 xxx for page 1'},
        { parameters:{page:null,field:12,order:12},expectedResult:{category:"xxx",page:1,total_results:20},description:'should return 20 xxx for page 1 parameters passed as null'},
        ];
        
    describe('getXXX()', () => {
        xxx_test_samples.forEach(test=>{
        it(test.description, (done) => {
            const ppage=test.parameters.page;
            const pfield=test.parameters.field;
            const porder=test.parameters.order;
            
            kat.getXXX({page:ppage,field:pfield,order:porder}).then(parsedData=>{
                assert.equal(test.expectedResult.category,parsedData.category);
                assert.equal(test.expectedResult.page,parsedData.page);
                assert.equal(test.expectedResult.total_results,parsedData.total_results);
                done()
            }).catch(err=>done(err));
            
            
            });
        })  
    });

    const books_test_samples = [
        { parameters:{},expectedResult:{category:"books",page:1,total_results:20},description:'should return 20 books List'},
        { parameters:{page:2,field:'size'},expectedResult:{category:"books",page:2,total_results:20},description:'should return 20 books for page 2 with size in descending order '},
        { parameters:{page:3,field:'time_add',order:'asc'},expectedResult:{category:"books",page:3,total_results:20},description:'should return 20 books for page 3 with age in ascending order'},
        { parameters:{page:4,field:'seeders',order:'desc'},expectedResult:{category:"books",page:4,total_results:20},description:'should return 20 books for page 4 with seeders in descending order'},
        { parameters:{field:'leecher',order:'asc'},expectedResult:{category:"books",page:1,total_results:20},description:'should return 20 books for page 1 field leechers and order asc'},
        { parameters:{},expectedResult:{category:"books",page:1,total_results:20},description:'should return 20 books for page 1'},
        { parameters:{page:null,field:12,order:12},expectedResult:{category:"books",page:1,total_results:20},description:'should return 20 books for page 1 parameters passed as null'},
        ];


    describe('getBooks()', () => {
    books_test_samples.forEach(test=>{
    it(test.description, (done) => {
        const ppage=test.parameters.page;
        const pfield=test.parameters.field;
        const porder=test.parameters.order;
        
        kat.getBooks({page:ppage,field:pfield,order:porder}).then(parsedData=>{
            assert.equal(test.expectedResult.category,parsedData.category);
            assert.equal(test.expectedResult.page,parsedData.page);
            assert.equal(test.expectedResult.total_results,parsedData.total_results);
            done()
        }).catch(err=>done(err));
        
        
        });
    })  
});

const other_test_samples = [
    { parameters:{},expectedResult:{category:"other",page:1,total_results:20},description:'should return 20 other List'},
    { parameters:{page:2,field:'size'},expectedResult:{category:"other",page:2,total_results:20},description:'should return 20 other for page 2 with size in descending order '},
    { parameters:{page:3,field:'time_add',order:'asc'},expectedResult:{category:"other",page:3,total_results:20},description:'should return 20 other for page 3 with age in ascending order'},
    { parameters:{page:4,field:'seeders',order:'desc'},expectedResult:{category:"other",page:4,total_results:20},description:'should return 20 other for page 4 with seeders in descending order'},
    { parameters:{field:'leecher',order:'asc'},expectedResult:{category:"other",page:1,total_results:20},description:'should return 20 other for page 1 field leechers and order asc'},
    { parameters:{},expectedResult:{category:"other",page:1,total_results:20},description:'should return 20 other for page 1'},
    { parameters:{page:null,field:12,order:12},expectedResult:{category:"other",page:1,total_results:20},description:'should return 20 other for page 1 parameters passed as null'},
    ];


describe('getOthers()', () => {
    other_test_samples.forEach(test=>{
it(test.description, (done) => {
    const ppage=test.parameters.page;
    const pfield=test.parameters.field;
    const porder=test.parameters.order;
    
    kat.getOthers({page:ppage,field:pfield,order:porder}).then(parsedData=>{
        assert.equal(test.expectedResult.category,parsedData.category);
        assert.equal(test.expectedResult.page,parsedData.page);
        assert.equal(test.expectedResult.total_results,parsedData.total_results);
        done()
    }).catch(err=>done(err));
    
    
    });
})  
});

const top100_test_samples = [
    { parameters:{page:1,field:'size'},expectedResult:{category:"top100",page:1,total_results:100},description:'should return top100 for page 1 with size in descending order '},
    { parameters:{page:1,field:'size'},expectedResult:{category:"top100",page:1,total_results:100},description:'should return top100 for page 1 with size in descending order '},
    { parameters:{page:1,field:'time_add',order:'asc'},expectedResult:{category:"top100",page:1,total_results:100},description:'should return top100 for page 1 with age in ascending order'},
    { parameters:{page:1,field:'seeders',order:'desc'},expectedResult:{category:"top100",page:1,total_results:100},description:'should return top100 for page 1 with seeders in descending order'},
    { parameters:{field:'leecher',order:'asc'},expectedResult:{category:"top100",page:1,total_results:100},description:'should return top100 for page 1 field leechers and order asc'},
    { parameters:{},expectedResult:{category:"top100",page:1,total_results:100},description:'should return top100 for page 1'},
    { parameters:{page:null,field:12,order:12},expectedResult:{category:"top100",page:1,total_results:100},description:'should return top100 for page 1 parameters passed as null'},
    ];


describe('getTop100()', () => {
    top100_test_samples.forEach(test=>{
it(test.description, (done) => {
    const ppage=test.parameters.page;
    const pfield=test.parameters.field;
    const porder=test.parameters.order;
    
    kat.getTop100({page:ppage,field:pfield,order:porder}).then(parsedData=>{
        assert.equal(test.expectedResult.category,parsedData.category);
        assert.equal(test.expectedResult.page,parsedData.page);
        assert.equal(test.expectedResult.total_results,parsedData.total_results);
        done()
    }).catch(err=>done(err));
    
    
    });
})  
});


const advanceSearch_test_samples = [
    { parameters:{element:'west world',page:1,field:'size'},expectedResult:{category:"usearch",page:1},description:'should return west world  for page 1 '},
    { parameters:{element:'errornomessage',field:'size'},expectedResult:{category:"usearch",page:1},description:'should return errornomessage with zero result '},
    { parameters:{element:'west world',field:'seeders',order:'asc'},expectedResult:{category:"usearch"},description:'should return west world with 50 result '},    
    { parameters:{element:'west world',category:'tv',field:'seeders',order:'asc'},expectedResult:{category:"usearch",innerCategory:"/tv",postedIn:'tv'},description:'should return west world with 50 result '},    
    { parameters:{element:'west world'},expectedResult:{category:"usearch",innerCategory:"/tv",postedIn:'tv'},description:'should return results under tv '},    
];


describe('advanceSearch()', () => {
    advanceSearch_test_samples.forEach(test=>{
it(test.description, (done) => {
    const ppage=test.parameters.page;
    const pfield=test.parameters.field;
    const porder=test.parameters.order;
    const pelement=test.parameters.element;
    const pcategory=test.parameters.category;
    
    kat.advanceSearch(pelement,{page:ppage,field:pfield,order:porder,category:pcategory}).then(parsedData=>{
       
        assert.equal(test.expectedResult.category,parsedData.category);
        if(ppage!=undefined)
        assert.equal(test.expectedResult.page,parsedData.page);

        if(pcategory!=undefined)
        assert.equal(test.expectedResult.innerCategory,parsedData.results[0].posted_in);

        done()
    }).catch(err=>done(err));
    
    
    });
})  
});