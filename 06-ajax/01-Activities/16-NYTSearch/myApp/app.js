// my API KEY: 2a3b8050f098430ab605f18560b30039

// Article Search API documentation: http://developer.nytimes.com/article_search_v2.json#/README

// http://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&page=2&sort=oldest&api-key=####

var apikey = "2a3b8050f098430ab605f18560b30039";
var searchTerm = "organic+food";
var searchQty = 3;
var newsDesk = array["Adventure Sports", "Arts & Leisure", "Arts", "Automobiles", "Blogs", "Books", "Booming", "Business Day", "Business", "Cars", "Circuits", "Classifieds", "Connecticut", "Crosswords & Games", "Culture", "DealBook", "Dining", "Editorial", "Education", "Energy", "Entrepreneurs", "Environment", "Escapes", "Fashion & Style", "Fashion", "Favorites", "Financial", "Flight", "Food", "Foreign", "Generations", "Giving", "Global Home", "Health & Fitness", "Health", "Home & Garden", "Home", "Jobs", "Key", "Letters", "Long Island", "Magazine", "Market Place", "Media", "Men's Health", "Metro", "Metropolitan", "Movies", "Museums", "National", "Nesting", "Obits", "Obituaries", "Obituary", "OpEd", "Opinion", "Outlook", "Personal Investing", "Personal Tech", "Play", "Politics", "Regionals", "Retail", "Retirement", "Science", "Small Business", "Society", "Sports", "Style", "Sunday Business", "Sunday Review", "Sunday Styles", "T Magazine", "T Style", "Technology", "Teens", "Television", "The Arts", "The Business of Green", "The City Desk", "The City", "The Marathon", "The Millennium", "The Natural World", "The Upshot", "The Weekend", "The Year in Pictures", "Theater", "Then & Now", "Thursday Styles", "Times Topics", "Travel", "U.S.", "Universal", "Upshot", "UrbanEye", "Vacation", "Washington", "Wealth", "Weather", "Week in Review", "Week", "Weekend", "Westchester", "Wireless Living", "Women's Health", "Working", "Workplace", "World", "Your Money"];


$("#submit").on("click", function (event) {
    $.ajax({
        url: "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&page=" + searchQty + "&sort=newest&api-key=2a3b8050f098430ab605f18560b30039",
        method: "GET"
    }).then(function (response) {
        // all the things go here
        var myJSON = JSON.stringify(response);
        // $("#movie-view").text(JSON.stringify(response));
        console.log(myJSON);
        $("searchResults").text(myJSON);

    });
});