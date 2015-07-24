(function(){
    var imageFactory = function(){

        return {
            // general gallery image
            getGeneralPageImage: [
                    {id: 1, img_small: "111.jpg", img_big: "1.jpg"},
                    {id: 2, img_small: "222.jpg", img_big: "2.jpg"},
                    {id: 3, img_small: "333.jpg", img_big: "3.jpg"},
                    {id: 4, img_small: "444.jpg", img_big: "4.jpg"},
                    {id: 5, img_small: "555.jpg", img_big: "5.jpg"},
                    {id: 6, img_small: "666.jpg", img_big: "6.jpg"},
                    {id: 7, img_small: "777.jpg", img_big: "7.jpg"},
                    {id: 8, img_small: "888.jpg", img_big: "8.jpg"},
                    {id: 9, img_small: "999.jpg", img_big: "9.jpg"},
                    {id: 10, img_small: "1010.jpg", img_big: "10.jpg"},
                    {id: 11, img_small: "1111.jpg", img_big: "11.jpg"},
                    {id: 12, img_small: "1212.jpg", img_big: "12.jpg"}],
            
            // blog gallery image
            getBlogPageImage: [
                    {id: 1, img_small: "11.jpg", img_big: "1.jpg", type: "blog"},
                    {id: 2, img_small: "22.jpg", img_big: "2.jpg", type: "blog"},
                    {id: 3, img_small: "33.jpg", img_big: "3.jpg", type: "blog"},
                    {id: 4, img_small: "44.jpg", img_big: "4.jpg", type: "blog"},
                    {id: 5, img_small: "55.jpg", img_big: "5.jpg", type: "blog"}],
            
            // wedding images
            getWeddingPageImage: [
                     {id: 1, img_small: "_1.jpg", img_big: "1.jpg", type: "wedding"},
                     {id: 2, img_small: "_2.jpg", img_big: "2.jpg", type: "wedding"},
                     {id: 3, img_small: "_3.jpg", img_big: "3.jpg", type: "wedding"},
                     {id: 4, img_small: "_4.jpg", img_big: "4.jpg", type: "wedding"},
                     {id: 5, img_small: "_5.jpg", img_big: "5.jpg", type: "wedding"},
                     {id: 6, img_small: "_6.jpg", img_big: "6.jpg", type: "wedding"},
                     {id: 7, img_small: "_7.jpg", img_big: "7.jpg", type: "wedding"},
                     {id: 8, img_small: "_8.jpg", img_big: "8.jpg", type: "wedding"},
                     {id: 9, img_small: "_9.jpg", img_big: "9.jpg", type: "wedding"},
                     {id: 10, img_small: "_10.jpg", img_big: "10.jpg", type: "wedding"},
                     {id: 11, img_small: "_11.jpg", img_big: "11.jpg", type: "wedding"},
                     {id: 12, img_small: "_12.jpg", img_big: "12.jpg", type: "wedding"},
                     {id: 13, img_small: "_13.jpg", img_big: "13.jpg", type: "wedding"},
                     {id: 14, img_small: "_14.jpg", img_big: "14.jpg", type: "wedding"},
                     {id: 15, img_small: "_15.jpg", img_big: "15.jpg", type: "wedding"},
                     {id: 16, img_small: "_16.jpg", img_big: "16.jpg", type: "wedding"},
                     {id: 17, img_small: "_17.jpg", img_big: "17.jpg", type: "wedding"},
                     {id: 18, img_small: "_18.jpg", img_big: "18.jpg", type: "wedding"},
                     {id: 19, img_small: "_19.jpg", img_big: "19.jpg", type: "wedding"},
                     {id: 20, img_small: "_20.jpg", img_big: "20.jpg", type: "wedding"},
                     {id: 21, img_small: "_21.jpg", img_big: "21.jpg", type: "wedding"},
                     {id: 22, img_small: "_22.jpg", img_big: "22.jpg", type: "wedding"},
                     {id: 23, img_small: "_23.jpg", img_big: "23.jpg", type: "wedding"},
                     {id: 24, img_small: "_24.jpg", img_big: "24.jpg", type: "wedding"},
                     {id: 25, img_small: "_25.jpg", img_big: "25.jpg", type: "wedding"},
                     {id: 26, img_small: "_26.jpg", img_big: "26.jpg", type: "wedding"},
                     {id: 27, img_small: "_27.jpg", img_big: "27.jpg", type: "wedding"},
                     {id: 28, img_small: "_28.jpg", img_big: "28.jpg", type: "wedding"},
                     {id: 29, img_small: "_29.jpg", img_big: "29.jpg", type: "wedding"},
                     {id: 30, img_small: "_30.jpg", img_big: "30.jpg", type: "wedding"},
                     {id: 31, img_small: "_31.jpg", img_big: "31.jpg", type: "wedding"},
                     {id: 32, img_small: "_32.jpg", img_big: "32.jpg", type: "wedding"},
                     {id: 33, img_small: "_33.jpg", img_big: "33.jpg", type: "wedding"},
                     {id: 34, img_small: "_34.jpg", img_big: "34.jpg", type: "wedding"},
                     {id: 35, img_small: "_35.jpg", img_big: "35.jpg", type: "wedding"},
                     {id: 36, img_small: "_36.jpg", img_big: "36.jpg", type: "wedding"},
                     {id: 37, img_small: "_37.jpg", img_big: "37.jpg", type: "wedding"}]
        }
        
    }; // imageFactory

    application.factory('imageFactory', imageFactory);

}());