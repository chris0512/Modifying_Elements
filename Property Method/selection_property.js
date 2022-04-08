// selection.property(name, value)

const labelsFor = ['fname', 'lname', 'gender', 'male', 'female', 'nomention'];
const labels = d3.selectAll('label');
labels.filter(function(d, i){
    const d3Label = d3.select(this);
    d3Label.attr('for', labelsFor[i]);
});

d3.select('#fname')
    .property('type', 'text')
    .property('placeholder', 'John');

console.log(d3.select('#fname').property('placeholder'));


d3.select('#lname')
    .property('type', 'text')
    .property('placeholder', "Doe");
console.log(d3.select('#lname').property('type'));


d3.select('#submit')
    .property('type', 'submit')
    .property('value', 'submit');

const genderInputs = d3.selectAll('div input');
genderInputs.property('type', 'checkbox');

const genderValue = ['male', 'female', 'nomention'];
genderInputs.property('value', function(d, i){
    return genderValue[i];
});


const nomention = d3.select('#nomention');
nomention.property('checked', true);

document.querySelector('#formSubmit')
    .addEventListener('submit', e =>{
        e.preventDefault();
        console.log(d3.select('#fname').property('value'));
        console.log(d3.select('#lname').property('value'));
        console.log(d3.select('#male').property('checked'));
        console.log(d3.select('#female').property('checked'));
        console.log(d3.select('#nomention').property('checked'));
    });