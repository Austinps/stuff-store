import styled from 'styled-components';

export default function Landing() {
  return (
    <Wrapper>
      <div class='blog'>
        <div class='blog-part is-menu'>
          <a href='#' class='blog-menu'>
            Work
            <svg
              fill='none'
              stroke='currentColor'
              stroke-width='.7'
              stroke-linecap='round'
              stroke-linejoin='round'
              class='feather feather-arrow-up-right'
              viewBox='0 0 24 24'
            >
              <path d='M7 17L17 7M7 7h10v10' />
            </svg>
          </a>
          <a href='#' class='blog-menu'>
            Studio
          </a>
          <a href='#' class='blog-menu'>
            Blog
          </a>
          <a href='#' class='blog-menu'>
            Contact
          </a>
          <a href='#' class='blog-menu mention'>
            @MagazineDope
          </a>
          <a href='#' class='blog-menu subscribe'>
            Subscribe
          </a>
        </div>
        <div class='blog-header blog-is-sticky'>
          <div class='blog-article header-article'>
            <div class='blog-big__title'>Self</div>
            <div class='blog-menu rounded small-title'>Pinned Issue</div>
          </div>
          <div class='blog-article page-number'>NO. 01</div>
        </div>
        <div class='blog-header-container'>
          <div class='blog-header'>
            <div class='blog-article header-article'>
              <div class='blog-big__title'>Esteem</div>
              <div class='blog-menu small-title date'>12.06.2021</div>
            </div>
            <div class='blog-article'>
              <img
                src='https://images.unsplash.com/photo-1496629062893-b0f566065d44?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                alt=''
              />
              <h2>
                Sharing The <span>Widespread</span> Acclaim About Motivation
              </h2>
              <div class='blog-detail'>
                <span>By Richard Carnation</span>
                <span>5 Min Read</span>
              </div>
              <p>
                Blonde received widespread acclaim, with critics praising
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
              <div class='blog-big__title'>Love</div>
              <div class='blog-menu small-title date'>12.06.2021</div>
            </div>
            <div class='blog-article'>
              <img
                src='https://images.unsplash.com/photo-1529255484355-cb73c33c04bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTh8fGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                alt=''
              />
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
              <div class='blog-big__title'>Control</div>
              <div class='blog-menu small-title date'>12.06.2021</div>
            </div>
            <div class='blog-article'>
              <img
                src='https://images.unsplash.com/photo-1616248249518-b16013cd4e42?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTkzfHxibGFjayUyMGFuZCUyMHdoaXRlfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                alt=''
              />
              <h2>
                How 2020 Changed <span>Understanding</span> Of Mental Health
              </h2>
              <div class='blog-detail'>
                <span>By Scarlett Witch</span>
                <span>5 Min Read</span>
              </div>
              <p>
                Time is defines ad the indefinete continued progress, with
                critics praising Ocean's introspective lyrics and the album's
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
        <div class='blog-part right-blog'>
          {/* <marquee width='100%' direction='left'>
            <span>Now And Then You Miss It Sounds Make You Cry</span>
            <span>Now In - MoMa Sharing Exhibition NOW</span>
            <span>NYC Opens After Long Lockdown Check</span>
          </marquee> */}
          <div class='blog-right-title-container'>
            <div class='blog-right-title'>Featured Articles</div>
            <div class='blog-menu rounded'>See All</div>
          </div>
          <div class='blog-right'>
            <div class='blog-right-container'>
              <div class='blog-title-date'>
                <div class='blog-right-page'>1</div>
                <div class='date'>12.06.2021</div>
              </div>
              <div class='blog-right-page-title'>
                Blonde - Widespread Acclaim
              </div>
              <div class='blog-right-page-subtitle'>
                Blonde received widespread acclaim, with critics praising
                Ocean's introspective lyrics and the album's
              </div>
            </div>
            <div class='blog-right-container'>
              <div class='blog-title-date'>
                <div class='blog-right-page'>2</div>
                <div class='date'>12.06.2021</div>
              </div>
              <div class='blog-right-page-title'>
                Introspective Lyrics and Beats
              </div>
              <div class='blog-right-page-subtitle'>
                When we toured Scotland we stopped at several self-sealing
                houses because hotels would
              </div>
            </div>
            <div class='blog-right-container'>
              <div class='blog-title-date'>
                <div class='blog-right-page'>3</div>
                <div class='date'>12.06.2021</div>
              </div>
              <div class='blog-right-page-title'>
                The Language Of Gris: Comples Beauty Of Monochrome
              </div>
              <div class='blog-right-page-subtitle'>
                The interior concept was conceived of by Dutch archtitect Studio
                Anne Holtrop who cleverly emulated
              </div>
            </div>
            <div class='blog-right-container'>
              <div class='blog-title-date'>
                <div class='blog-right-page'>4</div>
                <div class='date'>12.06.2021</div>
              </div>
              <div class='blog-right-page-title'>
                A24 IS LAUNCHING ITS OWN BEAUTY BRAND
              </div>
              <div class='blog-right-page-subtitle'>
                Blonde received widespread acclaim, with critics praising
                Ocean's introspective lyrics and the album's
              </div>
            </div>
            <div class='blog-right-container'>
              <div class='blog-title-date'>
                <div class='blog-right-page'>5</div>
                <div class='date'>12.06.2021</div>
              </div>
              <div class='blog-right-page-title'>
                Elon Musk's SpaceX is launching a moon satellite
              </div>
              <div class='blog-right-page-subtitle'>
                The interior concept was conceived of by Dutch archtitect Studio
                Anne Holtrop who cleverly emulated
              </div>
            </div>
            <div class='blog-right-container'>
              <div class='blog-title-date'>
                <div class='blog-right-page'>6</div>
                <div class='date'>12.06.2021</div>
              </div>
              <div class='blog-right-page-title'>
                What Happens When You Leave Your Old life Behind
              </div>
              <div class='blog-right-page-subtitle'>
                The interior concept was conceived of by Dutch archtitect Studio
                Anne Holtrop who cleverly emulated
              </div>
            </div>
            <div class='circle'>
              <div class='circle-title'>Leave Your Old Life Behind</div>
              <div class='circle-subtitle'>
                Don't try to be like someone else, be yourself. Be secure with
                yourself.
              </div>
              <div class='circle-footer'>Explore</div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;
1,500&family=Inter:wght@300;
400;
500;
600&family=Space+Grotesk:wght@400;
500;
600;
700&display=swap');
  * {
    outline: none;
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
  img {
    max-width: 100%;
  }
  body {
    background-color: #121418;
    display: flex;
    font-family: 'Inter', sans-serif;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 0 2em;
    font-weight: 400;
    height: 100vh;
  }
  @media screen and (max-width: 768px) {
    body {
      padding: 0;
    }
  }
  .blog {
    background-color: #e9e6e4;
    max-width: 1350px;
    display: grid;
    height: 90vh;
    max-height: 800px;
    overflow: hidden;
    grid-template-columns: 15% 20% 35% 30%;
    grid-template-rows: 100%;
    width: 100%;
    padding: 40px 4px;
    position: relative;
  }
  @media screen and (max-width: 1030px) {
    .blog {
      grid-template-columns: 20% 50% 30%;
    }
  }
  @media screen and (max-width: 768px) {
    .blog {
      grid-template-columns: 25% 75%;
      width: 100%;
      max-width: none;
    }
  }
  @media screen and (max-width: 560px) {
    .blog {
      grid-template-columns: 100%;
    }
  }
  .blog-part {
    padding: 0 20px;
  }
  .blog-part:not(:last-child) {
    border-right: 1px solid #94918f;
  }
  .blog-menu {
    font-size: 22px;
    text-decoration: none;
    color: #161419;
    display: flex;
    letter-spacing: -0.5px;
    align-items: center;
  }
  @media screen and (max-width: 1260px) {
    .blog-menu {
      font-size: 1.6vw;
    }
  }
  .blog-menu svg {
    width: 22px;
    margin-left: 4px;
  }
  .blog-menu + .blog-menu {
    margin-top: 24px;
  }
  .blog-menu.mention {
    margin-top: auto;
    font-size: 19px;
  }
  @media screen and (max-width: 1260px) {
    .blog-menu.mention {
      font-size: 1.4vw;
    }
  }
  .blog-menu.subscribe {
    margin-top: 8px;
    font-size: 19px;
    position: relative;
  }
  @media screen and (max-width: 1260px) {
    .blog-menu.subscribe {
      font-size: 1.4vw;
    }
  }
  .blog-menu.subscribe:before {
    content: '';
    width: 16px;
    height: 16px;
    background-color: #161419;
    left: 0;
    border-radius: 1px;
    margin-right: 14px;
  }
  .blog-menu.rounded:before {
    content: '';
    border-radius: 50%;
    width: 12px;
    height: 12px;
    background-color: #161419;
    margin-right: 12px;
  }
  .blog .is-menu {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 1030px) {
    .blog .is-menu {
      display: none;
    }
  }
  .blog-big__title {
    font-size: 102px;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    letter-spacing: -5px;
    line-height: 1;
    margin-bottom: 6px;
  }
  @media screen and (max-width: 1400px) {
    .blog-big__title {
      font-size: 120px;
    }
  }
  @media screen and (max-width: 1260px) {
    .blog-big__title {
      font-size: 9vw;
      letter-spacing: -2px;
    }
  }
  @media screen and (max-width: 560px) {
    .blog-big__title {
      font-size: 36px;
      margin-bottom: 12px;
    }
  }
  .blog-header {
    display: flex;
    flex-direction: column;
  }
  .blog-article {
    padding: 0 20px;
  }
  .blog-article img {
    height: 260px;
    max-height: 22vh;
    width: 100%;
    object-fit: cover;
    filter: grayscale(1);
  }
  .page-number {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    font-size: 72px;
    text-align: center;
    letter-spacing: -3px;
    font-weight: lighter;
    font-family: 'Space Grotesk', sans-serif;
    border-right: 1px solid #94918f;
    white-space: nowrap;
  }
  @media screen and (max-width: 1260px) {
    .page-number {
      font-size: 5vw;
    }
  }
  .small-title {
    border-bottom: 1px solid #94918f;
    margin-bottom: 20px;
    padding-bottom: 20px;
  }
  @media screen and (max-width: 560px) {
    .small-title {
      font-size: 14px;
      position: absolute;
      top: 10px;
      right: 24px;
      border-bottom: 0;
    }
  }
  .date {
    display: flex;
    justify-content: flex-end;
  }
  .blog-article h2 {
    font-size: 26px;
    font-weight: 500;
    line-height: 1.2;
    margin: 8px 0 8px;
  }
  .blog-article h2 span {
    font-family: 'Playfair Display', serif;
  }
  .blog-article p {
    line-height: 1.5;
    margin: 14px 0;
  }
  .blog-article a {
    color: #161419;
    text-decoration: none;
    font-size: 26px;
    letter-spacing: -1px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: auto;
    border-top: 1px solid #94918f;
    padding-top: 14px;
  }
  .blog-article a svg {
    width: 26px;
    margin-right: 10px;
  }
  .blog-detail {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
  }
  .blog-detail span {
    font-family: 'Playfair Display', serif;
  }
  .blog-header-container {
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
    scroll-snap-type: y mandatory;
    border-right: 1px solid #94918f;
  }
  @media screen and (max-width: 768px) {
    .blog-header-container {
      border-right: 0;
    }
  }
  .blog-header-container > * {
    flex-shrink: 0;
    min-height: 100%;
    scroll-snap-align: start;
  }
  .blog-header-container .blog-article:not(.header-article) {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  marquee {
    font-size: 20px;
    background-color: #121418;
    color: #e9e6e4;
    padding: 6px 0;
    width: calc(100% + 44px);
    margin-left: -20px;
    flex-shrink: 0;
  }
  marquee span:before {
    display: inline-block;
    content: '';
    border-radius: 50%;
    width: 10px;
    height: 10px;
    position: relative;
    top: -1px;
    vertical-align: baseline;
    background-color: #e9e6e4;
    margin: 0 16px;
  }
  .blog-right {
    overflow: auto;
    height: calc(100% + 60px);
  }
  .blog-right .rounded {
    font-style: italic;
    font-size: 18px;
  }
  .blog-right .rounded:before {
    content: '';
    border-radius: 50%;
    width: 9px;
    height: 9px;
    background-color: #000;
    margin-right: 6px;
  }
  .blog-right-title {
    font-size: 25px;
    font-family: 'Playfair Display', serif;
  }
  .blog-right-title-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #94918f;
    margin-bottom: 20px;
    padding-bottom: 20px;
    margin-top: 100px;
    letter-spacing: -1px;
  }
  @media screen and (max-width: 1400px) {
    .blog-right-title-container {
      margin-top: 88px;
    }
  }
  @media screen and (max-width: 1260px) {
    .blog-right-title-container {
      margin-top: 6vw;
    }
  }
  @media screen and (max-width: 1030px) {
    .blog-right-title-container {
      margin-top: 5vw;
    }
  }
  .blog-title-date {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
  .blog-right-page {
    font-size: 56px;
    margin-bottom: 16px;
    font-family: 'Space Grotesk', sans-serif;
  }
  .blog-right-page-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 28px;
    font-weight: 600;
    max-width: 16ch;
    letter-spacing: -2px;
  }
  .blog-right-page-subtitle {
    max-width: 33ch;
    font-size: 15px;
    margin-top: 12px;
    line-height: 1.4;
  }
  .blog-right-container + .blog-right-container {
    margin-top: 40px;
  }
  .right-blog {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    .right-blog {
      display: none;
    }
  }
  @media screen and (max-width: 1030px) {
    .right-blog .blog-menu {
      display: none;
    }
  }
  ::-webkit-scrollbar {
    display: none;
  }
  .circle {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: #121418;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: #e9e6e4;
    padding: 20px;
    text-align: center;
    margin-top: 40px;
  }
  .circle-title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 12px;
    font-family: 'Space Grotesk', sans-serif;
  }
  @media screen and (max-width: 1030px) {
    .circle-title {
      display: none;
    }
  }
  .circle-subtitle {
    max-width: 30ch;
    font-size: 14px;
    line-height: 1.3;
    margin-bottom: 16px;
  }
  .circle-footer {
    font-family: 'Playfair Display', serif;
    font-size: 30px;
  }
  @media screen and (max-width: 560px) {
    .blog-is-sticky {
      display: none;
    }
  }
`;
