const projects = [
  {
    id: 0,
    slug: 'mmoca-redesign',
    title: 'MMoCA Redesign',
    excerpt: 'Contemporary Art Museum site to showcase Galleries and Artists.',
    url: 'https://www.mmoca.org/',
    year: 2018,
    hero: {
      intro: 'The Madison Museum of Contemporary Art is an art gallery located in downtown Madison Wisconsin. Their website acts as a digital event calendar as well as a location for users to browse the various artists and galleries on display.'
    }
  },
  {
    id: 1,
    slug: 'karavan-trailers',
    title: 'Karavan Trailers',
    excerpt: 'Online catalog and information site.',
    url: 'https://www.karavantrailers.com/',
    thumbnail: `${process.env.NEXT_PUBLIC_APOLLO_URL}/assets/karavan-thumbnail.jpg`,
    year: 2018,
    hero: {
      image: `${process.env.NEXT_PUBLIC_APOLLO_URL}/assets/karavan-hero.png`,
      intro: 'Karavan Trailers is a trailer manufacturer that supplies utility, marine, and industrial trailers. The website acts as a product catalog for their collection of trailers and provides information about the variety of types.'
    }
  },
  {
    id: 2,
    slug: 'abc-supply-careers',
    title: 'ABC Supply Careers',
    excerpt: 'Careers site with a location based search.',
    url: 'https://careers.abcsupply.com/',
    thumbnail: `${process.env.NEXT_PUBLIC_APOLLO_URL}/assets/abcsupply-hero.png`,
    year: 2019,
    hero: {
      image: `${process.env.NEXT_PUBLIC_APOLLO_URL}/assets/abcsupply-hero.png`,
      intro: 'ABC Supply is a nation-wide provider of exterior and interior building products. Their careers site offers a wide-range of driving and corporate positions across the country.'
    }
  },
  {
    id: 3,
    slug: 'abc-lw-search',
    title: 'ABC/LW Supply Search Package',
    excerpt: 'A reusable NPM package built for ease of maintenance.',
    url: 'https://careers.abcsupply.com/search',
    thumbnail: `${process.env.NEXT_PUBLIC_APOLLO_URL}/assets/abcsupply-hero.png`,
    year: 2022,
    hero: {
      image: `${process.env.NEXT_PUBLIC_APOLLO_URL}/assets/abclocator-hero.png`,
      intro: 'Due to the similar nature of the ABC Supply and LW Supply careers search we built a custom NPM package for use on both sites. This custom package allows for ease of maintenance as the code is shared while also providing different styles and datasets for the two sites.'
    }
  },
  {
    id: 4,
    slug: 'acis-redesign',
    title: 'ACIS Redesign',
    excerpt: 'A simple site rebuild from the ground up.',
    url: 'https://www.americanclassicvinylsiding.com/',
    thumbnail: `${process.env.NEXT_PUBLIC_APOLLO_URL}/assets/acis-thumbnail.jpg`,
    year: 2020,
    hero: {
      image: `${process.env.NEXT_PUBLIC_APOLLO_URL}/assets/acis-hero.png`,
      intro: 'American Classic Vinyl Siding is a supplier and manufacturer of siding and windows. This site acts as a product catalog for users to browse and gather information before contacting for a purchase.'
    }
  },
  {
    id: 5,
    slug: 'hiusa',
    title: 'HI USA',
    excerpt: 'Hostelling International\'s site for finding and booking a Hostel in the US.',
    url: 'https://www.hiusa.org/',
    thumbnail: `${process.env.NEXT_PUBLIC_APOLLO_URL}/assets/hiusa-thumbnail.png`,
    year: 2020,
    hero: {
      image: `${process.env.NEXT_PUBLIC_APOLLO_URL}/assets/hiusa-hero.png`,
      intro: 'Hostelling International\'s U.S. branch where users can search and browse a variety of hostels. The site also acts as a travel planning hub by informing users of things to do around the area they are researching and blog posts to give them more information.'
    }
  },
  {
    id: 6,
    slug: 'qtigroup',
    title: 'The QTI Group',
    excerpt: 'Job Recruiter site built for candidates as well as hiring teams.',
    url: 'https://www.qtigroup.com/',
    thumbnail: `${process.env.NEXT_PUBLIC_APOLLO_URL}/assets/qti-thumbnail.jpg`,
    year: 2020,
    hero: {
      image: `${process.env.NEXT_PUBLIC_APOLLO_URL}/assets/qti-hero.png`,
      intro: 'The QTI Group is a job recruiter and HR consultation firm based out of Wisconsin. Their website acts as a job board for both people looking for a job and for companies looking to post open positions.'
    }
  },
  {
    id: 7,
    slug: 'summit',
    title: 'Summit Credit Union',
    excerpt: 'Custom Drupal theme development with a wide range of product offerings.',
    url: 'https://www.summitcreditunion.com/',
    thumbnail: `${process.env.NEXT_PUBLIC_APOLLO_URL}/assets/summit-thumbnail.jpg`,
    year: 2022,
    hero: {
      image: `${process.env.NEXT_PUBLIC_APOLLO_URL}/assets/summit-hero.png`,
      intro: 'Summit Credit Union is one of the largest credit unions in the state of Wisconsin. Their site serves as an online banking portal for members as well as an information hub for users at any point in their financial journey.'
    }
  },
  {
    id: 8,
    slug: 'wain-roy',
    title: 'Wain-Roy',
    excerpt: 'Construction Equipment product catalog site with a custom dealer locator.',
    url: 'https://wainroy.com/',
    thumbnail: `${process.env.NEXT_PUBLIC_APOLLO_URL}/assets/wainroy-thumbnail.png`,
    year: 2022,
    hero: {
      image: `${process.env.NEXT_PUBLIC_APOLLO_URL}/assets/wainroy-hero.png`,
      intro: 'Wain-Roy produces construction equipment attachments for a wide range of functions. Users can search for a specific product using the custom WooCommerce search or find a nearby dealer using the custom dealer locator plugin.'
    }
  },
  {
    id: 9,
    slug: 'culvers',
    title: 'Culver\'s',
    excerpt: 'Restaurant franchise website that provides information on their locations and menu items.',
    url: 'https://www.culvers.com/',
    thumbnail: `${process.env.NEXT_PUBLIC_APOLLO_URL}/assets/culvers-thumbnail.jpg`,
    year: 2023,
    hero: {
      image: `${process.env.NEXT_PUBLIC_APOLLO_URL}/assets/culvers-hero.png`,
      intro: 'Culver\'s is nation-wide restaurant franchise based out of Sauk City Wisconsin. Their website provides users information about their various locations, menu items, and other informative content.'
    }
  },
  {
    id: 10,
    slug: 'schneider-jobs',
    title: 'Schneider Jobs',
    excerpt: 'Careers website for driver and corporate positions.',
    url: 'https://schneiderjobs.com/',
    thumbnail: `${process.env.NEXT_PUBLIC_APOLLO_URL}/assets/schneiderjobs-thumbnail.jpg`,
    year: 2020,
    hero: {
      image: `${process.env.NEXT_PUBLIC_APOLLO_URL}/assets/schhneiderjobs-hero.png`,
      intro: 'Schneider is an enterprise level trucking company that supports a variety of digital properties. Schneider Jobs is their primary careers site with an emphasis on driver and corporate positions across the country.'
    }
  },
  {
    id: 11,
    slug: 'hiebing',
    title: 'Hiebing',
    excerpt: 'The Hiebing.com site built on NextJS with WPEngine Atlas.',
    url: 'https://www.hiebing.com/',
    thumbnail: `${process.env.NEXT_PUBLIC_APOLLO_URL}/assets/hiebing-thumbnail.png`,
    year: 2021,
    hero: {
      image: `${process.env.NEXT_PUBLIC_APOLLO_URL}/assets/hiebing-hero.png`,
      intro: 'Hiebing is an advertising agency based out of Madison Wisconsin.'
    }
  }
]

export default projects