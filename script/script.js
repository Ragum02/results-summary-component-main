const reponse = await fetch("../data/data.json")

data = await reponse.json()
const dataValue = JSON.stringify(data);
pieces = JSON.parse(pieces);
