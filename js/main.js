const url = 'https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=owkpqhVOgEvYok0DVXFHwCxNC4AKogun'


async function fetchData() {
    const res = await fetch(url)
    const data = await res.json()

    console.log(data)
}
