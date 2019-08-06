const projecstCards = document.querySelector('.projects__cards--js');
const restUrl = 'https://api.github.com';
const user = 'rogreyroom';
const getRepos = `/users/${user}/repos`;
const fetchURL = `${restUrl}${getRepos}`;

fetch(fetchURL, {method: 'get'})
  .then(resp => {
    return resp.json();
  })
  .then(repos => {

    for (const repo of repos) {
      let {name, html_url, homepage, description} = repo;
      if (!/starter/.test(name) && !/form/.test(name)) {
        let card = `
                <section class="card">
                    <div class="card__content">
                    <img
                        src="assets/images/github.svg"
                        alt="GitHub logo"
                        class="card__image"
                    />
                    <h3 class="card__title">
                        ${name}
                    </h3>
                    <p class="card__description">
                        ${description}
                    </p>
                    </div>
                    <footer class="card__footer">
                    <ul class="card__list">
                    ${(() => {
                      if (homepage !== null && homepage !== '') {
                        return `
                                <li class="card__item card__item--website">
                                    <a
                                        href="${homepage}"
                                        class="card__link"
                                    >
                                        Demo
                                    </a>
                                </li>
                                `;
                      } else {
                        return '';
                      }
                    })()}

                        <li class="card__item card__item--repo">
                        <a
                            href="${html_url}"
                            class="card__link"
                        >
                            GitHub
                        </a>
                        </li>
                    </ul>
                    </footer>
                </section>
                `;
        projecstCards.insertAdjacentHTML('afterbegin', card);
      }
    }
  })
  .catch(err => {
    console.log(err);
  });
