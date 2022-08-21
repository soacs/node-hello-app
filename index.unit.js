const html = require('./');

test('thtml file content', () => {
    expect(html(1, 2)).toContain(HTML'body');
});