//nCage 
(function ($) {

    var self = {
        nCageImgs: [
	'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fpastdaily.com%2Fwp-content%2Fuploads%2F2014%2F02%2FJohnny-Hallyday-resize-1.jpg&f=1',
	'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn1.thr.com%2Fsites%2Fdefault%2Ffiles%2F2017%2F12%2Fjohnny_hallyday.jpg&f=1',
	'https://proxy.duckduckgo.com/iur/?f=1&image_host=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fc%2Fcd%2FJohnny_Hallyday_2012_3.jpg&u=https://upload.wikimedia.org/wikipedia/commons/c/cd/Johnny_Hallyday_2012_3.jpg',
	'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.hzWc4PKCZ00yjwjKtLqyvAHaJu%26pid%3D15.1&f=1',
	'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fimworld.aufeminin.com%2Fstory%2F20130228%2Fjohnny-hallyday-19427_w1000.jpg&f=1',
	'https://proxy.duckduckgo.com/iur/?f=1&image_host=http%3A%2F%2Fresize-parismatch.ladmedia.fr%2Fimg%2Fvar%2Fnews%2Fstorage%2Fimages%2Fparis-match%2Fbrouillons%2Fjohnny-hallyday-en-deuil-apres-la-mort-de-sa-secretaire-josette-911543%2F13021153-1-fre-FR%2FJohnny-Hallyday-en-deuil-apres-la-mort-de-sa-secretaire.jpg&u=https://resize-parismatch.ladmedia.fr/img/var/news/storage/images/paris-match/brouillons/johnny-hallyday-en-deuil-apres-la-mort-de-sa-secretaire-josette-911543/13021153-1-fre-FR/Johnny-Hallyday-en-deuil-apres-la-mort-de-sa-secretaire.jpg',
	'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.5spZILthe92Aohqo0efMZQHaEK%26pid%3D15.1&f=1'
	'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fi.f1g.fr%2Fmedia%2Fext%2F805x453%2Fwww.lefigaro.fr%2Fmedias%2F2014%2F10%2F29%2FPHO493cf4b2-5f56-11e4-ab95-57e904a431e8-805x453.jpg&f=1'			
	'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.ormWaSfqTL5mA2V8djhvOAHaIX%26pid%3D15.1&f=1'
	'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fimados.fr%2Fcontent%2F1%2F1%2F9%2F581198%2Fjohnny-hallyday-photos.jpg&f=1'
	'https://proxy.duckduckgo.com/iur/?f=1&image_host=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F736x%2Fae%2F8c%2F67%2Fae8c67ab2ed0f05e9ab31ebdeecbc3c9--le-phoenix-johnny-halliday.jpg&u=https://i.pinimg.com/736x/ae/8c/67/ae8c67ab2ed0f05e9ab31ebdeecbc3c9--le-phoenix-johnny-halliday.jpg'
	'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.NvhcwpACdzt9uTXBIovXfwHaFe%26pid%3D15.1&f=1'
	'https://media.giphy.com/media/3oxHQu3IL7ti67aoKs/giphy.gif'
	'https://img.over-blog-kiwi.com/0/94/61/80/20171212/ob_558735_849883johnnyhallydaygifanimerouleamoto.gif'
	'https://lanouvelletribune.info/wp-content/uploads/2018/10/johnny-hallyday.jpg'
	'https://images.lanouvellerepublique.fr/image/upload/t_1020w/5a278a08479a45c8288b457b.jpg'
	'https://tel.img.pmdstatic.net/fit/http.3A.2F.2Fimages.2Eone.2Eprismamedia.2Ecom.2FproviderPerson.2F2.2F1.2F6.2F1.2F1.2F1.2F4.2F8.2Fe.2Fd.2F3.2F3.2F3.2Fb.2Fb.2F3.2Ejpeg/300x300/quality/80/johnny-hallyday.jpeg'
	'https://img.lemde.fr/2017/11/24/0/0/3029/4615/534/0/60/0/549bf72_893-oqu34b.dxi09.jpg'
	'https://i1.wp.com/roadsmag.com/wp-content/uploads/2013/06/t%C3%A9l%C3%A9chargement.gif'
	'https://media.giphy.com/media/xUOxf7bt6q9qWbeVl6/giphy.gif'
	'http://bullies.b.u.pic.centerblog.net/15617927.gif'
	'https://i.skyrock.net/9717/26009717/pics/799994315.gif'
	'http://animatedgifs.a.n.pic.centerblog.net/9c2a24ef.gif'
				],
        handleImages: function (lstImgs, time) {
            $.each($('img'), function (i, item) {
                //Skip if image is already replaced
                if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                    var h = $(item).height();
                    var w = $(item).width();

                    //If image loaded
                    if (h > 0 && w > 0) {
                        self.handleImg(item, lstImgs);
                    }
                    else {
                        //Replace when loaded
                        $(item).load(function () {
                            //Prevent 'infinite' loop
                            if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                                self.handleImg(item, lstImgs);
                            }
                        });
                    }
                }
            });

            //Keep replacing
            if (time > 0) {
                setTimeout(function () { self.handleImages(lstImgs, time); }, time);
            }
        },
        handleImg: function (item, lstImgs) {
            $(item).error(function () {
                //Handle broken imgs
                self.handleBrokenImg(item, lstImgs);
            });

            self.setRandomImg(item, lstImgs);
        },
        setRandomImg: function (item, lstImgs) {
            var h = $(item).height();
            var w = $(item).width();
            $(item).css('width', w + 'px').css('height', h + 'px');
            $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
        },
        handleBrokenImg: function (item, lstImgs) {

            var brokenImg = $(item).attr('src');
            var index = lstImgs.indexOf(brokenImg);
            if (index > -1) {
                lstImgs.splice(index, 1);
            }
            self.setRandomImg(item, lstImgs);
        },
    };

    //Run on jQuery ready
    $(function () {
        self.handleImages(self.nCageImgs, 3000);
    });

    //Set global variable
    $.nCage = self;

})(jQuery);

