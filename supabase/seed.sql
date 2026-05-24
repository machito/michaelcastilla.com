-- seed projects from data.json
insert into projects (id, active, project, brands, logo, highlights, tags, devices, url, online, slug) values
(0, true, 'SiriusXM Podcasts', 'SiriusXM x Pandora', 'siriusxm+p', '{"22 shows","100MM+ listeners","2 brands","1 media company"}', '{"leadership","strategy","ux","ui","design-systems","2019"}', '{"people","mobile","tablet","desktop"}', 'https://www.siriusxm.com/podcasts', true, 'siriusxm-podcasts'),
(1, true, 'SiriusXM Publish', 'SiriusXM', 'siriusxm', '{"130 shows","45 producers","5k+ episodes","1 platform"}', '{"leadership","strategy","ux","ui","design-systems","front-end","back-end","email","2019"}', '{"mobile","tablet","desktop"}', 'https://publish.siriusxm.com', true, 'siriusxm-publish'),
(2, true, 'Alamo China', 'Alamo Rent-A-Car', 'alamo', '{"16 cities","34 vehicles","150k+/mo visitors","1 continent"}', '{"front-end","back-end","api","2019"}', '{"mobile","tablet","desktop"}', 'https://alamo.cn', true, 'alamo-china'),
(3, true, 'NYC Secure', 'NYC Cyber Command', 'nyc', '{"1 mission","8 stakeholders","6MM+ citizens","1 day"}', '{"leadership","strategy","ux","ui","design-systems","front-end","back-end","2018"}', '{"mobile","tablet","desktop"}', 'https://secure.nyc/', true, 'nyc-secure'),
(4, true, 'SiriusXM Clips', 'SiriusXM', 'siriusxm', '{"2k+ clips","14k episodes","3MM+ listeners","5k moments"}', '{"leadership","strategy","ux","ui","design-systems","front-end","back-end","2018"}', '{"mobile","tablet","desktop"}', 'https://www.siriusxm.com/clips', true, 'siriusxm-clips'),
(5, true, 'Spoke', 'Spoke', 'spoke', '{"15 curators","3 original shows","29 countries","500k streams"}', '{"leadership","strategy","ux","ui","front-end","back-end","email","2017"}', '{"people","mobile","tablet","desktop"}', 'https://www.hearspoke.com', false, 'spoke'),
(6, true, 'Big Mirror Labs', 'Big Mirror Labs', 'bml', '{"18 engineers","6 designers","2 data scientists","1 vision"}', '{"program-leadership","business-operations","strategy","ux","ui","front-end","2017"}', '{"people","mobile","tablet","desktop"}', 'https://www.bigmirrorlabs.com', true, 'bml'),
(7, true, 'Ralph Lauren', 'Ralph Lauren', 'ralph-lauren', '{"3 weeks","1 view","3MM+ visitors/mo","$10MM+/mo"}', '{"ux","ui","front-end","2016"}', '{"mobile","tablet","desktop"}', 'https://www.ralphlauren.com', true, 'ralph-lauren'),
(8, true, 'Resorts World Bimini', 'Resorts World Bimini', 'rwb', '{"24+ adventures","10MM+ visitors","$2MM+ revenue","1 destination"}', '{"ux","ui","front-end","back-end","2016"}', '{"mobile","tablet","desktop"}', 'https://www.rwbimini.com', true, 'rwb'),
(9, true, 'Alamo Europe', 'Alamo Rent-A-Car', 'alamo', '{"35 countries","40+ vehicles","200k+/mo visitors","1 continent"}', '{"front-end","back-end","api","2016"}', '{"mobile","tablet","desktop"}', 'https://europe.alamo.com', false, 'alamo-europe'),
(10, true, 'Enterprise Europe', 'Enterprise Rent-A-Car', 'enterprise', '{"20+ countries","1mm+/mo visitors","$5MM+ revenue","1 continent"}', '{"ux","ui","front-end","api","ads","2015"}', '{"mobile","tablet","desktop"}', 'https://europe.enterprise.com', false, 'enterprise-europe'),
(11, true, 'NCL Escape', 'Norwegian Cruise Line', 'ncl', '{"5MM+ visitors","$400k+ revenue","7 destinations","1 ship"}', '{"ux","ui","front-end","back-end","api","2015"}', '{"mobile","tablet","desktop"}', 'https://escape.ncl.com', false, 'ncl-escape'),
(12, true, 'Toronto Escapes', 'Toronto Escapes', 'toronto-escapes', '{"4 brands","130+ attractions","120k+/mo visitors","1 destination"}', '{"strategy","front-end","back-end","api","2015"}', '{"mobile","tablet","desktop"}', 'https://www.torontoescapes.com', true, 'toronto-escapes'),
(13, false, 'Karisma Hotels', 'Karisma Hotels and Resorts', 'karisma-hotels', '{"14 resorts","6 destinations","$100MM+ revenue","1 platform"}', '{"leadership","strategy","ux","ui","front-end","back-end","2015"}', '{"mobile","tablet","desktop"}', 'https://www.karismahotels.com', true, 'karisma-hotels'),
(14, true, 'The MIAMI Institute', 'The MIAMI Institute', 'miami', '{"8 doctors","5k+ procedures","40k+ sqft.","1 facility"}', '{"ux","ui","front-end","back-end","2015"}', '{"mobile","tablet","desktop"}', 'https://www.miami-institute.com', false, 'miami-institute'),
(15, true, 'Aeroméxico', 'Aeroméxico', 'aeromexico', '{"1 email","6 promos","500k subscribers","1 airline"}', '{"front-end","back-end","email","ads","2015"}', '{"mobile","tablet","desktop"}', 'https://www.aeromexico.com', false, 'aeromexico'),
(16, false, 'Go See South Africa', 'South African Airways', 'flysaa', '{"1 airline","40+ activities","3MM+ visitors","1 destination"}', '{"front-end","back-end","ads","2014"}', '{"mobile","tablet","desktop"}', 'http://www.goseesouthafrica.com', false, 'go-see-south-africa'),
(17, true, '1Sale', '1Sale', '1sale', '{"100k+ deals","120MM+ visitors","$160MM+ revenue","1 platform"}', '{"leadership","strategy","ux","ui","front-end","back-end","email","2014"}', '{"people","mobile","tablet","desktop"}', 'https://www.1sale.com', true, '1sale')
on conflict (id) do nothing;

-- seed dashboard stats (from Firebase production)
insert into dashboard (id, active, stat, label, title) values
(0, true, '100+',  'clients',                 'I''ve worked with'),
(1, true, '120',   'brands',                  'I''ve worked with'),
(2, true, '150',   'projects & products',     'I''ve worked on'),
(3, true, '72',    'highlights',              'The projects I''ve worked on have'),
(5, true, '100+',  'tools & skills',          'I''ve learned'),
(6, true, '6',     'awards & nominations',    'I''ve received'),
(7, true, '15',    'years of experience',     'I have'),
(8, true, '5',     'publications',            'I''ve been featured in'),
(9, true, '18',    'tags',                    'My work can be categorized by')
on conflict (id) do nothing;
