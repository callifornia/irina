(function(){
    var imageFactory = function(){

        return {
            // general gallery image
            getGeneralPageImage: [
                    {id: 1, img_small: "https://dl.dropboxusercontent.com/s/mrkgyfkylms9bud/1.jpg", 
                     img_big: "https://dl.dropboxusercontent.com/s/dgqer50kovx0evc/1.JPG?dl=0"},
                    {id: 2, img_small: "https://dl.dropboxusercontent.com/s/lhxz0mx0r5nah5u/2.jpg", 
                     img_big: "https://dl.dropboxusercontent.com/s/02h4p4xnk9i469i/2.JPG?dl=0"},
                    {id: 3, img_small: "https://dl.dropboxusercontent.com/s/xk2s8l3772e6ikz/3.jpg", 
                     img_big: "https://dl.dropboxusercontent.com/s/irl7l03b6g57fob/3.JPG?dl=0"},
                    {id: 4, img_small: "https://dl.dropboxusercontent.com/s/2j3swb5x5hfupix/4.jpg", 
                     img_big: "https://dl.dropboxusercontent.com/s/9qdj7o8t7j78umy/4.JPG?dl=0"},
                    {id: 5, img_small: "https://dl.dropboxusercontent.com/s/h5ute3wuekx583y/5.jpg", 
                     img_big: "https://dl.dropboxusercontent.com/s/34e9bdzicjkvmhm/5.JPG?dl=0"},
                    {id: 6, img_small: "https://dl.dropboxusercontent.com/s/0jgc2cwu1zxfwuo/6.jpg", 
                     img_big: "https://dl.dropboxusercontent.com/s/8mclvlloxlwyr6q/6.JPG?dl=0"},
                    {id: 7, img_small: "https://dl.dropboxusercontent.com/s/hbxkja0qpiu6ibm/7.jpg", 
                     img_big: "https://dl.dropboxusercontent.com/s/6t09wdlg8i02m74/7.JPG?dl=0"},
                    {id: 8, img_small: "https://dl.dropboxusercontent.com/s/mglpogensysb8vt/8.jpg", 
                     img_big: "https://dl.dropboxusercontent.com/s/tr5sd21wvukql6y/8.JPG?dl=0"},
                    {id: 9, img_small: "https://dl.dropboxusercontent.com/s/msvkpfd5mulk0of/9.jpg", 
                     img_big: "https://dl.dropboxusercontent.com/s/id4q0y86my2emuv/9.JPG?dl=0"},
                    {id: 10, img_small: "https://dl.dropboxusercontent.com/s/flk8bq8qi2mmy64/10.jpg", 
                     img_big: "https://dl.dropboxusercontent.com/s/5lz8nh425yha4w5/10.JPG?dl=0"},
                    {id: 11, img_small: "https://dl.dropboxusercontent.com/s/qdi9r9l2epzx19l/11.jpg", 
                     img_big: "https://dl.dropboxusercontent.com/s/81xi7nq9dfz5f1p/11.JPG?dl=0"},
                    {id: 12, img_small: "https://dl.dropboxusercontent.com/s/59kiq2euscti4x4/12.jpg", 
                     img_big: "https://dl.dropboxusercontent.com/s/zhrk03q79kx2sbk/12.JPG?dl=0"}],
            
            // blog gallery image
            getBlogPageImage: [
                    {id: 1, img_small: "https://dl.dropboxusercontent.com/s/g9vxnsu9jfddkq2/1.jpg?dl=0", 
                     img_big: "https://dl.dropboxusercontent.com/s/qeh7tmbhk9bs7rc/1.JPG?dl=0", type: "blog"},
                    {id: 2, img_small: "https://dl.dropboxusercontent.com/s/8oqqti7x7t4tjmm/2.jpg?dl=0", 
                     img_big: "https://dl.dropboxusercontent.com/s/ld99vqkwmn7nne0/2.JPG?dl=0", type: "blog"},
                    {id: 3, img_small: "https://dl.dropboxusercontent.com/s/kqp485wtteht3wd/3.jpg?dl=0", 
                     img_big: "https://dl.dropboxusercontent.com/s/pbke4hefsk2y2w5/3.JPG?dl=0", type: "blog"},
                    {id: 4, img_small: "https://dl.dropboxusercontent.com/s/dur24ncvmgzc0io/4.jpg?dl=0", 
                     img_big: "https://dl.dropboxusercontent.com/s/s2ero9gemabys4y/4.JPG?dl=0", type: "blog"},
                    {id: 5, img_small: "https://dl.dropboxusercontent.com/s/danz3b30o58y9da/5.jpg?dl=0", 
                     img_big: "https://dl.dropboxusercontent.com/s/9kf8v0u9u5cw3vt/5.JPG?dl=0", type: "blog"}],
            
            // wedding images
            getWeddingPageImage: [
                     {id: 1, img_small: "https://dl.dropboxusercontent.com/s/rr3x2skg8ojcwnh/_1.jpg?dl=0", img_big: "https://dl.dropboxusercontent.com/s/nnpmucqwne33lp9/1.JPG?dl=0", type: "wedding"},
                     {id: 2, img_small: "https://dl.dropboxusercontent.com/s/b2low9141u0lmxa/_2.jpg?dl=0", img_big: "https://dl.dropboxusercontent.com/s/s64a6zg24vsbt82/2.JPG?dl=0", type: "wedding"},
                     {id: 3, img_small: "https://dl.dropboxusercontent.com/s/aoqkghwzfkgd867/_3.jpg?dl=0", img_big: "https://dl.dropboxusercontent.com/s/pbgz5lvoj2yv52d/3.JPG?dl=0", type: "wedding"},
                     {id: 4, img_small: "https://dl.dropboxusercontent.com/s/r65dqvy6dbnv3st/_4.jpg?dl=0", img_big: "https://dl.dropboxusercontent.com/s/sr8k9z76qag1sk7/4.JPG?dl=0", type: "wedding"},
                     {id: 5, img_small: "https://dl.dropboxusercontent.com/s/orc7jvlfrl6880j/_5.jpg?dl=0", img_big: "https://dl.dropboxusercontent.com/s/zdpyviytrclt7vo/5.JPG?dl=0", type: "wedding"},
                     {id: 6, img_small: "https://dl.dropboxusercontent.com/s/rkpmpnbi0ff8a8t/_6.jpg?dl=0", img_big: "https://dl.dropboxusercontent.com/s/xfp2ghro3o2q5hf/6.JPG?dl=0", type: "wedding"},
                     {id: 7, img_small: "https://dl.dropboxusercontent.com/s/xny7ys1ab9nu6z6/_7.jpg?dl=0", img_big: "https://dl.dropboxusercontent.com/s/zaa4dlky9pdsl8k/7.JPG?dl=0", type: "wedding"},
                     {id: 8, img_small: "https://dl.dropboxusercontent.com/s/c15k6g54jc6fjyr/_8.jpg?dl=0", img_big: "https://dl.dropboxusercontent.com/s/vx419z596tacwhw/8.JPG?dl=0", type: "wedding"},
                     {id: 9, img_small: "https://dl.dropboxusercontent.com/s/iu4oh4dp0ao7wdi/_9.jpg?dl=0", img_big: "https://dl.dropboxusercontent.com/s/o7jfpq662p142f0/9.JPG?dl=0", type: "wedding"},
                     {id: 10, img_small: "https://dl.dropboxusercontent.com/s/ldmk7ydirj3n6si/_10.jpg?dl=0", img_big: "https://dl.dropboxusercontent.com/s/d6ju1adjkgjpxk0/10.JPG?dl=0", type: "wedding"},
                     {id: 11, img_small: "https://dl.dropboxusercontent.com/s/6brlyt0xe5283af/_11.jpg?dl=0", img_big: "https://dl.dropboxusercontent.com/s/vqpgepzxsciakl8/11.JPG?dl=0", type: "wedding"},
                     {id: 12, img_small: "https://dl.dropboxusercontent.com/s/q8tozgfgji0ht7y/_12.jpg?dl=0", img_big: "https://dl.dropboxusercontent.com/s/1xpc7orhimjbtzl/12.JPG?dl=0", type: "wedding"},
                     {id: 13, img_small: "https://dl.dropboxusercontent.com/s/cyxep16g6d5nw2e/_13.jpg?dl=0", img_big: "https://dl.dropboxusercontent.com/s/u9785kr3g97dws6/13.JPG?dl=0", type: "wedding"},
                     {id: 14, img_small: "https://dl.dropboxusercontent.com/s/9zjsawg1ihw5iu4/_14.jpg?dl=0", img_big: "https://dl.dropboxusercontent.com/s/tr5wsx9tvvf4brm/14.JPG?dl=0", type: "wedding"},
                     {id: 15, img_small: "https://dl.dropboxusercontent.com/s/a87ejeq08cvlxe4/_15.jpg?dl=0", img_big: "https://dl.dropboxusercontent.com/s/zqf2crosr1xi9ds/15.JPG?dl=0", type: "wedding"},
                     {id: 16, img_small: "https://dl.dropboxusercontent.com/s/9zfhh99z5uz99tn/_16.jpg?dl=0", img_big: "https://dl.dropboxusercontent.com/s/pjacz59h4zix38a/16.JPG?dl=0", type: "wedding"},
                     {id: 17, img_small: "https://dl.dropboxusercontent.com/s/lj35bxbvk21j0g4/_17.jpg?dl=0", img_big: "https://dl.dropboxusercontent.com/s/yspb00jkpukxv8c/17.JPG?dl=0", type: "wedding"},
                     {id: 18, img_small: "https://dl.dropboxusercontent.com/s/h3364fjqkz1l6pm/_18.jpg?dl=0", img_big: "https://dl.dropboxusercontent.com/s/zwhdp3v7aox8uxi/18.JPG?dl=0", type: "wedding"},
                     {id: 19, img_small: "https://dl.dropboxusercontent.com/s/th80j19elh7lxft/_19.jpg?dl=0", img_big: "https://dl.dropboxusercontent.com/s/91a94qv3qm2sllj/19.JPG?dl=0", type: "wedding"},
                     {id: 20, img_small: "https://dl.dropboxusercontent.com/s/y39xjkpzjsn17h7/_20.jpg?dl=0", img_big: "https://dl.dropboxusercontent.com/s/2tp0hixmpha9vdp/20.JPG?dl=0", type: "wedding"},
                     {id: 21, img_small: "https://dl.dropboxusercontent.com/s/1glih3w68eezltn/_21.jpg?dl=0", img_big: "https://dl.dropboxusercontent.com/s/hq0uai6jldtibp3/21.JPG?dl=0", type: "wedding"},
                     {id: 22, img_small: "https://dl.dropboxusercontent.com/s/ae17bao1ywt29oz/_22.jpg?dl=0", img_big: "https://dl.dropboxusercontent.com/s/5rqkzs9ngig9n1p/22.JPG?dl=0", type: "wedding"},
                     {id: 23, img_small: "https://dl.dropboxusercontent.com/s/72penjvuwkzhqsk/_23.jpg?dl=0", img_big: "https://dl.dropboxusercontent.com/s/9bylhpepby7dzzy/23.JPG?dl=0", type: "wedding"},
                     {id: 24, img_small: "https://dl.dropboxusercontent.com/s/kcc89n3psiw0xti/_24.jpg?dl=0", img_big: "https://dl.dropboxusercontent.com/s/8uwslfamxwl1x0i/24.JPG?dl=0", type: "wedding"},
                     {id: 25, img_small: "https://dl.dropboxusercontent.com/s/odyfzo8jv5m3fda/_25.jpg?dl=0", img_big: "https://dl.dropboxusercontent.com/s/w3tpigx3mkmw8tw/25.JPG?dl=0", type: "wedding"},
                     {id: 26, img_small: "https://dl.dropboxusercontent.com/s/c1bllvgicvxmuxo/_26.jpg?dl=0", img_big: "https://dl.dropboxusercontent.com/s/kty1ml7yylqovog/26.JPG?dl=0", type: "wedding"},
                     {id: 27, img_small: "https://dl.dropboxusercontent.com/s/09a7i3g4xky18m0/_27.jpg?dl=0", img_big: "https://dl.dropboxusercontent.com/s/qjlmuhkr6vae7bv/27.JPG?dl=0", type: "wedding"},
                     {id: 28, img_small: "https://dl.dropboxusercontent.com/s/4mtgvfznu6dz8oe/_28.jpg?dl=0", img_big: "https://dl.dropboxusercontent.com/s/zgwv7oymue85cws/28.JPG?dl=0", type: "wedding"},
                     {id: 29, img_small: "https://dl.dropboxusercontent.com/s/61irxmfid4l7dt0/_29.jpg?dl=0", img_big: "https://dl.dropboxusercontent.com/s/cfcr6kmlbzsuch8/29.JPG?dl=0", type: "wedding"},
                     {id: 30, img_small: "https://dl.dropboxusercontent.com/s/5ycir31n1bs6lxj/_30.jpg?dl=0", img_big: "https://dl.dropboxusercontent.com/s/9hpvo7f4c4l0y50/30.JPG?dl=0", type: "wedding"},
                     {id: 31, img_small: "https://dl.dropboxusercontent.com/s/7n6gy4e52as0dsq/_31.jpg?dl=0", img_big: "https://dl.dropboxusercontent.com/s/q1lnn9td84r6czo/31.JPG?dl=0", type: "wedding"},
                     {id: 32, img_small: "https://dl.dropboxusercontent.com/s/9cmpkf9u4bgp2jy/_32.jpg?dl=0", img_big: "https://dl.dropboxusercontent.com/s/ck12tra1ezaoea4/32.JPG?dl=0", type: "wedding"},
                     {id: 33, img_small: "https://dl.dropboxusercontent.com/s/y7dn9d3r9ewxp3h/_33.jpg?dl=0", img_big: "https://dl.dropboxusercontent.com/s/3o4lyju2evjxygz/33.JPG?dl=0", type: "wedding"},
                     {id: 34, img_small: "https://dl.dropboxusercontent.com/s/0mgwr7djrch0alu/_34.jpg?dl=0", img_big: "https://dl.dropboxusercontent.com/s/gosoo9ide7jj21z/34.JPG?dl=0", type: "wedding"},
                     {id: 35, img_small: "https://dl.dropboxusercontent.com/s/2gsrls1nm2tqvz5/_35.jpg?dl=0", img_big: "https://dl.dropboxusercontent.com/s/pe9cscb65nyd44a/35.JPG?dl=0", type: "wedding"},
                     {id: 36, img_small: "https://dl.dropboxusercontent.com/s/4zbi1r4twzl5e7s/_36.jpg?dl=0", img_big: "https://dl.dropboxusercontent.com/s/0ry6yhrnxqvk9d8/36.JPG?dl=0", type: "wedding"},
                     {id: 37, img_small: "https://dl.dropboxusercontent.com/s/ortelzwuh7y7z56/_37.jpg?dl=0", img_big: "https://dl.dropboxusercontent.com/s/fdmj0om93ta0mgk/37.JPG?dl=0", type: "wedding"}]
        }
        
    }; // imageFactory

    application.factory('imageFactory', imageFactory);

}());