const $ = require('cheerio');

class Parser {
  static getTableData(html, search = undefined) {
    const data = {};
    const parsedData = [];

    data.results = parsedData;

    const rows = search === true ? $('table.data>tbody>#torrent_latest_torrents', html) : $('table.data>tbody>#torrent__torrents', html);

    if (rows.length > 0) {
      Object.keys(rows).forEach((key) => {
        // eslint-disable-next-line no-restricted-globals
        if (!(isNaN(parseInt(key, 10)))) parsedData.push(Parser.getRowData(rows, key));
      });
    }

    data.total_results = parsedData.length;
    const currentPage = $('.active', html);

    data.page = currentPage.length > 0 ? currentPage[0].childNodes[0].data : 1;
    return data;
  }

  static getRowData(rows, row) {
    const rowData = {};
    const links = $('a', rows[row]);
    rowData['torrent magnet link'] = links[1].attribs.href;
    rowData['Download magnet link'] = links[2].attribs.href;
    rowData.page_link = links[3].attribs.href;
    const title = $('.cellMainLink', rows[row]);
    rowData.title = title[0].children[0].data;
    rowData.posted_in = links[6] === undefined ? '' : links[6].attribs.href;

    const commentCount = $('.icommentjs', rows[row]);
    rowData.comments = commentCount[0].children[0].data;

    const verifed = $('.ka-green', rows[row]);
    rowData.verifed = verifed.length > 0;

    const links2 = $('.font11px,.lightgrey,.block ', rows[row]);
    let postedBy = '';
    if (links2[0] === undefined) {
      postedBy = '';
    } else if (links2[0].childNodes.length === 5) {
      const arr = links2[0].childNodes[2].data.match(/\S+/g)[0];
      postedBy = arr;
    } else if (links2[0].childNodes.length === 3) {
      const arr = links2[0].childNodes[0].data.match(/\S+/g)[2];
      postedBy = arr;
    }

    rowData.posted_by = postedBy;

    const verifiedUploader = $('.ka-verify', rows[row]);
    rowData.verified_uploader = verifiedUploader.length > 0;

    const rightData = $('.center  ', rows[row]);
    rowData.size = rightData[1].children[0].data;
    rowData.time = rightData[2].children[0].data;
    rowData.seeders = rightData[3].children[0].data;
    rowData.leeches = rightData[4].children[0].data === 'N/A' ? 'N/A' : rightData[4].children[0].data.split('\n')[1];

    return rowData;
  }
}

module.exports.getParsedData = Parser.getTableData;
