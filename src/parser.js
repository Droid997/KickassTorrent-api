'use strict';
const $ = require('cheerio');

class Parser{

    static getTableData(html)
    {
     
        let data={};
       
        let parsedData=[];
        data['results']=parsedData;

        var rows=$('table.data>tbody>#torrent__torrents',html)      
        for(let row in rows)
        {

           if(!( isNaN(parseInt(row))))
                parsedData.push(Parser.getRowData(rows,row));
        
       }
       data['total_results']=parsedData.length;
       let currentPage=$('.active',html);
       
       data['page']=currentPage.length>0?currentPage[0].attribs.href.split('/')[2]:1;
       return data;
    }

    static getRowData(rows,row) {
        let rowData={};
            let links=$('a',rows[row]);
            rowData['torrent magnet link']=links[1].attribs.href;
            rowData['Download magnet link']=links[2].attribs.href;
            rowData['page_link']=links[3].attribs.href;
            let title=$('.cellMainLink',rows[row]);
            rowData['title'] = title[0].children[0].data;
            rowData['posted_in']=links[6].attribs.href;
            
            let commentCount=$('.icommentjs',rows[row]);
            rowData['comments']=commentCount[0].children[0].data;
            
            let verifed=$('.ka-green',rows[row]);
            rowData['verifed']=verifed.length>0?true:false;

            let links2=$('.font11px,lightgrey,block ',rows[row]);
            let _postedArray=links2[0].children[0].data.split('\n');
            rowData['posted_by']=_postedArray[4];

            let verifiedUploader= $('.ka-verify', rows[row]);
            rowData['verified_uploader']=verifiedUploader.length>0?true:false;

            let rightData=$('.center  ',rows[row]);
            rowData['size']=rightData[1].children[0].data;
            rowData['time']=rightData[2].children[0].data;
            rowData['seeders']=rightData[3].children[0].data;
            rowData['leeches']=rightData[4].children[0].data.split("\n")[1];
        
            return rowData;
        }
}

module.exports.getParsedData=Parser.getTableData;

