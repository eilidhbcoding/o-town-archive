import * as marked from 'marked';
import minimist from 'minimist';
import * as fs from 'node:fs';

const argv = minimist(process.argv.slice(2));

for (let path of argv._) {
    const outputFile = path.replace(/^([^\/]*\/)*/, '').replace(/\.md$/, '.html');

    const md = fs.readFileSync(path, 'utf8');
    const html = marked.parse(md);
    fs.writeFileSync(`${argv.o}${outputFile}`, html)

}

console.log("MD files rendered\n")
