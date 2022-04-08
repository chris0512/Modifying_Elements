// selection.append('type')

let div1 = d3.select('#title');
div1.append('h1');

let div1H1 = div1.append('h1').text('Append');
console.log(div1H1);




const rectsData = [
    {
        x: 10,
        y: 10,
        height: 30,
        width: 50
    },
    {
        x:10,
        y:50,
        height: 30,
        width: 50
    }
]


const svgRects = d3.select('#svg').append('svg');
console.log(svgRects);

svgRects.attr('width', 300)
    .attr('height', 300);

// for(let i=0; i<rectsData.length; i++){
//     svgRects.append('rect');
// }

// d3.selectAll('rect').select(function(d, i, n){
//    d3.select(n[i]).attr('x', rectsData[i].x)
//        .attr('y', rectsData[i].y)
//        .attr('width', rectsData[i].width)
//        .attr('height', rectsData[i].height);
// });



for(let i=0; i<rectsData.length; i++){
    svgRects.append(function(){
        return document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    })
}

d3.selectAll('rect').select(function(d, i, n){
   d3.select(n[i]).attr('x', rectsData[i].x)
       .attr('y', rectsData[i].y)
       .attr('width', rectsData[i].width)
       .attr('height', rectsData[i].height);
});










