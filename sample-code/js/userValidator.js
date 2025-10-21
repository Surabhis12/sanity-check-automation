function validateUser(user) {
    if (!user.name || !user.email) throw new Error('Invalid user data');
    return true;
}
console.log(validateUser({ name: 'Surabhi', email: 'test@example.com' }));
echo "// test PR" >> sample-code/js/test.js

