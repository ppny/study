process.nextTick(function () {
    console.log('nextTick callback!');
});
console.log('nextTick was set!');

if (typeof(window) === 'undefined') {
    console.log('node.js');
} else {
    console.log('browser');
}