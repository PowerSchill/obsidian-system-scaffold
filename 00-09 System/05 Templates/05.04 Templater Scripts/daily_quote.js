async function getRequest(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error performing GET request");
    }
    return response;
  } catch (error) {
    throw new Error("Error performing GET request");
  }
}

async function daily_quote() {
  try {
    const response = await getRequest("https://api.quotable.io/random");
    const json = await response.json();

    const author = json.author;
    const quote = json.content;
    const new_content = `>[!quote]- ${quote}\n ><cite>${author}</cite>`;

    return new_content;
  } catch (error) {
    new Error("Error generating daily quote");
    return "Error generating daily quote";
  }
}

module.exports = daily_quote;
