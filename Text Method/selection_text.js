// selection.text(value)

let text1 = d3.select('text').text();
console.log(text1);

text1 = d3.select('text').text('Text1');

text1.text(null);

let texts = d3.selectAll('text').text("D3 is awesome");
console.log(texts);

texts.text(function (d, i, n){
    return `This is a text on line ${i+1} with index at n[${i}]`;
});