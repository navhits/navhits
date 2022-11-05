const destinationURL = 'https://github.com/navhits';
const statusCode = 301;

export async function onRequestGet() {
    return new Response.redirect(destinationURL, statusCode);
}
