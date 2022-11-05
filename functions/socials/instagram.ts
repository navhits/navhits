const destinationURL = 'https://instagram.com/nav_s15';
const statusCode = 301;

export async function onRequestGet() {
    return new Response.redirect(destinationURL, statusCode);
}
