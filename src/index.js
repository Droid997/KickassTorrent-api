import rp from 'request-promise';

class getAJAX {
  static getData(url) {
    return new Promise((resolve, reject) => rp(url).then(data => resolve(data))
      .catch(error => reject(error)));
  }
}

export default getAJAX.getData;
