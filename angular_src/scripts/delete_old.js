const del = require('del');
 
del([
    '../*',
    '!../angular_src',
    '!../_githubpages'
    ], {force : true}).then(paths => {
    console.log('Deleted files and folders:\n', paths.join('\n'));
});