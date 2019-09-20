const qStringfy = require('query-string');
const parser = require('./parser');
const rp = require('./index');

class kickass {
  static getCategories() {
    return kickass.Categories;
  }

  static getOptions() {
    return kickass.Options;
  }

  static advanceSearch(element, options = undefined) {
    let uri;
    let query;
    let innerCategory;
    const category = 'usearch';
    const parsedElement = element.replace(' ', '%20');
    if (options !== undefined) {
      const page = options.page === undefined ? 1 : options.page;
      innerCategory = options.category === undefined ? undefined : options.category;

      if (options.field !== undefined) {
        const parameters = {
          field: options.field,
          sorder: options.order === undefined ? 'desc' : options.order,
        };
        query = qStringfy.stringify(parameters);
      }

      uri = `${kickass.baseURL + category}/${parsedElement}%20`;

      if (innerCategory !== undefined) uri += `category:${innerCategory}`;

      uri += `/${page}`;

      if (query !== undefined) uri += `?${query}`;
    } else uri = `${kickass.baseURL + category}/${parsedElement}`;

    let parsedData;
    return new Promise(((resolve, reject) => {
      kickass.getRequest(uri).then((html) => {
        parsedData = parser.getParsedData(html, true);
        parsedData.category = category;
        resolve(parsedData);
      })
        .catch((error) => {
          reject(error);
        });
    }));
  }


  /**
   * @param Field - kickass.options.kickass.Options.Fields.?
   * @param Order - kickass.options.kickass.Options.Order.?
   * @param page - any number
   */
  static getMovies(options = undefined) {
    const category = kickass.Categories.Movies;
    return kickass.sendRequest(category, options);
  }


  /**
   * @param Field - kickass.options.kickass.Options.Fields.?
   * @param Order - kickass.options.kickass.Options.Order.?
   * @param page - any number
   */
  static getTvTorrents(options = undefined) {
    const category = kickass.Categories.TV;
    return kickass.sendRequest(category, options);
  }


  /**
   * @param Field - kickass.options.kickass.Options.Fields.?
   * @param Order - kickass.options.kickass.Options.Order.?
   * @param page - any number
   */
  static getGames(options = undefined) {
    const category = kickass.Categories.GAMES;
    return kickass.sendRequest(category, options);
  }


  /**
   * @param Field - kickass.options.kickass.Options.Fields.?
   * @param Order - kickass.options.kickass.Options.Order.?
   * @param page - any number
   */
  static getMusic(options = undefined) {
    const category = kickass.Categories.MUSIC;
    return kickass.sendRequest(category, options);
  }


  /**
   * @param Field - kickass.options.kickass.Options.Fields.?
   * @param Order - kickass.options.kickass.Options.Order.?
   * @param page - any number
   */
  static getLatest(options = undefined) {
    const category = kickass.Categories.Latest;
    return kickass.sendRequest(category, options);
  }


  /**
   * @param Field - kickass.options.kickass.Options.Fields.?
   * @param Order - kickass.options.kickass.Options.Order.?
   * @param page - any number
   */
  static getApps(options = undefined) {
    const category = kickass.Categories.Apps;
    return kickass.sendRequest(category, options);
  }


  /**
   * @param Field - kickass.options.kickass.Options.Fields.?
   * @param Order - kickass.options.kickass.Options.Order.?
   * @param page - any number
   */
  static getXXX(options = undefined) {
    const category = kickass.Categories.XXX;
    return kickass.sendRequest(category, options);
  }

  /**
   * @param Field - kickass.options.kickass.Options.Fields.?
   * @param Order - kickass.options.kickass.Options.Order.?
   * @param page - any number
   */
  static getBooks(options = undefined) {
    const category = kickass.Categories.Books;
    return kickass.sendRequest(category, options);
  }


  /**
   * @param Field - kickass.options.kickass.Options.Fields.?
   * @param Order - kickass.options.kickass.Options.Order.?
   * @param page - any number
   */
  static getOthers(options = undefined) {
    const category = kickass.Categories.Other;
    return kickass.sendRequest(category, options);
  }

  /**
   * @param Field - kickass.options.kickass.Options.Fields.?
   * @param Order - kickass.options.kickass.Options.Order.?
   * @param page - any number
   */

  static getTop100(options = undefined) {
    const category = kickass.Categories.Top100;
    return kickass.sendRequest(category, options);
  }

  static sendRequest(category, options = undefined) {
    let url;
    if (options !== undefined) {
      const page = options.page === undefined ? 1 : options.page;
      let parameters;

      if (options.field !== undefined) {
        parameters = {
          field: options.field,
          sorder: options.order === undefined ? 'desc' : options.order,
        };
        const query = qStringfy.stringify(parameters);
        url = `${kickass.baseURL + category}/${page}?${query}`;
      } else {
        url = `${kickass.baseURL + category}/${page}`;
      }
    } else url = `${kickass.baseURL + category}/`;

    return new Promise(((resolve, reject) => {
      kickass.getRequest(url).then((html) => {
        const parsedData = parser.getParsedData(html);
        parsedData.category = category;
        resolve(parsedData);
      })
        .catch((error) => {
          reject(error);
        });
    }));
  }

  static getRequest(url) {
    return rp.default(url);
  }
}

kickass.Categories = {
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

kickass.Options = {
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

kickass.baseURL = 'https://kickass.vc/';

kickass.advanceSearch('westworld').then();

module.exports.baseURL = kickass.baseURL;
module.exports.Categories = kickass.Categories;
module.exports.Options = kickass.Options;
module.exports.getOptions = kickass.getOptions;
module.exports.getCategories = kickass.getCategories;
module.exports.getMovies = kickass.getMovies;
module.exports.getTvTorrents = kickass.getTvTorrents;
module.exports.getGames = kickass.getGames;
module.exports.getMusic = kickass.getMusic;
module.exports.getLatest = kickass.getLatest;
module.exports.getApps = kickass.getApps;
module.exports.getXXX = kickass.getXXX;
module.exports.getBooks = kickass.getBooks;
module.exports.getOthers = kickass.getOthers;
module.exports.getTop100 = kickass.getTop100;
module.exports.advanceSearch = kickass.advanceSearch;
