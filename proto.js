const userService = require('./src/service/user-service');

console.log('Users: ' + JSON.stringify(userService.getUsers(), null, 2));

const user1 = userService.getUser('JonathanAgnew@email.com');

console.log('User: ' + JSON.stringify(user1, null, 2));

const permits = userService.getPermitsForUser(user1.id);

console.log('Permits for user: ' + JSON.stringify(permits, null, 2));

const allPermits = userService.getPermits();

console.log('Permits: ' + JSON.stringify(allPermits, null, 2));

console.log('Authenticate true: ' + JSON.stringify(userService.authenticate(user1.username, user1.password), null, 2));

console.log('Authenticate false: ' + JSON.stringify(userService.authenticate(user1.username, 'qewr'), null, 2));
