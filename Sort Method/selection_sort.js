// selection.sort(compare)

d3.selectAll('p')
    .datum(function(){
        return this.innerText;
    });

console.log(d3.selectAll('p'));


d3.selectAll('p')
    .datum(function(){
        return this.innerText;
    })
    .sort((a, b)=> a-b);  // descending




let sortCircles = d3.selectAll('circle')
    .datum(function(){
        return d3.select(this).attr('r')
    })
    .sort((a, b)=> b - a)
    .attr('cx', function (d, i){
        return 50+ (i*80);
    })

console.log(sortCircles);