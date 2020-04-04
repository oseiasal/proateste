const url = 'https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=owkpqhVOgEvYok0DVXFHwCxNC4AKogun'

createItens(fetchData)
function fetchData() {
  return fetch(url)
    .then(res => res.json())
    .then(item => item.results);
}

function createItens(funcData) {
  funcData().then(contents => {
    contents.map(item => {
      createMyElements('root', item);
      console.log(item);
    })
  })
}


function createMyElements(id, item) {
  let article = document.createElement('div');
  article.className = "news-article";

  let picture = document.createElement('picture');
  let imagem = document.createElement('img');
  imagem.setAttribute('src', `${item.thumbnail_standard}`);
  picture.append(imagem);
  article.append(picture);

  let articleBody = document.createElement('div');
  articleBody.className = "news-article-body";

  let h2 = document.createElement('h2');
  h2.textContent = item.title;
  let p = document.createElement('p');
  p.textContent = item.abstract;
  let p2 = document.createElement('p');
  p2.textContent = item.byline;

  let info_time = document.createElement('p');
  info_time.textContent = "Published: " + new Date(item.published_date).getDate() + "/" + new Date(item.published_date).getMonth() + "/" +
    new Date(item.published_date).getFullYear() + " - " + new Date(item.published_date).getHours() + ":" + new Date(item.published_date).getMinutes()

  articleBody.append(h2);
  articleBody.append(p);
  articleBody.append(p2);
  articleBody.append(info_time);
  article.append(articleBody);

  document.getElementById(id).appendChild(article)

}
