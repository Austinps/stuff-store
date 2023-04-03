import SingleArticle from './SingleArticle';

export default function Articles() {
  return (
    <div class='blog-header-container'>
      <SingleArticle />
      <div class='blog-header'>
        <div class='blog-article header-article'>
          <div class='blog-big__title'>Atoms</div>
          <div class='blog-menu small-title date'>12.06.2021</div>
        </div>
        <div class='blog-article'>
          <img src='' alt='' />
          <h2>
            Talking About <span>Vulnerability</span> During Quarantine
          </h2>
          <div class='blog-detail'>
            <span>By Tom Hiddleston</span>
            <span>5 Min Read</span>
          </div>
          <p>
            Having traveled to Turkey multiple times, with critics praising
            Ocean's introspective lyrics and the album's unconventional
          </p>
          <a href='#'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              class='feather feather-corner-down-right'
              viewBox='0 0 24 24'
            >
              <path d='M15 10l5 5-5 5' />
              <path d='M4 4v7a4 4 0 004 4h12' />
            </svg>
            See More
          </a>
        </div>
      </div>
      <div class='blog-header'>
        <div class='blog-article header-article'>
          <div class='blog-big__title'>Molecules</div>
          <div class='blog-menu small-title date'>12.06.2021</div>
        </div>
        <div class='blog-article'>
          <img src='' alt='' />
          <h2>
            How 2020 Changed <span>Understanding</span> Of Mental Health
          </h2>
          <div class='blog-detail'>
            <span>By Scarlett Witch</span>
            <span>5 Min Read</span>
          </div>
          <p>
            Time is defines ad the indefinete continued progress, with critics
            praising Ocean's introspective lyrics and the album's
          </p>
          <a href='#'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              class='feather feather-corner-down-right'
              viewBox='0 0 24 24'
            >
              <path d='M15 10l5 5-5 5' />
              <path d='M4 4v7a4 4 0 004 4h12' />
            </svg>
            See More
          </a>
        </div>
      </div>
    </div>
  );
}
