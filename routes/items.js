var express = require('express');
var router = express.Router();

var items = [{
	"title": "Michael Kors, L.L.C. v. The Partnerships and Unincorporated Associations Identified on Schedule “A” – Case No. 14-cv-1823 | Greer, Burns & Crain, Ltd.",
	"blurb": "Michael Kors Handbags. I think this is the only one I've seen so far that I've actually liked...#AllAccessKors #NYFW #FallingInLoveWith #SpringFling",
	"author": "Rachael Recchia",
	"thumbnail_url": "https://s-media-cache-ak0.pinimg.com/236x/15/ac/72/15ac7228691a9b2568c580635bc7874c.jpg",
	"details_url": "http://bibofucu.falcongreen.com/"
}, {
	"title": "Nice high heel shoes",
	"blurb": "Mi favoritos zapatos llevar a un baile son los tacos. Los tacos azules tienen correas. No me gusta bailar en ellos.",
	"author": "Natalie Arciga",
	"thumbnail_url": "https://s-media-cache-ak0.pinimg.com/236x/90/fa/2a/90fa2a1a087fc5569e64b0d754f07e0e.jpg",
	"details_url": "http://www.chiq.com/nice-high-heel-shoes"
}, {
	"title": "",
	"blurb": "1950's",
	"author": "Virginia G",
	"thumbnail_url": "https://s-media-cache-ak0.pinimg.com/236x/4a/44/4d/4a444db986305471de6aa7b8398a95bf.jpg",
	"details_url": "http://www.etsy.com/listing/71059796/1950s-coral-pink-chiffon-dress-couture?ref=sr_gallery_35&ga_search_query=pink+party+dress&ga_page=3&ga_search_type=vintage&ga_facet=vintage"
}, {
	"title": "On the Street…..Via Senato, Milan",
	"blurb": "transitioning into fall.",
	"author": "Faye Papa",
	"thumbnail_url": "https://s-media-cache-ak0.pinimg.com/236x/a2/0b/e1/a20be168cd8b370138232acb6bce7c02.jpg",
	"details_url": "http://www.thesartorialist.com/photos/on-the-street-via-senato-milan-12/?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed:+TheSartorialist+(The+Sartorialist)"
}, {
	"title": "Jewellery",
	"blurb": "Return to Tiffany Bracelet. Happiness is in a Tiffany Blue Heart! So cute. #jewellery Tiffany #Tiffany",
	"author": "Natalie Septer",
	"thumbnail_url": "https://s-media-cache-ak0.pinimg.com/236x/43/f2/ea/43f2ea2d3c64fb6d88a423d81d784162.jpg",
	"details_url": "http://hauntedengineergentlemen.tumblr.com/"
}, {
	"title": "",
	"blurb": "To Own a #Red #Bottom Deserves The Strong Recommendation",
	"author": "Rockael Jamieson",
	"thumbnail_url": "https://s-media-cache-ak0.pinimg.com/236x/cf/f1/34/cff1342ee0e0be0523e1ccac01b215d9.jpg",
	"details_url": "http://love-shoes.my-free.website/"
}, {
	"title": "thoughtsforbees",
	"blurb": " ",
	"author": "ndwy",
	"thumbnail_url": "https://s-media-cache-ak0.pinimg.com/236x/a0/13/64/a013645dfb12e499955d7de6c75da248.jpg",
	"details_url": "http://thoughtsforbees.tumblr.com/post/126871814876"
}, {
	"title": "Instagrin",
	"blurb": "Nice & Luxury #Ray #Ban #Sunglasses Is Incredible For A Lower Rate",
	"author": "Sherry Ghanayem Mashni",
	"thumbnail_url": "https://s-media-cache-ak0.pinimg.com/236x/ad/7e/29/ad7e298e48f69f442997408ea22c8e45.jpg",
	"details_url": "http://loverboutfit.my-free.website/"
}, {
	"title": "PANDORA Disney Cinderella\\'s Wish Charm",
	"blurb": "PANDORA Disney Cinderella's Wish Charm",
	"author": "Dana Marie",
	"thumbnail_url": "https://s-media-cache-ak0.pinimg.com/236x/d5/eb/b3/d5ebb3fd4c7780a188ce6897ecc04b11.jpg",
	"details_url": "http://www.benbridge.com/shop/PANDORA-Disney-Cinderella-s-Wish-Charm.html"
}, {
	"title": "Lakshmi Menon in Jean-Paul Gaultier: Paris Fashion Week Haute Couture A/W 2009/10",
	"blurb": "Jean-Paul Gaultier",
	"author": "Cigdem Turk",
	"thumbnail_url": "https://s-media-cache-ak0.pinimg.com/236x/29/45/04/294504ab8d4f3ff139b61efaa931f370.jpg",
	"details_url": "http://www.zimbio.com/pictures/nsI9QpINBR3/Jean+Paul+Gaultier+Paris+Fashion+Week+Haute/JzScEJaudNl/Lakshmi+Menon"
}, {
	"title": "Casual Outfits | AE Hoodie | Fashionista Trends",
	"blurb": "Casual Outfit",
	"author": "Lara Alvarenga",
	"thumbnail_url": "https://s-media-cache-ak0.pinimg.com/236x/00/55/78/005578d7963c8cd83384c601e16f7042.jpg",
	"details_url": "http://fashionistatrends.com/casual-outfits-ae-hoodie/"
}, {
	"title": "Modernistic, Sleek & Flattering Ankara Styles",
	"blurb": "~Latest African Fashion, African Prints, African fashion styles, African clothing, Nigerian style, Ghanaian fashion, African women dresses, African Bags, African shoes, Kitenge, Gele, Nigerian fashion, Ankara, Aso okè, Kenté, brocade. ~DK",
	"author": "barbara watson",
	"thumbnail_url": "https://s-media-cache-ak0.pinimg.com/236x/09/7c/46/097c465e13ff6501623a539e28031866.jpg",
	"details_url": "http://www.weddingdigestnaija.com/modernistic-sleek-flattering-ankara-styles/"
}, {
	"title": "LONG Handknit Womens Bohemian Festival  Hippie Beach Poncho Cape Shawl (&quot;For Melanie&quot;)",
	"blurb": "LONG Handknit Womens Bohemian",
	"author": "Jenny Claspill",
	"thumbnail_url": "https://s-media-cache-ak0.pinimg.com/236x/62/b0/cc/62b0cc39239fc0a7b1ca0e6fd716fa09.jpg",
	"details_url": "https://www.etsy.com/listing/236076083/long-handknit-womens-bohemian-festival?utm_source=Pinterest&utm_medium=PageTools&utm_campaign=Share"
}, {
	"title": "",
	"blurb": "\"Untitled #134\" by nkjlovebear24 <span class=\"EmojiInput mj40\" title=\"Heavy Black Heart\"></span> liked on Polyvore",
	"author": "Emmis S",
	"thumbnail_url": "https://s-media-cache-ak0.pinimg.com/236x/3d/56/e4/3d56e4e0706422dd03fe265e8bf2eac4.jpg",
	"details_url": "http://nkjlovebear24.polyvore.com/untitled_134/set?.embedder=5789611&.svc=pinterest&id=73559875"
}, {
	"title": "",
	"blurb": " ",
	"author": "Devon McGowan",
	"thumbnail_url": "https://s-media-cache-ak0.pinimg.com/236x/fd/71/46/fd714698833557d16131f64193671458.jpg",
	"details_url": "http://www.gap.com/browse/outfit.do?oid=OUT-141097052"
}, {
	"title": "theglitterguide",
	"blurb": " ",
	"author": "Chantal",
	"thumbnail_url": "https://s-media-cache-ak0.pinimg.com/236x/25/7c/2f/257c2f5b92d760a5c5e7b803c671b95c.jpg",
	"details_url": "http://theglitterguide.tumblr.com/post/17659951781"
}, {
	"title": "",
	"blurb": " ",
	"author": "Chelsea Gikas",
	"thumbnail_url": "https://s-media-cache-ak0.pinimg.com/236x/34/20/32/3420320323eb0065e30a331411b9aa38.jpg",
	"details_url": "http://www.the-chefs-wife.com/2014/08/friday-roundup.html"
}, {
	"title": "50 Ultra Trendy Designer Shoes For 2014",
	"blurb": "Christian Louboutin",
	"author": "Maria Pregler",
	"thumbnail_url": "https://s-media-cache-ak0.pinimg.com/236x/e8/ea/f5/e8eaf5e33b1bc8723557855e2767d6d1.jpg",
	"details_url": "http://blog.styleestate.com/style-estate-blog/50-ultra-trendy-designer-shoes-for-2014.html"
}, {
	"title": "",
	"blurb": "#Ray #Bans #Outlet only $14.99 ,it is your best choice to repin it and click link stuff to buy!",
	"author": "Steve Cuahuizo",
	"thumbnail_url": "https://s-media-cache-ak0.pinimg.com/236x/4f/8a/f7/4f8af7435dab3e29497e7597a533b1e0.jpg",
	"details_url": "http://shop.homeinpickens.com/ray-ban-cheap-c-8_11a.html#rbsad"
}, {
	"title": "",
	"blurb": "Nike Shoes $19.9 special price time from 8-29 to 9-9 for gift,repin and get it immediatly.",
	"author": "Laura Barden",
	"thumbnail_url": "https://s-media-cache-ak0.pinimg.com/236x/66/69/30/666930614c0c32d24c42c7c1b3c7e74f.jpg",
	"details_url": "http://trustnikestore.jandy.io/"
}, {
	"title": "",
	"blurb": "♦♚♥ вυℓℓєт ♥♚♦",
	"author": "ℕiℭ♡ℒℰ ℳ iℒℕℰℛ ❥",
	"thumbnail_url": "https://s-media-cache-ak0.pinimg.com/236x/98/8c/0e/988c0e14936e38eb0d624d2c492637b6.jpg",
	"details_url": "http://www.shopstyle.com/action/loadRetailerProductPage?id=475599153&pid=uid6704-516052-92"
}, {
	"title": "Miss Pool - Women's Fashion Collection",
	"blurb": "floral skater skirt",
	"author": "Aneta Tokarska",
	"thumbnail_url": "https://s-media-cache-ak0.pinimg.com/236x/95/c2/5f/95c25fc38be916c9719001965ce5c583.jpg",
	"details_url": "http://topreviews.momsmags.net/best-street-fashion-for-women-and-teens/"
}, {
	"title": "sunglassesshophutr",
	"blurb": "ray ban men sunglasses,ray ban clubmaster men,men ray ban sunglasses,mens ray ban",
	"author": "soneh",
	"thumbnail_url": "https://s-media-cache-ak0.pinimg.com/236x/99/a0/23/99a0238a2710db29ac879f1b69f820f5.jpg",
	"details_url": "http://sunglassesshophutaj.tumblr.com/"
}, {
	"title": "",
	"blurb": "Neckpiece #19 | Mary Lee Hu. circa 1975. Fine and sterling silver",
	"author": "Amber Jay Williams",
	"thumbnail_url": "https://s-media-cache-ak0.pinimg.com/236x/be/23/42/be23423d92f9de67f72e170a756a0f69.jpg",
	"details_url": "http://www.ihearttam.org/8Hu.html"
}, {
	"title": "",
	"blurb": "#fashion #streetstyle #outfit - Discover Sojasun Italian Facebook, Pinterest and Instagram Pages!",
	"author": "Alessandra :)",
	"thumbnail_url": "https://s-media-cache-ak0.pinimg.com/236x/53/c7/fa/53c7fa0f484d0cef6f2e6ebe21363c29.jpg",
	"details_url": "http://www.shopstyle.co.uk/action/apiVisitRetailer?id=431545845&pid=uid8804-26242798-67"
}];


function getItems(numItems) {
	var output = [],
		i;

	for(i=0;i<numItems;i++){
		output.push(items[Math.floor(Math.random()*items.length)]);
	}

	return output;
}

//all items
router.get('/', function(req, res, next) {
	res.send(items);
});

//single page of items
router.get('/:page_size', function(req, res, next) {
	var page_size = req.params.page_size;
	res.send(getItems(page_size));
});

module.exports = router;