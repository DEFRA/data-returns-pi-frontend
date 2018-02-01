
console.log(new Date('2018-02-01T11:55:57.511Z'));

/*
 *2018-02-01T09:34:38.864+0000
 *2018-02-01T11:55:57.511Z
 */

console.log(
    Intl.DateTimeFormat('en-GB', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric' }).format(new Date('2018-02-01T09:34:38.864+0000'))
);

console.log(new Intl.DateTimeFormat('en-GB', {hour: 'numeric'}).format(new Date('2018-02-01T09:34:38.864+0000')));

console.log(new Date().toLocaleString('en-GB'));