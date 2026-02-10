import * as fs  from 'fs';
import * as path from 'path';
const __dirname = import.meta.dirname;

import NodeHtmlMarkdown from 'node-html-markdown';
import { XMLParser, XMLBuilder, XMLValidator} from 'fast-xml-parser';
const parser = new XMLParser();

let wpexport = fs.readFileSync( path.resolve( __dirname, '../assets/friendsofcoldenclough.xml' ), 'utf8' );
let jObj = parser.parse(wpexport);
jObj.rss.channel.item.forEach( item => {
    let htmlcontent = NodeHtmlMarkdown.NodeHtmlMarkdown.translate( item['content:encoded'] );
    let filename = item.title.toLowerCase().replaceAll( /\s\-/g, '' ) + '.md';
    fs.writeFileSync( path.resolve( __dirname, '../_posts', filename ), htmlcontent );
} );
// nhm.translate(/* html */ `<b>hello</b>`);